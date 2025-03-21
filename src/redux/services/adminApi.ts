import { Admin } from "@/objects/Admin";
import { createApi } from "@reduxjs/toolkit/query/react";
import { createBaseQuery } from "../baseQuery";

export const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: createBaseQuery("admins"),
  tagTypes: ["Admins"],

  endpoints: (builder) => ({
    getAdminById: builder.query<Admin, number>({
      query: (id) => `/getAdminById/${id}`,
      providesTags: (result, error, id) => [{ type: "Admins", id }],
    }),
    updateAdmin: builder.mutation<
      Admin,
      { id: number; updatedAdmin: Partial<Admin> }
    >({
      query: ({ id, updatedAdmin }) => ({
        url: `/updateAdmin/${id}`,
        method: "PUT",
        body: updatedAdmin,
      }),
      invalidatesTags: ["Admins"],
    }),
  }),
});

export const { useGetAdminByIdQuery, useUpdateAdminMutation } = adminApi;
