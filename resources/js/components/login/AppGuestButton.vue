<script setup lang="ts">
import { useLoginStore, errors } from '@/store/store'

const loginStore = useLoginStore()
</script>

<template>
    <button @click.prevent="loginStore.login">Prihlásiť</button>
</template>

<style lang="scss" scoped>
@import '@/../sass/variables';

button {
    outline: none;
    border: none;
    cursor: pointer;
    border-radius: 0.2em;
    align-self: center;

    width: 6em;
    height: 2em;
    margin-top: 0.7em;
    margin-bottom: 0.2em;

    font-size: 1em;
    background: $bg2;
    color: $font;
    font-weight: 400;
    box-shadow: 0 0 2px darken($bg2, 50%);

    transition: all 150ms ease-in-out;

    &:hover {
        box-shadow: 0 0 5px darken($bg2, 40%);
    }
}

.switch-enter-active {
    transition: all 0.3s ease-out;
}

.switch-leave-active {
    transition: all 200ms ease-in-out;
}

.switch-enter-from,
.switch-leave-to {
    opacity: 0;
}
</style>
