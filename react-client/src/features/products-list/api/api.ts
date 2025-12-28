import { baseApi, type Product } from '@/shared/api';

export const productsListApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], string>({
      query: () => 'products',
    }),

    getMe: builder.query({
      query: () => 'auth/@me',
    }),
  }),
  overrideExisting: false,
});

export const { useGetProductsQuery, useGetMeQuery } = productsListApi;
