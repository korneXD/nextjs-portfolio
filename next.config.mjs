import MillionLint from "@million/lint";
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "a8zxpsghra.ufs.sh",
      },
    ],
  },
};

export default MillionLint.next({ rsc: true })(nextConfig);
