<style scoped src="./style.css"/>

<template>
    <button @click="$emit('clickButton')">
        <span class="text">{{ message }}</span>
        <Icons :message="message"/>
  </button>
</template>

<script setup lang="ts">
    defineProps({
        message: String
    })
    
    defineEmits(['clickButton'])
</script>

<script lang="ts">
    import Icons from './Icons/index.vue'

    export default {
        name: 'Button',
        components: {
            Icons
        }
    }
</script>