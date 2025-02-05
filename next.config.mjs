import MillionLint from "@million/lint";
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
        pathname: "/a/a8zxpsghra/**",
      },
    ],
  },
};

export default MillionLint.next({ rsc: true })(nextConfig);
