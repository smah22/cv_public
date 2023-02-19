<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps({
    name: { type: String },
    font: { type: String, default: '1em' },
    opacity: { type: Boolean, default: false },
})

const fontSize = ref('')

onMounted(() => {
    fontSize.value = props.font
})
</script>

<template>
    <h2 :class="{ hovered: props.opacity }">{{ props.name }}</h2>
</template>

<style lang="scss" scoped>
h2 {
    font-size: v-bind(fontSize);
    text-transform: uppercase;
    font-weight: 700;
    opacity: 0.4;
    margin: 0.3em 0 0 0.5em;
    cursor: default;
    transition: opacity 200ms ease-in-out;
}

.hovered {
    opacity: 0.8;
}

// Media queries
//-----------------------------------

@media (max-width: 450px) {
    h2 {
        margin-top: 0;
        opacity: 0.7;
    }
}
</style>
