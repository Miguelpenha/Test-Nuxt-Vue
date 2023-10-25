<template>
    <Start v-show="message === 'Começar'"/>
    <Next v-show="message === 'Proximo'"/>
    <Restart v-show="message === 'Recomeçar'"/>
</template>

<script setup lang="ts">
    defineProps({
        message: String
    })
</script>

<script lang="ts">
    import Next from './Next.vue'
    import Start from './Start.vue'
    import Restart from './Restart.vue'

    export default {
        name: 'Icons',
        components: {
            Next,
            Start,
            Restart
        }
    }
</script>

<style scoped>
    svg {
        width: 1.5em;
        fill: #00DC82;
        align-self: center;
    }
</style>