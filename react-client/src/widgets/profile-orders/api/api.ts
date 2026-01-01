import { baseApi } from '@/shared/api';
import type { GetProfileInfoResult } from './types';

export const profileOrdersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyOrders: builder.query<GetProfileInfoResult[], string>({
      query: () => 'orders/my',
    }),
  }),
  overrideExisting: false,
});

export const { useGetMyOrdersQuery } = profileOrdersApi;
