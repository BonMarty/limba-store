import { baseApi } from '@/shared/api';
import type { GetMeResult } from './types';

export const profileInfoApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMe: builder.query<GetMeResult, string>({
      query: () => 'auth/@me',
    }),
  }),
  overrideExisting: false,
});

export const { useGetMeQuery } = profileInfoApi;
