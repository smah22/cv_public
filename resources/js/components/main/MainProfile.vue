<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { useLoginStore, useStylesStore } from '@/store/store'

const loginStore = useLoginStore()
const stylesStore = useStylesStore()

const MainSkills = defineAsyncComponent(() => import('./skills/MainSkills.vue'))
const MainEducation = defineAsyncComponent(
    () => import('./eductaion/MainEducation.vue')
)
const MainExperiences = defineAsyncComponent(
    () => import('./experiences/MainExperiences.vue')
)

const MainCourses = defineAsyncComponent(
    () => import('./courses/MainCourses.vue')
)
</script>

<template>
    <main>
        <div class="main">
            <TransitionGroup name="fade">
                <MainSkills v-if="loginStore.logged" key="1" />

                <div v-if="loginStore.logged" class="wraper" key="2">
                    <MainExperiences />
                    <MainEducation />
                </div>
            </TransitionGroup>
        </div>

        <MainCourses />
    </main>
</template>

<style lang="scss" scoped>
.main {
    display: flex;
    gap: 0.5em;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
}

.wraper {
    flex: 0 auto;

    display: flex;
    flex-direction: column;
    gap: 0.5em;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 300ms ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

// Media queries
//-----------------------------------

@media (max-width: 1000px) {
    .main {
        display: block;
    }
}
</style>
