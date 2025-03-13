import { ColumnDef } from "@tanstack/react-table";
import { Product } from "@/Models/Product";
import { Orders } from "@/Models/Orders";
import { ShoppingCart, Package, Users } from "lucide-react";

export const useDashboard = () => {
  const products = [
    {
      id: 531,
      name: "1",
      description: "ihihf",
      price: 20,
      stock: 50,
      category: "offv",
      imageUrl: "s/s/s",
    },
    {
      id: 531,
      name: "1",
      description: "ihihf",
      price: 20,
      stock: 50,
      category: "offv",
      imageUrl: "s/s/s",
    },
    {
      id: 531,
      name: "1",
      description: "ihihf",
      price: 20,
      stock: 50,
      category: "offv",
      imageUrl: "s/s/s",
    },
    {
      id: 531,
      name: "1",
      description: "ihihf",
      price: 20,
      stock: 50,
      category: "offv",
      imageUrl: "s/s/s",
    },
  ];

  const orders = [
    {
      id: 531,
      username: "1",
      quantity: 20,
      productName: "high quality",
      date: "1/8/2022",
    },
    {
      id: 532,
      username: "1",
      quantity: 20,
      productName: "high quality",
      date: "1/8/2022",
    },
    {
      id: 533,
      username: "1",
      quantity: 20,
      productName: "high quality",
      date: "1/8/2022",
    },
    {
      id: 534,
      username: "1",
      quantity: 20,
      productName: "high quality",
      date: "1/8/2022",
    },
  ];

  const productColumns: ColumnDef<Product>[] = [
    { accessorKey: "name", header: "Product Name" },
    { accessorKey: "description", header: "Description" },
    {
      accessorKey: "price",
      header: "Price ($)",
    },
    {
      accessorKey: "stock",
      header: "Stock",
    },
    {
      accessorKey: "category",
      header: "Category",
    },
    {
      accessorKey: "imageUrl",
      header: "Image",
    },
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

  const handleEdit = (id: number) => {
    console.log("Edit Order with ID:", id);
  };

  const handleDelete = (id: number) => {
    console.log("Delete Order with ID:", id);
  };

  return {
    products,
    orders,
    productColumns,
    orderColumns,
  };
};
