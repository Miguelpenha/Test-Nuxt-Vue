<style scoped src="./style.css"/>

<script setup lang="ts">
    import { handleClick, message } from './script'
</script>

<template>
    <button @click="handleClick">{{ message.text }}</button>
</template>