/** @type {import('next').NextConfig} */
const nextConfig = {
  

  
  // output: 'export', // Enables static HTML export (required for GitHub Pages)
  basePath: process.env.GITHUB_BASE_PATH || '',  // If your site is served from a subpath
  images: { unoptimized: true }, // disables Next.js image optimization, required for static export

  

  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components using SVGR
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...(fileLoaderRule.resourceQuery?.not || []), /url/] },
        use: {
          loader: "@svgr/webpack",
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: "preset-default",
                  params: {
                    overrides: {
                      removeViewBox: false,
                    },
                  },
                },
              ],
            },
          },
        },
      }
    );

    // Modify the file loader rule to ignore .svg
    fileLoaderRule.exclude = /\.svg$/i;
    
    return config;
  },
};

export default nextConfig;
