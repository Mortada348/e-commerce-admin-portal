import { Product } from "@/Models/Product";
import { ColumnDef } from "@tanstack/react-table";
import { useRouter } from "next/navigation";

export const useProductManagement = () => {
  const router = useRouter();

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
  const handleEditProduct = (id: number) => {
    console.log("Edit Order with ID:", id);
    router.push(`/AdminPortal/AddProduct/${id}`);
  };

  const handleDeleteProduct = (id: number) => {
    console.log("Delete Order with ID:", id);
  };
  return {
    products,
    productColumns,
    handleEditProduct,
    handleDeleteProduct,
  };
};
