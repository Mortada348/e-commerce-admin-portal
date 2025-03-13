import { Orders } from "@/Models/Orders";

export const useAddOrder = () => {
  const formFields = [
    {
      name: "username",
      label: "Username",
      placeholder: "Enter the username",
      description: "Enter the name of the client.",
    },
    {
      name: "quantity",
      label: "Quantity",
      type: "number",
      placeholder: "Enter the quantity",
    },
    {
      name: "productName",
      label: "Product Name",
      placeholder: "Enter product name",
      description: "Set the name of the product.",
    },
    {
      name: "date",
      label: "Date",
      type: "date",
      placeholder: "Enter the date",
      description: "Enter the date of order.",
    },
  ];

  const handleSubmit = (data: Orders) => {
    console.log("Order Submitted:", data);
  };

  return {
    formFields,
    handleSubmit,
  };
};
