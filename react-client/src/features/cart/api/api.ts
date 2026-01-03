import { baseApi } from '@/shared/api';
import type { AddToCartBody, AddToCartResult, GetMyCartResult, RemoveFromCartBody, RemoveFromCartResult } from './types';

const cartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyCart: builder.query<GetMyCartResult, string>({
      query: () => 'carts/my',
    }),

    addToCart: builder.mutation<AddToCartResult, AddToCartBody>({
      query: (body) => ({
        url: 'carts/add-to-cart',
        method: 'POST',
        body,
      }),
    }),

    removeFromCart: builder.mutation<RemoveFromCartResult, RemoveFromCartBody>({
      query: (body) => ({
        url: 'carts/remove-from-cart',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useGetMyCartQuery, useAddToCartMutation, useRemoveFromCartMutation } = cartApi;
