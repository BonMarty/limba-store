import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { firstValueFrom } from 'rxjs';
import { PrismaService } from 'src/common/prisma';
import { Product } from 'src/shared/types';
import { productCategoryMapper } from 'src/shared/utils';

@Injectable()
export class ProductService {
  constructor(
    private readonly httpService: HttpService,
    private readonly prisma: PrismaService,
  ) {}

  async findAll() {
    return await this.prisma.product.findMany();
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
