import { ColumnDef } from "@tanstack/react-table";
import { Product } from "@/Models/Product";
import { Orders } from "@/Models/Orders";

export const useDashboard = () => {
  const products = [
    {
      id: 1,
      name: "Wireless Mouse",
      description: "Ergonomic wireless mouse with adjustable DPI.",
      price: 25.99,
      stock: 50,
      category: "Accessories",
      imageUrl: "https://example.com/images/wireless-mouse.jpg",
    },
    {
      id: 2,
      name: "Mechanical Keyboard",
      description: "RGB mechanical keyboard with blue switches.",
      price: "79.99",
      stock: "20",
      category: "Keyboards",
      imageUrl: "https://example.com/images/mechanical-keyboard.jpg",
    },
    {
      id: 3,
      name: "USB-C Hub",
      description: "7-in-1 USB-C hub with HDMI and SD card reader.",
      price: 34.5,
      stock: 35,
      category: "Adapters",
      imageUrl: "https://example.com/images/usb-c-hub.jpg",
    },
    {
      id: 4,
      name: "External Hard Drive",
      description: "1TB portable external hard drive for backup storage.",
      price: "99.00",
      stock: "15",
      category: "Storage",
      imageUrl: "https://example.com/images/external-hard-drive.jpg",
    },
    {
      id: 5,
      name: "Bluetooth Headphones",
      description:
        "Noise-canceling Bluetooth headphones with 40-hour battery life.",
      price: 59.99,
      stock: 30,
      category: "Audio",
      imageUrl: "https://example.com/images/bluetooth-headphones.jpg",
    },
  ];
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
