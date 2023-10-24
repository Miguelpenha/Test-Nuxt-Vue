<script setup lang="ts">
  const config = useRuntimeConfig()

  useServerHead({
    link: [
      { href: '/img/favicon.ico', rel: 'shortcut icon', type: 'image/x-icon' }
    ]
  })
  useServerSeoMeta({
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
  
  const { data: repositories } = useFetch<IRepository[]>('/api/repositories')
  const repoIndex: Ref<number | null> = ref(null)

  const message = computed(() => {
    if (repoIndex.value === null) {
      return 'Começar'
    } else if (repoIndex.value != repositories.value!.length-1) {
      return 'Proximo'
    } else {
      return 'Recomeçar'
    }
  })

  const repository = computed(() => {
    if (repositories.value && repoIndex.value != null) {
      return repositories.value[repoIndex.value].name
    } else {
      return ''
    }
  })

  function handleClick() {
    if (repoIndex.value === null || repoIndex.value === repositories.value!.length-1) {
      repoIndex.value = 0
    } else {
      repoIndex.value++
    }
  }
</script>

<template>
  <button @click="handleClick">{{ message }}</button>
  <Repository :repository="repository"></Repository>
</template>

<script lang="ts">
  import type IRepository from '~/types/repository'
  import Repository from '../components/Repository/index.vue'
  
  export default {
    name: 'Home',
    components: {
      Repository
    }
  }
</script>

<style scoped>
  button {
    width: 10em;
    border: none;
    padding: 1em;
    cursor: pointer;
    color: #f2f2f2;
    font-weight: bold;
    align-self: center;
    border-radius: 20px;
    transform: scale(0.95);
    transition-duration: 0.2s;
    background-color: #ed3237;
    transition-timing-function: linear;
  }

  button:hover {
    transform: scale(1);
  }
</style>