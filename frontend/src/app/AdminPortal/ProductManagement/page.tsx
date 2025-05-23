"use client";

import { DataTable } from "@/app/components/Table";
import React from "react";
import { useProductManagement } from "./useProductManagement";

import GridHeader from "@/app/components/GridHeader";

const ProductManagement = () => {
  const { products, productColumns, handleEditProduct, handleDeleteProduct } =
    useProductManagement();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg p-6">
        <GridHeader
          GridTitle={"Manage Products"}
          AddTitle={"Add Product"}
          AddPath={"../AdminPortal/AddProduct"}
        />

        <div className="border rounded-lg shadow-sm">
          <DataTable
            data={products}
            columns={productColumns}
            onEdit={handleEditProduct}
            onDelete={handleDeleteProduct}
          />
        </div>

        <p className="text-gray-500 text-sm mt-3 text-center">
          A list of your available products.
        </p>
      </div>
    </div>
  );
};

export default ProductManagement;
