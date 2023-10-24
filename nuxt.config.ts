export default defineNuxtConfig({
  typescript: {
    typeCheck: true
  },
  devtools: { enabled: true },
  runtimeConfig: {
    apiUrl: process.env.NUXT_API_URL,
    apiKey: process.env.NUXT_API_KEY,
    githubUsername: process.env.NUXT_GITHUB_USERNAME,
    public: {
      domain: process.env.NUXT_PUBLIC_DOMAIN
    }
  },
  routeRules: {
    '/': { ssr: true, swr: true },
    '/api/**': { cors: true }
  }
})