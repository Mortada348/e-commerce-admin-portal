"use client";

import DataForm from "@/app/components/Form";
import { Admin } from "@/Models/Admin";
import React from "react";

const EditProfile = () => {
  const formFields = [
    {
      name: "username",
      label: "Username",
    },
    {
      name: "email",
      label: "Email",
    },
    {
      name: "password",
      label: "Password",
    },
    {
      name: "birthdate",
      label: "Birthdate",
    },
  ];
  const handleSubmit = (data: Admin) => {
    console.log("Order Submitted:", data);
  };
  return (
    <DataForm<Admin>
      title="Edit Your Profile"
      formFields={formFields}
      onSubmit={handleSubmit}
    />
  );
};

export default EditProfile;
