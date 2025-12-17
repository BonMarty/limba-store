import type { Product } from 'generated/prisma';

type BaseProduct = Omit<Product, 'price' | 'rate' | 'count' | 'category'>;

export class ProductResponseDto implements BaseProduct {
  id: number;
  title: string;
  price: string;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  createdAt: Date;
  updatedAt: Date;
}
