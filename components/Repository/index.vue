<style scoped src="./style.css"/>

<template>
    <NuxtLink :to="repository.html_url" target="_blank" v-if="repository" class="container">
        <span class="title">{{ repository.name }}</span>
        <span class="description">{{ repository.description }}</span>
    </NuxtLink>
</template>

<script setup lang="ts">
    import type { PropType } from 'vue'
    import type IRepository from '~/types/repository'

    const { repository } = defineProps({
        repository: Object as PropType<IRepository>
    })
</script>