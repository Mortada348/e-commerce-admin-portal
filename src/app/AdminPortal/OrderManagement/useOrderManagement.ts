import { Orders } from "@/objects/Orders";
import {
  useDeleteOrderMutation,
  useGetAllOrdersQuery,
} from "@/redux/services/orderApi";
import { ColumnDef } from "@tanstack/react-table";
import { useRouter } from "next/navigation";

export const useOrderManagement = () => {
  const router = useRouter();
  const { data: Orders = [], isLoading, error } = useGetAllOrdersQuery();
  const [deleteOrder] = useDeleteOrderMutation();
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
  const handleEditOrder = (id: number) => {
    router.push(`/AdminPortal/AddOrder/${id}`);
  };

  const handleDeleteOrder = async (id: number) => {
    await deleteOrder(id);
  };
  return {
    Orders,
    orderColumns,
    handleEditOrder,
    handleDeleteOrder,
  };
};
