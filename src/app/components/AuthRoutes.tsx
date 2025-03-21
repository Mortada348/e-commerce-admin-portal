"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AuthRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/Auth/Login");
    }
  }, []);

  return <>{children}</>;
}
