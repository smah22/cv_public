<script setup lang="ts">
import SectionName from '../uni/SectionName.vue'
import AppMenu from './AppMenu.vue'
import { useRoute, type RouteRecordName } from 'vue-router'
import { ref, watch } from 'vue'
import { useStylesStore } from '@/store/store'

const stylesStore = useStylesStore()
const route = useRoute()
const name = ref<string>('Profil')
const profilShowing = ref<boolean>(true)
const container = ref<HTMLInputElement | null>(null)

watch(
    () => route.name,
    (path) => {
        let newPath = <string>path
        name.value = newPath
        newPath !== 'Profil'
            ? (profilShowing.value = false)
            : (profilShowing.value = true)
    }
)
</script>
<template>
    <AppMenu />

    <div
        @touchmove="stylesStore.position"
        @wheel="stylesStore.position"
        ref="container"
        class="container"
    >
        <SectionName ref="sectionName" class="name" :name="name" font="2em" />

        <div class="profile">
            <h1>Martin Šmehýl</h1>
            <small>22. 10. 1990</small>
        </div>

        <router-view v-slot="{ Component, route }">
            <Transition name="fade" mode="out-in">
                <div :key="<RouteRecordName>route.name">
                    <component :is="Component"></component>
                </div>
            </Transition>
        </router-view>
    </div>
</template>

<style lang="scss" scoped>
@import '@/../sass/variables';
.container {
    margin-top: 0.8em;
    padding-bottom: 70px;
}

.profile {
    width: 100%;
    background: $bg2;
    padding-top: 1px;
    padding-bottom: 5px;
    h1 {
        font-size: 3em;
        color: darken($font, 5%);
        margin: 0.2em 0 0 0;
        padding-left: 0.4em;
    }

    small {
        font-size: 1em;
        margin-left: 0.3em;
        padding-left: 1em;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: filter 20ms ease-out, opacity 80ms ease-out;
}

.fade-enter-from {
    opacity: 0;
    filter: blur(2px);
}
.fade-leave-to {
    opacity: 0;
    filter: blur(2px);
}
</style>
