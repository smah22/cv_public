<script setup lang="ts">
import { errors } from '@/store/store'
</script>

<template>
    <small v-if="errors.show" v-for="error in errors.data" :key="error">
        {{ error[0] }}
    </small>
</template>

<style lang="scss" scoped>
small {
    text-align: center;
    margin-top: 0.5em;
    color: darkred;
}
</style>
