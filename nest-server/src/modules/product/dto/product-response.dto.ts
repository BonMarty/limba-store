import { Type } from 'class-transformer';
import type { Product } from 'generated/prisma';

type BaseProduct = Omit<
  Product,
  'price' | 'rate' | 'count' | 'category' | 'cartId'
>;

class RatingDto {
  rate: number;
  count: number;
}

export class ProductResponseDto implements BaseProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  @Type(() => RatingDto)
  rating: RatingDto;
  createdAt: Date;
  updatedAt: Date;
}
