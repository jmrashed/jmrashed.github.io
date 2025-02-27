/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // Static export setting
    basePath: "/jmrashed.github.io",  // GitHub Pages base path
    assetPrefix: "/jmrashed.github.io/",  // Assets prefix for GitHub Pages
    trailingSlash: true,  // Ensures URLs have a trailing slash (important for GitHub Pages)
};

module.exports = nextConfig;
