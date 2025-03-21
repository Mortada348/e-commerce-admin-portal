// src/redux/baseQuery.ts
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api";

export const createBaseQuery = (controller: string) =>
  fetchBaseQuery({
    baseUrl: `${API_URL}/${controller}`,
    prepareHeaders: (headers) => {
      if (typeof window !== "undefined") {
        const token = localStorage.getItem("token");
        if (token) {
          headers.set("Authorization", `Bearer ${token}`);
        }
      }
      return headers;
    },
  });
