import { Orders } from "@/Models/Orders";
import { ColumnDef, orderColumns } from "@tanstack/react-table";

export const useOrderManagement = () => {
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
    console.log("Edit Order with ID:", id);
  };

  const handleDeleteOrder = (id: number) => {
    console.log("Delete Order with ID:", id);
  };

  return {
    orders,
    orderColumns,
    handleEditOrder,
    handleDeleteOrder,
  };
};
