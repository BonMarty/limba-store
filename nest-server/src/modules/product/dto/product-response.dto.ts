import { Transform } from 'class-transformer';
import type { Product } from 'generated/prisma';

type BaseProduct = Omit<Product, 'price' | 'rate' | 'count' | 'category'>;

interface Rating {
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
  @Transform(({ obj }: { obj: Rating }) => ({
    rate: obj.rate,
    count: obj.count,
  }))
  rating: Rating;
  createdAt: Date;
  updatedAt: Date;
}
