import { Injectable } from '@nestjs/common';
import { Prisma, Product } from 'generated/prisma';
import { NormalizedProduct } from 'src/shared/types';
import { productCategoryDisplayMapper } from 'src/shared/utils';

@Injectable()
export class NormalizationService {
  normalizeProduct(product: Product): NormalizedProduct {
    const { price, rate, count, category, ...rest } = product;

    return {
      ...rest,
      category: productCategoryDisplayMapper[category],
      price: Number(price),
      rating: {
        rate: Number(rate),
        count,
      },
    };
  }

  normalizeOrder(order: Prisma.OrderGetPayload<{ include: { items: true } }>) {
    const { items, ...rest } = order;

    return {
      ...rest,
      items: items.map((item) => this.normalizeProduct(item)),
    };
  }
}
