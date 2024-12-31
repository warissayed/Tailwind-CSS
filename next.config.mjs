/** @type {import('next').NextConfig} */
const nextConfig = {
  modularizeImports: {
    "@mui/icons-material": {
      transform: "@mui/icons-material/{{member}}",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https", // Allow secure HTTP
        hostname: "**", // Allow any hostname
        port: "", // Allow all ports
        pathname: "**", // Allow all paths
      },
      {
        protocol: "http", // Allow non-secure HTTP if necessary
        hostname: "**", // Allow any hostname
        port: "", // Allow all ports
        pathname: "**", // Allow all paths
      },
    ],
  },
};

export default nextConfig;
