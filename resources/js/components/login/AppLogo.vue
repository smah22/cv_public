<script setup lang="ts"></script>

<template>
    <p>
        <span>CV</span>
        <span>ue</span>
    </p>
</template>

<style lang="scss" scoped>
@import '@/../sass/variables';
@import url(https://fonts.bunny.net/css?family=jetbrains-mono:300);
p {
    text-align: center;
    margin: 0;

    span:first-child {
        font-size: 4em;
        font-weight: 700;
    }

    span:last-child {
        color: #3fb984;
        font-family: 'JetBrains Mono', monospace;
        font-size: 2em;
        text-shadow: 0 0 3px darken($bg2, 40%);
        margin-left: -5px;
    }
}
</style>
