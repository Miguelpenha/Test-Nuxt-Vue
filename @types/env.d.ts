declare global {
    namespace NodeJS {
      interface ProcessEnv {
        NUXT_API_KEY: string
        NUXT_API_URL: string
        NUXT_PUBLIC_DOMAIN: string
        NUXT_GITHUB_USERNAME: string
      }
    }
}

export {}