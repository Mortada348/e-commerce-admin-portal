"use client";

import DataForm from "@/app/components/Form";
import { Admin } from "@/Models/Admin";
import React from "react";

const EditProfile = () => {
  const formFields = [
    {
      name: "username",
      label: "Username",
      validationRules: { required: "username is required" },
    },
    {
      name: "email",
      label: "Email",
      validationRules: { required: "email is required" },
    },
    {
      name: "password",
      label: "Password",
      validationRules: { required: "password is required" },
    },
    {
      name: "birthdate",
      label: "Birthdate",
    },
  ];
  const handleSubmit = (data: Admin) => {
    console.log("Admin Submitted:", data);
  };
  return (
    <DataForm<Admin>
      title="Edit Profile"
      formFields={formFields}
      onSubmit={handleSubmit}
      defaultValues={{
        username: "",
        birthdate: "",
        email: "",
        password: "",
      }}
    />
  );
};

export default EditProfile;
