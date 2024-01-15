/** @type {import('next').NextConfig} */

/**
 * To see more configuration options,
 * visit https://www.npmjs.com/package/next-pwa or
 * https://ducanh-next-pwa.vercel.app/docs/next-pwa
 */
const dev = process.env.NODE_ENV === "development";
const withPWA = require("next-pwa")({
    dest: "public",
    disable: dev,
    register: true,
    skipWaiting: true,
    sw: 'service-worker.js',

    // runtimeCaching
    runtimeCaching: [
        // to customize runtime caching array,
        // see https://github.com/DuCanhGH/next-pwa/blob/master/packages/next-pwa/src/cache.ts
    ]
});

const nextConfig = withPWA({
    // next.js config
});

module.exports = nextConfig;
