import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createBaseQuery } from "../baseQuery";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: createBaseQuery("auth"),

  endpoints: (builder) => ({
    login: builder.mutation<
      { token: string },
      { email: string; password: string }
    >({
      query: (credentials) => ({
        url: "/Login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
