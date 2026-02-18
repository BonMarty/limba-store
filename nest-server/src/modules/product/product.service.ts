import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { firstValueFrom } from 'rxjs';
import { NormalizationService } from 'src/common/normalization';
import { PrismaService } from 'src/common/prisma';
import type { Product } from 'src/shared/types';
import { productCategoryMapper } from 'src/shared/utils';
import { FindAllQueryDto } from './dto';

@Injectable()
export class ProductService {
  constructor(
    private readonly httpService: HttpService,
    private readonly prisma: PrismaService,
    private readonly normalizationService: NormalizationService,
  ) {}

  async findAll(query: FindAllQueryDto) {
    const { limit, page, search, sortBy, sortOrder } = query;

    const skip = page && limit ? (page - 1) * limit : undefined;
    const take = limit ?? 5;

    const where: Prisma.ProductWhereInput = search
      ? {
          title: {
            contains: search,
            mode: 'insensitive',
          },
        }
      : {};

    const orderBy: Prisma.ProductOrderByWithRelationInput = sortBy
      ? {
          [sortBy]: sortOrder ?? 'desc',
        }
      : {
          id: 'asc',
        };

    const [data, total] = await Promise.all([
      this.prisma.product.findMany({
        orderBy,
        where,
        skip,
        take,
      }),
      this.prisma.product.count({ where }),
    ]);

    const normalizedData = data.map((product) =>
      this.normalizationService.normalizeProduct(product),
    );

    return {
      data: normalizedData,
      meta: {
        total,
        page: page ?? 1,
      },
    };
  }

  async createMany() {
    const response = await firstValueFrom(
      this.httpService.get<Product[]>('https://fakestoreapi.com/products'),
    );

    const products = await this.prisma.product.createMany({
      data: response.data.map((product) => {
        const { rating, category, ...rest } = product;

        return {
          ...rest,
          category: productCategoryMapper[category],
          count: rating.count,
          rate: rating.rate,
        } satisfies Prisma.ProductCreateInput;
      }),
    });

    return products;
  }
}
