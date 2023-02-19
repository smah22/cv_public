<script setup lang="ts">
import SectionName from '../../uni/SectionName.vue'
import ExperiencesTesa from './ExperiencesTesa.vue'
import ExperiencesProject from './EperiencesProject.vue'
import { useStylesStore } from '@/store/store'
import { ref } from 'vue'

const hover = ref(false)
const stylesStore = useStylesStore()
</script>

<template>
    <Transition name="fade">
        <div
            @mouseenter="hover = true"
            @mouseleave="hover = false"
            v-if="stylesStore.header"
            class="wraper"
        >
            <SectionName
                class="name"
                name="Pracovné skúsenosti"
                font="1.5em"
                :opacity="hover"
            />
            <ExperiencesTesa />
            <ExperiencesProject />
        </div>
    </Transition>
</template>

<style lang="scss" scoped>
@import '@/../sass/variables';
div {
    padding: 1.5em 2em 1em 3em;
    position: relative;
    cursor: default;

    border: 1px solid $bg2;
    border-radius: 0.7em;
    background-color: $bg1;
    box-shadow: 0 0 10px $other1;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 400ms ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

// Media Queries
//-------------------------
@media (max-width: 798px) {
    .wraper {
        padding: 1em;
    }
}

@media (max-width: 450px) {
    .wraper {
        padding: 0.5em;
        border: unset;
        border-radius: unset;
        background-color: unset;
        box-shadow: unset;
    }
}
</style>
