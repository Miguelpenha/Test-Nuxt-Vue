export default defineNuxtConfig({
  typescript: {
    typeCheck: true
  },
  devtools: { enabled: true },
  runtimeConfig: {
    apiUrl: process.env.NUXT_API_URL,
    apiKey: process.env.NUXT_API_KEY,
    githubUsername: process.env.NUXT_GITHUB_USERNAME
  },
  routeRules: {
    '/': { ssr: true, swr: true },
    '/api/**': { cors: true }
  }
})