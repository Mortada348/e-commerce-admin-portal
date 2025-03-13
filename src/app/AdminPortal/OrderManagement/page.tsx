"use client";

import { DataTable } from "@/app/components/Table";
import React, { useState } from "react";
import { useOrderManagement } from "./useOrderManagement";
import { Button } from "@/components/ui/button";
import { PlusCircle, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import GridHeader from "@/app/components/GridHeader";

const ProductManagement = () => {
  const { orders, orderColumns, handleEditOrder, handleDeleteOrder } =
    useOrderManagement();
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6">
        <GridHeader
          GridTitle={"Manage Orders"}
          AddTitle={"Add Order"}
          AddPath={"../AdminPortal/AddOrder"}
        />

        <div className="border rounded-md shadow-sm">
          <DataTable
            data={orders}
            columns={orderColumns}
            onEdit={handleEditOrder}
            onDelete={handleDeleteOrder}
          />
        </div>

        <p className="text-gray-500 text-sm mt-3 text-center">
          A list of your orders.
        </p>
      </div>
    </div>
  );
};

export default ProductManagement;
