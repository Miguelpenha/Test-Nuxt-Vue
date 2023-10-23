<style scoped src="./style.css"/>

<template>
    <div v-show="repository">{{ repository }}</div>
</template>

<script setup lang="ts">
    const { repository } = defineProps(['repository'])
</script>