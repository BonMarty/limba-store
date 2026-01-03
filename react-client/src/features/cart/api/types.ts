import type { Product } from '@/shared/api';

export interface GetMyCartResult {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
  items: Product[];
}

export interface AddToCartResult {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
}

export interface AddToCartBody {
  item: Product;
}

export interface RemoveFromCartResult {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
}

export interface RemoveFromCartBody {
  item: Product;
}
