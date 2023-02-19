<script setup lang="ts">
import FooterProfile from '../footer/FooterProfile.vue'
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
        <FooterProfile :mobile="true" />
    </div>
</template>

<style lang="scss" scoped>
div {
    padding: 0.5em 0.5em 0.5em 0.5em;
}
</style>
