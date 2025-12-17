import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { Prisma } from 'generated/prisma';
import { firstValueFrom } from 'rxjs';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { Product } from 'src/shared/types';
import {
  productCategoryDisplayMapper,
  productCategoryMapper,
} from 'src/shared/utils';
import { ProductResponseDto } from './dto';

@Injectable()
export class ProductService {
  constructor(
    private readonly httpService: HttpService,
    private readonly prisma: PrismaService,
  ) {}

  async findAll() {
    const products = await this.prisma.product.findMany();

    const productsDtos: ProductResponseDto[] = products.map((product) => {
      const { rate, count, price, category, ...rest } = product;

      return {
        ...rest,
        category: productCategoryDisplayMapper[category],
        price: String(price),
        rating: {
          rate,
          count,
        },
      };
    });

    return plainToInstance(ProductResponseDto, productsDtos);
  }

  async reset() {
    await this.prisma.reset();

    return true;
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
