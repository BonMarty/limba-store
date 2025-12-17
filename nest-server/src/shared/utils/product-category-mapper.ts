import { ProductCategory } from 'generated/prisma';

export const productCategoryMapper: Record<string, ProductCategory> = {
  "men's clothing": 'MENS_CLOTHING',
  jewelery: 'JEWELERY',
  electronics: 'ELECTRONICS',
  "women's clothing": 'WOMENS_CLOTHING',
};

export const productCategoryDisplayMapper: Record<ProductCategory, string> = {
  MENS_CLOTHING: "men's clothing",
  JEWELERY: 'jewelery',
  ELECTRONICS: 'electronics',
  WOMENS_CLOTHING: "women's clothing",
};
