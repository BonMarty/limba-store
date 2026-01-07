import { baseApi } from '@/shared/api';
import type { GetMeResult } from './types';

export const profileInfoApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMe: builder.query<GetMeResult, string>({
      query: () => 'auth/@me',
    }),

    logout: builder.mutation<boolean, void>({
      query: () => ({
        url: 'auth/logout',
        method: 'POST',
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetMeQuery, useLogoutMutation } = profileInfoApi;
