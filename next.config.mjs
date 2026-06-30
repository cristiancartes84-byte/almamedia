/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // Deshabilitar validación estricta durante el build
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Configuración para deployment
  reactStrictMode: true,
  swcMinify: true,
  // Configuración de imágenes
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'almamedia.cl',
      },
    ],
  },
};

export default nextConfig;
