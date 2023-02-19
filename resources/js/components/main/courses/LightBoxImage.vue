<script setup lang="ts">
import { useStylesStore } from '@/store/store'
import { ref, watch } from 'vue'

const stylesStore = useStylesStore()
const img = ref<HTMLInputElement | null>(null)

watch(
    () => stylesStore.galleryImage,
    (change) => {
        change
            ? setTimeout(() => {
                  img.value?.focus()
              }, 200)
            : null
    }
)
</script>

<template>
    <Transition :name="stylesStore.transition">
        <img
            ref="img"
            tabindex="0"
            v-if="stylesStore.galleryImage"
            :src="`/${stylesStore.selectedCert.image}`"
            :alt="stylesStore.selectedCert.alt"
            @keydown.esc="stylesStore.hideLightBox"
            @keyup.left="stylesStore.prevCert"
            @keyup.right="stylesStore.nextCert"
        />
    </Transition>
</template>

<style lang="scss" scoped>
// Default slide
.slide-fade-enter-active {
    transition: all 0.1s ease-in;
}

.slide-fade-leave-active {
    transition: all 0.1s ease-out;
}

.slide-fade-enter-from {
    transform: scale(0.8);
    opacity: 0;
}
.slide-fade-leave-to {
    transform: scale(0.8);
    opacity: 0;
}

// Slide right
.slide-fade-right-enter-active {
    transition: all 0.2s ease-in;
}

.slide-fade-right-leave-active {
    transition: all 0.1s ease-out;
}

.slide-fade-right-enter-from {
    transform: translateX(300px) scale(0.8);
    opacity: 0;
}
.slide-fade-right-leave-to {
    transform: translateX(-300px) scale(0.8);
    opacity: 0;
}

// SLide left
.slide-fade-left-enter-active {
    transition: all 0.2s ease-in;
}

.slide-fade-left-leave-active {
    transition: all 0.1s ease-out;
}

.slide-fade-left-enter-from {
    transform: translateX(-300px) scale(0.8);
    opacity: 0;
}
.slide-fade-left-leave-to {
    transform: translateX(300px) scale(0.8);
    opacity: 0;
}
</style>
