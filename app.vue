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
    margin: 0;
    padding: 0;
    color: #00DC82;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: #020420;
  }
</style>

<style scoped>
  main {
    padding: 1em;
    display: flex;
    flex-direction: column;
  }
</style>