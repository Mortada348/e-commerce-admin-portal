"use client";

import DataForm from "@/app/components/Form";
import { Product } from "@/objects/Product";
import { useAddProduct } from "./useAddProduct";

const AddProduct = () => {
  const {
    productId,
    formFields,
    handleSubmit,
    productData,
    isLoading,
    isCreateLoading,
  } = useAddProduct();

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg space-y-6">
      <DataForm<Product>
        title={productId > 0 ? "Edit Product" : "Add Product"}
        formFields={formFields}
        onSubmit={handleSubmit}
        isLoading={isLoading}
        defaultValues={
          productId > 0 && productData
            ? {
                name: productData.name || "",
                description: productData.description || "",
                price: productData.price || "",
                stock: productData.stock || "",
                categoryName: productData.categoryName || "",
              }
            : {
                name: "",
                description: "",
                price: "",
                stock: "",
                categoryName: "",
              }
        }
      />
    </div>
  );
};

export default AddProduct;
