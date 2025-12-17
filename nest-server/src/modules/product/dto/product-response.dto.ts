import type { $Enums, Product } from 'generated/prisma';

type BaseProduct = Omit<Product, 'price' | 'rate' | 'count'>;

export class ProductResponseDto implements BaseProduct {
  id: number;
  title: string;
  price: string;
  description: string;
  category: $Enums.ProductCategory;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  createdAt: Date;
  updatedAt: Date;
}
