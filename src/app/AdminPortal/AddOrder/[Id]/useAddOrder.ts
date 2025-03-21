import { Orders } from "@/objects/Orders";
import {
  useCreateOrderMutation,
  useGetOrderByIdQuery,
  useUpdateOrderMutation,
} from "@/redux/services/orderApi";

import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

export const useAddOrder = () => {
  const { Id } = useParams();
  const router = useRouter();
  const orderId = Number(Id);
  const [createOrder, isCreateLoading] = useCreateOrderMutation();
  const [updateOrder, isUpdateLoading] = useUpdateOrderMutation();
  const { data: orderData, isLoading } = useGetOrderByIdQuery(orderId, {
    skip: orderId === 0,
  });
  const formFields = [
    {
      name: "username",
      label: "Username",
      placeholder: "Enter the username",
      description: "Enter the name of the client.",
      validationRules: { required: "username is required" },
    },
    {
      name: "quantity",
      label: "Quantity",
      type: "number",
      placeholder: "Enter the quantity",
      validationRules: { required: "quantity is required" },
    },
    {
      name: "productName",
      label: "Product Name",

      placeholder: "Enter product name",
      description: "Set the name of the product.",
      validationRules: { required: "Product name is required" },
    },
    {
      name: "date",
      label: "Date",
      type: "date",
      placeholder: "Enter the date",
      description: "Enter the date of order.",
    },
  ];

  const handleSubmit = async (data: Orders) => {
    const transformedData = {
      ...data,
      quantity: parseInt(data.quantity as string, 10),
      isDeleted: false,
    };

    const cleanedData = Object.fromEntries(
      Object.entries(transformedData).filter(
        ([_, value]) => value !== undefined
      )
    );

    if (orderId > 0) {
      await updateOrder({ id: orderId, updatedOrder: data });
    } else {
      await createOrder(cleanedData);
    }
    if (isCreateLoading || isUpdateLoading) {
      router.back();
    }
  };

  return {
    formFields,
    handleSubmit,
    orderId,
    orderData,
    isLoading,
    isCreateLoading,
  };
};
