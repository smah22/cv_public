<script setup lang="ts">
import HeaderProfile from '../header/HeaderProfile.vue'
import MainSkills from '../main/skills/MainSkills.vue'

import { ref, onMounted } from 'vue'
const ready = ref<boolean>(false)

onMounted(() => {
    ready.value = true
})
</script>

<template>
    <Transition name="fade">
        <div v-if="ready">
            <HeaderProfile :mobile="true" />
            <MainSkills class="skills" />
        </div>
    </Transition>
</template>

<style lang="scss" scoped>
div {
    padding: 0.5em;
}

.skills {
    margin-top: 1em;
}

.fade-enter-active,
.fade-leave-active {
    transition: all 200ms ease-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateX(100px);
}
</style>
