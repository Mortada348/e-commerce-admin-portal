"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Product } from "@/objects/Product";
import { Orders } from "@/objects/Orders";
import { useGetAllProductsQuery } from "@/redux/services/productApi";
import { useGetAllOrdersQuery } from "@/redux/services/orderApi";

export const useDashboard = () => {
  const {
    data: products = [],
    isLoading: isProductsLoading,
    error: productsError,
  } = useGetAllProductsQuery();
  const {
    data: orders = [],
    isLoading: isOrdersLoading,
    error: ordersError,
  } = useGetAllOrdersQuery({});

  const productColumns: ColumnDef<Product>[] = [
    { accessorKey: "name", header: "Product Name" },
    { accessorKey: "description", header: "Description" },
    { accessorKey: "price", header: "Price ($)" },
    { accessorKey: "stock", header: "Stock" },
    { accessorKey: "category", header: "Category" },
    { accessorKey: "imageUrl", header: "Image" },
  ];
  const orderColumns: ColumnDef<Orders>[] = [
    { accessorKey: "username", header: "User Name" },
    {
      accessorKey: "quantity",
      header: "Quantity",
    },
    { accessorKey: "productName", header: "Product Name" },
    {
      accessorKey: "date",
      header: "Date",
    },
  ];

  return {
    products,
    orders,
    productColumns,
    orderColumns,
  };
};
