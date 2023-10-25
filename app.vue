<template>
  <main>
    <NuxtPage/>
  </main>
</template>

<script setup>
  const config = useRuntimeConfig()

  useHead({
    link: [
      { href: '/img/favicon.ico', rel: 'shortcut icon', type: 'image/x-icon' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
      { href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap', rel: 'stylesheet' }
    ]
  })
  useSeoMeta({
    twitterSite: '@MglPenha',
    title: 'Test Nuxt and Vue',
    twitterCreator: '@MglPenha',
    ogUrl:  config.public.domain,
    ogTitle: 'Test Nuxt and Vue',
    description: 'Test Nuxt and Vue',
    twitterCard: 'summary_large_image',
    ogDescription: 'Test Nuxt and Vue',
    ogImage: `${config.public.domain}/img/thumbnail.png`
  })
</script>

<script>
  export default {
    name: 'App'
  }
</script>

<style scoped>
  main {
    padding: 1em;
    display: flex;
    flex-direction: column;
  }
</style>