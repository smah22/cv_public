<script setup lang="ts">
import MainEducation from '../main/eductaion/MainEducation.vue'
import MainCourses from '../main/courses/MainCourses.vue'
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
        <MainEducation :mobile="true" />
        <MainCourses />
    </div>
</template>

<style lang="scss" scoped>
div {
    padding: 0.5em 0.5em 0.5em 0.5em;
}
</style>
