/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // Required for static export
    basePath: "/jmrashed.github.io",  // GitHub Pages base path
    assetPrefix: "/jmrashed.github.io/",  // Prefix for assets
    trailingSlash: true,  // Ensures proper URL routing (important for GitHub Pages)
  };
  
  module.exports = nextConfig;
  