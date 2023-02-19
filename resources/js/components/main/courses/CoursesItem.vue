<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps(['alt', 'src'])
const imageGradient = ref<HTMLInputElement | null>(null)
</script>

<template>
    <div class="img-box">
        <img :src="`/${props.src}`" :alt="props.alt" />
        <div ref="imageGradient" class="gradient"></div>
        <h3>{{ props.alt }}</h3>
    </div>
</template>

<style lang="scss" scoped>
@import '@/../sass/variables';
.img-box {
    position: relative;
    flex: 0 0 25%;
    box-shadow: 0 0 20px darken($bg1, 10%);

    img {
        max-width: 100%;
        border-radius: 0.3em;
    }
    h3 {
        position: absolute;
        z-index: 2;
        text-align: center;
        font-size: 1.8em;
        bottom: 0;
        left: 50%;
        width: 10em;
        margin-left: -5em;
        margin-bottom: 0.4em;
        color: white;
    }
}

.gradient {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 0.3em;
    cursor: pointer;
    background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 80%,
        rgba(0, 0, 0, 0.8) 100%
    );

    transition: all 200ms ease-in-out;

    &:hover {
        backdrop-filter: saturate(220%);
    }
}

// Media queries
// ----------------------

@media (max-width: 798px) {
    .img-box {
        flex: 0 0 35%;
    }
}

@media (max-width: 650px) {
    .img-box {
        h3 {
            font-size: 1.3em;
        }
    }
}

@media (max-width: 450px) {
    .img-box {
        flex: 0 0 45%;
    }
}
</style>
