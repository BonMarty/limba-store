import type { Product } from '@/shared/api';

export interface GetMyCartResult {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
  items: Product[];
  totalPrice: number;
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

export interface CheckoutResult {
  id: number;
  items: Product[];
  createdAt: Date;
  updatedAt: Date;
}

export interface CheckoutBody {
  items: Product[];
}
