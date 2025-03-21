import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/Auth/Login",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
