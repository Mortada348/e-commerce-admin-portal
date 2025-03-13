"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-[400px] p-8 bg-white rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          LOGIN
        </h1>
        <div className="space-y-6">
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Email
            </label>
            <Input
              type="email"
              placeholder="Enter your email"
              className="mt-2 w-full p-3 text-lg"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Password
            </label>
            <Input
              type="password"
              placeholder="Enter your password"
              className="mt-2 w-full p-3 text-lg"
            />
          </div>

          <Button
            onClick={() => router.push("/AdminPortal/Dashboard")}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg"
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
