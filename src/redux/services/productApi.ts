import { Product } from "@/objects/Product";
import { createApi } from "@reduxjs/toolkit/query/react";
import { createBaseQuery } from "../baseQuery";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: createBaseQuery("products"),
  tagTypes: ["Products"],

  endpoints: (builder) => ({
    getAllProducts: builder.query<Product[], void>({
      query: () => "/getAllProducts",
      providesTags: ["Products"],
    }),

    getProductById: builder.query<Product, number>({
      query: (id) => `/getProductById/${id}`,
      providesTags: (result, error, id) => [{ type: "Products", id }],
    }),

    createProduct: builder.mutation<Product, Partial<Product>>({
      query: (newProduct) => ({
        url: "/createProduct",
        method: "POST",
        body: newProduct,
      }),
      invalidatesTags: ["Products"],
    }),

    updateProduct: builder.mutation<
      Product,
      { id: number; updatedProduct: Partial<Product> }
    >({
      query: ({ id, updatedProduct }) => ({
        url: `/updateProduct/${id}`,
        method: "PUT",
        body: updatedProduct,
      }),
      invalidatesTags: ["Products"],
    }),

    deleteProduct: builder.mutation<string, number>({
      query: (id) => ({
        url: `/deleteProduct/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Products"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
