"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useLoginMutation } from "@/redux/services/authApi";

const Login = () => {
  const router = useRouter();
  const [login] = useLoginMutation();
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await login(formState).unwrap();

      // Store the token in localStorage
      localStorage.setItem("token", response.token);

      // Redirect to dashboard
      router.push("/AdminPortal/Dashboard");
    } catch (err) {
      setError("Invalid email or password");
      console.error("Login failed:", err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-[400px] p-8 bg-white rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          LOGIN
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Email
            </label>
            <Input
              type="email"
              placeholder="Enter your email"
              className="mt-2 w-full p-3 text-lg"
              value={formState.email}
              onChange={(e) =>
                setFormState({ ...formState, email: e.target.value })
              }
              required
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
              value={formState.password}
              onChange={(e) =>
                setFormState({ ...formState, password: e.target.value })
              }
              required
            />
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
