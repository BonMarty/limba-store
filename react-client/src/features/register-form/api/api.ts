import { baseApi } from '@/shared/api';
import type { RegisterBody, RegisterResult } from './types';

const registerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<RegisterResult, RegisterBody>({
      query: (body) => ({
        url: 'auth/register',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useRegisterMutation } = registerApi;
