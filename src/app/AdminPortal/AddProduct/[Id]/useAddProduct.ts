import { Product } from "@/Models/Product";

export const useAddProduct = () => {
  const formFields = [
    {
      name: "name",
      label: "Product Name",
      placeholder: "Enter the name",
      description: "Enter the name of the product.",
      validationRules: { required: "Product name is required" },
    },
    {
      name: "description",
      label: "Description",
      placeholder: "Enter product description",
      description: "Provide a short description of the product.",
      validationRules: {
        required: "Description is required ",
      },
    },
    {
      name: "price",
      label: "Price",
      type: "number",
      placeholder: "Enter product price",
      description: "Set the price of the product.",
      validationRules: {
        required: "Price is required",
        min: { value: 1, message: "Minimum price is 1" },
      },
    },
    {
      name: "stock",
      label: "Stock",
      type: "number",
      placeholder: "Enter the stock",
      description: "Enter the stock of this product",
      validationRules: {
        required: "Stock is required",
        min: { value: 0, message: "Stock cannot be negative" },
      },
    },
    {
      name: "category",
      label: "Category",
      placeholder: "Enter the category of the product",
    },
    {
      name: "imageUrl",
      label: "Image URL",
      placeholder: "Enter the URL of the image",
      validationRules: {
        pattern: {
          value: /^https?:\/\/.*\.(jpg|jpeg|png)$/,
          message: "Invalid image URL",
        },
      },
    },
  ];
  const handleSubmit = (data: Product) => {
    console.log("Order Submitted:", data);
  };

  return {
    formFields,
    handleSubmit,
  };
};
