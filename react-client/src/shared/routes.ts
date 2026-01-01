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
  AUTH: {
    to: '/auth',
    path: '/auth',
  },
} as const;
