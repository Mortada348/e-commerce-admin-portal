"use client";

import DataForm from "@/app/components/Form";
import { Product } from "@/Models/Product";
import { useAddProduct } from "./useAddProduct";
const { formFields, handleSubmit } = useAddProduct();

const AddProduct = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg space-y-6">
      <DataForm<Product>
        title="Add Product"
        formFields={formFields}
        onSubmit={handleSubmit}
        defaultValues={{
          name: "",
          description: "",
          price: "",
          stock: "",
          category: "",
          imageUrl: "",
        }}
      />
    </div>
  );
};

export default AddProduct;
