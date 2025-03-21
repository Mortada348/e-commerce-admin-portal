import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createBaseQuery } from "../baseQuery";
import { Orders } from "@/objects/Orders";

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: createBaseQuery("orders"),
  tagTypes: ["Orders"],
  endpoints: (builder) => ({
    getAllOrders: builder.query<Orders[], void>({
      query: () => "/getAllOrders",
      providesTags: ["Orders"],
    }),

    getOrderById: builder.query<Orders, number>({
      query: (id) => `/getOrderById/${id}`,
      providesTags: (result, error, id) => [{ type: "Orders", id }],
    }),

    createOrder: builder.mutation<Orders, Partial<Orders>>({
      query: (newOrder) => ({
        url: "/createOrder",
        method: "POST",
        body: newOrder,
      }),
      invalidatesTags: ["Orders"],
    }),
    updateOrder: builder.mutation<
      Orders,
      { id: number; updatedOrder: Partial<Orders> }
    >({
      query: ({ id, updatedOrder }) => ({
        url: `/updateOrder/${id}`,
        method: "PUT",
        body: updatedOrder,
      }),
      invalidatesTags: ["Orders"],
    }),
    deleteOrder: builder.mutation<string, number>({
      query: (id) => ({
        url: `/deleteOrder/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Orders"],
    }),
  }),
});

export const {
  useGetAllOrdersQuery,
  useGetOrderByIdQuery,
  useCreateOrderMutation,
  useUpdateOrderMutation,
  useDeleteOrderMutation,
} = orderApi;
