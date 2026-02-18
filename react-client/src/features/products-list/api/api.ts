import { baseApi, type Product } from '@/shared/api';

export const productsListApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<
      {
        data: Product[];
        meta: {
          total: number;
          page: number;
        };
      },
      string
    >({
      query: () => 'products',
    }),

    createManyProducts: builder.mutation<{ count: number }, void>({
      query: () => ({
        url: 'products/create-many',
        method: 'POST',
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetProductsQuery, useCreateManyProductsMutation } = productsListApi;
