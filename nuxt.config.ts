// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    jwtAccessSecret: process.env.JWT_ACCESS_TOKEN_SECRET,
    jwtRefreshSecret: process.env.JWT_REFRESH_TOKEN_SECRET,
    cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME,
    cloudinaryApiKey: process.env.CLOUDINARY_API_KEY,
    cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET,
  },
  app: {
    head: {
      __dangerouslyDisableSanitizers: ["script"],
    script: [
      {
        hid: "FUNCTION_NAME",
        src: "newrelic.js",
        defer: true,
        type: "text/javascript",
        charset: "utf-8",
      },
    ],
    },
  },
  build: {
    transpile: ['@heroicons/vue']
  }

});
