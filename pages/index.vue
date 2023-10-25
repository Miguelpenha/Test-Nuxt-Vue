<script setup lang="ts">
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
    if (repoIndex.value === null) {
      repoIndex.value = 0
    } else if (repoIndex.value === repositories.value!.length-1) {
      repoIndex.value = null
    } else {
      repoIndex.value++
    }
  }
</script>

<template>
  <button @click="handleClick">
    <span class="text">{{ message }}</span>
    <svg v-show="message === 'Começar'" class="icon" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24">
      <g>
        <rect fill="none" height="24" width="24"/>
      </g>
      <g>
        <g>
          <path d="M9.19,6.35c-2.04,2.29-3.44,5.58-3.57,5.89L2,10.69l4.05-4.05c0.47-0.47,1.15-0.68,1.81-0.55L9.19,6.35L9.19,6.35z M11.17,17c0,0,3.74-1.55,5.89-3.7c5.4-5.4,4.5-9.62,4.21-10.57c-0.95-0.3-5.17-1.19-10.57,4.21C8.55,9.09,7,12.83,7,12.83 L11.17,17z M17.65,14.81c-2.29,2.04-5.58,3.44-5.89,3.57L13.31,22l4.05-4.05c0.47-0.47,0.68-1.15,0.55-1.81L17.65,14.81 L17.65,14.81z M9,18c0,0.83-0.34,1.58-0.88,2.12C6.94,21.3,2,22,2,22s0.7-4.94,1.88-6.12C4.42,15.34,5.17,15,6,15 C7.66,15,9,16.34,9,18z M13,9c0-1.1,0.9-2,2-2s2,0.9,2,2s-0.9,2-2,2S13,10.1,13,9z"/>
        </g>
      </g>
    </svg>
    <svg v-show="message === 'Proximo'" class="icon" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24">
      <g>
        <path d="M0,0h24v24H0V0z" fill="none"/>
      </g>
      <g>
        <polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"/>
      </g>
    </svg>
    <svg v-show="message === 'Recomeçar'" class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none"/>
      <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
    </svg>
  </button>
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
    width: 12em;
    border: none;
    display: flex;
    padding: 0.8em;
    cursor: pointer;
    margin-top: 10%;
    color: #00DC82;
    font-size: 1.5em;
    font-weight: bold;
    align-self: center;
    text-align: center;
    align-items: center;
    border-radius: 20px;
    transform: scale(0.95);
    transition-duration: 0.2s;
    border: 3px solid #00DC82;
    transition-timing-function: linear;
  }

  button:hover {
    transform: scale(1);
  }

  button>.text {
    margin: auto;
  }

  button>.icon {
    width: 1.5em;
    fill: #00DC82;
    align-self: center;
  }
</style>