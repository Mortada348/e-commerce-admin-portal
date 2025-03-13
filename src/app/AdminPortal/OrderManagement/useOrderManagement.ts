import { Orders } from "@/Models/Orders";
import { ColumnDef } from "@tanstack/react-table";
import { useRouter } from "next/navigation";

export const useOrderManagement = () => {
  const router = useRouter();
  const orders = [
    {
      id: 1,
      username: "john_doe",
      quantity: 2,
      productName: "Wireless Mouse",
      date: "2025-03-10",
    },
    {
      id: 2,
      username: "alice_smith",
      quantity: 1,
      productName: "Mechanical Keyboard",
      date: "2025-03-11",
    },
    {
      id: 3,
      username: "michael_brown",
      quantity: "3",
      productName: "USB-C Hub",
      date: "2025-03-12",
    },
    {
      id: 4,
      username: "sara_jones",
      quantity: 5,
      productName: "External Hard Drive",
      date: "2025-03-13",
    },
    {
      id: 5,
      username: "david_wilson",
      quantity: "1",
      productName: "Bluetooth Headphones",
      date: "2025-03-14",
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
    router.push(`/AdminPortal/AddOrder/${id}`);
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
