import { Product } from "@/objects/Product";
import {
  useDeleteProductMutation,
  useGetAllProductsQuery,
} from "@/redux/services/productApi";
import { ColumnDef } from "@tanstack/react-table";
import { useRouter } from "next/navigation";

export const useProductManagement = () => {
  const router = useRouter();

  const { data: products = [], isLoading, error } = useGetAllProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();

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
      accessorKey: "categoryName",
      header: "Category",
    },
    {
      accessorKey: "ImageUrl",
      header: "Image",
    },
  ];

  const handleEditProduct = (id: number) => {
    router.push(`/AdminPortal/AddProduct/${id}`);
  };

  const handleDeleteProduct = async (id: number) => {
    await deleteProduct(id);
  };
  return {
    products,
    productColumns,
    handleEditProduct,
    handleDeleteProduct,
  };
};
