import { Injectable } from '@nestjs/common';
import { Prisma, Product } from 'generated/prisma';
import { NormalizedProduct } from 'src/shared/types';
import { productCategoryDisplayMapper } from 'src/shared/utils';

@Injectable()
export class NormalizationService {
  normalizeProduct(product: Product): NormalizedProduct {
    const { cartId, ...productWithoutCartId } = product;

    const { category, price, rate, count, ...rest } = productWithoutCartId;

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

  normalizeCart(cart: Prisma.CartGetPayload<{ include: { items: true } }>) {
    const { items, totalPrice, ...rest } = cart;

    return {
      ...rest,
      totalPrice: Number(totalPrice),
      items: items.map((item) => this.normalizeProduct(item)),
    };
  }
}
