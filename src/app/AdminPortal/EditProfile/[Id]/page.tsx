"use client";

import DataForm from "@/app/components/Form";
import { Admin } from "@/objects/Admin";
import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import {
  adminApi,
  useGetAdminByIdQuery,
  useUpdateAdminMutation,
} from "@/redux/services/adminApi";

const EditProfile = () => {
  const router = useRouter();
  const adminId = 1;
  const { data: adminData, isLoading } = useGetAdminByIdQuery(1);

  // RTK Mutation for updating admin
  const [updateAdmin] = useUpdateAdminMutation();

  const [defaultValues, setDefaultValues] = useState<Partial<Admin>>({
    birthdate: "",
    email: "",
    password: "",
    usename: "",
  });

  // Update default form values when adminData is loaded
  useEffect(() => {
    if (adminData) {
      setDefaultValues({
        birthdate: adminData.birthdate || "",
        email: adminData.email || "",
        password: adminData.password || "",
        usename: adminData.usename || "",
      });
    }
  }, [adminData]);

  const formFields = [
    {
      name: "usename",
      label: "Username",
      validationRules: { required: "Username is required" },
    },
    {
      name: "email",
      label: "Email",
      validationRules: { required: "Email is required" },
    },

    {
      name: "birthdate",
      label: "Birthdate",
    },
  ];

  const handleSubmit = async (data: Partial<Admin>) => {
    try {
      await updateAdmin({ id: adminId, updatedAdmin: data }).unwrap();
      console.log("Admin updated successfully");
      router.push("/AdminPortal/Dashboard");
    } catch (error) {
      console.error("Error updating admin:", error);
    }
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <DataForm<Admin>
      title="Edit Profile"
      formFields={formFields}
      onSubmit={handleSubmit}
      defaultValues={defaultValues}
    />
  );
};

export default EditProfile;
