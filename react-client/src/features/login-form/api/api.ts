import { baseApi } from '@/shared/api';
import type { LoginBody, LoginResult } from './types';

export const loginApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResult, LoginBody>({
      query: (body) => ({
        url: 'auth/login',
        method: 'POST',
        body,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useLoginMutation } = loginApi;
