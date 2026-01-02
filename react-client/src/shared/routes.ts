export const routes = {
  HOME: {
    to: '/',
    path: '/',
  },
  PRODUCTS: {
    to: '/products',
    path: '/products',
  },
  PRODUCT: {
    to: (id: number) => `/products/${id}`,
    path: '/products/:productId',
  },
  PROFILE: {
    to: '/profile',
    path: '/profile',
  },
  CART: {
    to: '/cart',
    path: '/cart',
  },
  AUTH: {
    to: '/auth',
    path: '/auth',
  },
} as const;
