"use client";

import DataForm from "@/app/components/Form";
import { Orders } from "@/objects/Orders";
import { useAddOrder } from "./useAddOrder";

const AddOrder = () => {
  const {
    orderId,
    formFields,
    handleSubmit,
    orderData,
    isLoading,
    isCreateLoading,
  } = useAddOrder();
  return (
    <DataForm<Orders>
      title={orderId > 0 ? "Edit Order" : "Add Order"}
      formFields={formFields}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      defaultValues={
        orderId > 0 && orderData
          ? {
              username: orderData.username || "",
              quantity: orderData.quantity || "",
              productName: orderData.productName || "",
              date: orderData.date || "",
            }
          : {
              username: "",
              quantity: "",
              productName: "",
              date: "",
            }
      }
    />
  );
};

export default AddOrder;
