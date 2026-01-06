import { baseApi } from '@/shared/api';
import type { AddToCartBody, AddToCartResult, CheckoutBody, CheckoutResult, GetMyCartResult, RemoveFromCartBody, RemoveFromCartResult } from './types';

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

    clearCart: builder.mutation<boolean, void>({
      query: () => ({
        url: 'carts/clear-cart',
        method: 'POST',
      }),
    }),

    checkout: builder.mutation<CheckoutResult, CheckoutBody>({
      query: (body) => ({
        url: 'orders/create',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useGetMyCartQuery, useAddToCartMutation, useRemoveFromCartMutation, useClearCartMutation, useCheckoutMutation } = cartApi;
