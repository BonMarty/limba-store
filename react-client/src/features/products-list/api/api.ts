import { baseApi, type Product } from '@/shared/api';

export const productsListApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], string>({
      query: () => 'products',
    }),
  }),
  overrideExisting: false,
});

export const { useGetProductsQuery } = productsListApi;
