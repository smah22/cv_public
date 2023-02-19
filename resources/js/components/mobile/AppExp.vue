<script setup lang="ts">
import ExperiencesTesa from '../main/experiences/ExperiencesTesa.vue'
import EperiencesProject from '../main/experiences/EperiencesProject.vue'
import { onMounted } from 'vue'

onMounted(() => {
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        })
    }, 100)
})
</script>

<template>
    <div>
        <ExperiencesTesa />
        <EperiencesProject />
    </div>
</template>

<style lang="scss" scoped>
div {
    padding: 1em;
}
</style>
