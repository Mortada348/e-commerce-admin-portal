"use client";
import React from "react";
import StatisticCard from "@/app/components/StatisticCard";
import { DataTable } from "@/app/components/Table";
import { Package, ShoppingCart, Users } from "lucide-react";
import { useDashboard } from "./usePage";

const statistics = [
  {
    title: "Total Orders",
    count: 150,
    icon: <ShoppingCart size={32} className="text-white" />,
    bgColor: "bg-gradient-to-r from-blue-500 to-blue-700",
    iconBg: "bg-blue-600",
  },
  {
    title: "Total Products",
    count: 320,
    icon: <Package size={32} className="text-white" />,
    bgColor: "bg-gradient-to-r from-green-500 to-green-700",
    iconBg: "bg-green-600",
  },
  {
    title: "Total Users",
    count: 85,
    icon: <Users size={32} className="text-white" />,
    bgColor: "bg-gradient-to-r from-purple-500 to-purple-700",
    iconBg: "bg-purple-600",
  },
];

const Dashboard = () => {
  const { products, orders, productColumns, orderColumns } = useDashboard();

  return (
    <>
      <div className=" p-6 bg-white shadow-lg rounded-lg mt-4 mx-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Dashboard</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {statistics.map((stat, index) => (
            <StatisticCard
              key={index}
              title={stat.title}
              count={stat.count}
              icon={stat.icon}
            />
          ))}
        </div>
      </div>
      <div className="p-6 bg-white shadow-lg rounded-lg mt-6 mx-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Product List
        </h2>
        <DataTable
          data={products}
          columns={productColumns}
          caption="A list of your available products."
        />
      </div>
      <div className="p-6 bg-white shadow-lg rounded-lg mt-6 mx-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Order List</h2>
        <DataTable data={orders} columns={orderColumns} />
      </div>
    </>
  );
};
export default Dashboard;
