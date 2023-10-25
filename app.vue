<template>
  <main>
    <NuxtPage/>
  </main>
</template>

<script setup lang="ts">
  import useSeo from './components/useSeo'

  useSeo()
</script>

<script lang="ts">
  export default {
    name: 'App'
  }
</script>

<style>
  * {
    background-color: #020420;
    font-family: 'Roboto', sans-serif;
  }
</style>

<style scoped>
  main {
    padding: 1em;
    display: flex;
    flex-direction: column;
  }
</style>