/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },

  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },

  webpack: (config) => {
    let modularizeImports = null;
    config.module.rules.some((rule) =>
      rule.oneOf?.some((oneOf) => {
        modularizeImports = oneOf?.use?.options?.nextConfig?.modularizeImports;
        return modularizeImports;
      })
    );
    if (modularizeImports?.["@headlessui/react"])
      delete modularizeImports["@headlessui/react"];

    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  },
};

module.exports = nextConfig;
