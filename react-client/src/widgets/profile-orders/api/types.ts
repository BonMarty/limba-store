import type { Product } from '@/shared/api';

export interface GetProfileInfoResult {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
  items: Product[];
}
