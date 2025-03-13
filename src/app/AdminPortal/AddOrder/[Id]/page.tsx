"use client";

import DataForm from "@/app/components/Form";
import { Orders } from "@/Models/Orders";
import { useAddOrder } from "./useAddOrder";

const AddOrder = () => {
  const { formFields, handleSubmit } = useAddOrder();

  return (
    <DataForm<Orders>
      title="Add Order"
      formFields={formFields}
      onSubmit={handleSubmit}
      defaultValues={{
        username: "",
        quantity: "",
        productName: "",
        date: "",
      }}
    />
  );
};

export default AddOrder;
