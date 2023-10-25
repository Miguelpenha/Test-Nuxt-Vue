<script setup lang="ts">
  import useRepositories from '../components/useRepositories'

  const { handleClick, message, repository } = useRepositories()
</script>

<template>
  <Button @click-button="handleClick" :message="message"></Button>
  <Repository :repository="repository"/>
</template>

<script lang="ts">
  import Button from '../components/Button/index.vue'
  import Repository from '../components/Repository/index.vue'
  
  export default {
    name: 'Home',
    components: {
      Button,
      Repository
    }
  }
</script>