export const routes = {
  HOME: {
    to: '/',
  },
  PRODUCTS: {
    to: '/products',
  },
  PRODUCT: {
    to: (id: number) => `/products/${id}`,
  },
} as const;
