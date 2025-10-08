/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: [
      "i.postimg.cc",
      // Thêm các domain khác nếu có (ví dụ: 'googleusercontent.com')
    ],
  },
};

module.exports = nextConfig;
