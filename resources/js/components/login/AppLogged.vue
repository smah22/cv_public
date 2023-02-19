<script setup lang="ts">
import { useLoginStore, useStylesStore } from '@/store/store'
import { onMounted, ref, defineAsyncComponent } from 'vue'

const HeaderProfile = defineAsyncComponent(
    () => import('../header/HeaderProfile.vue')
)
const MainProfile = defineAsyncComponent(
    () => import('../main/MainProfile.vue')
)
const FooterProfile = defineAsyncComponent(
    () => import('../footer/FooterProfile.vue')
)
const MapElement = defineAsyncComponent(() => import('../uni/MapElement.vue'))
const MobileApp = defineAsyncComponent(() => import('../mobile/MobileApp.vue'))

const loginStore = useLoginStore()
const stylesStore = useStylesStore()
const ready = ref<boolean>(false)

onMounted(() => {
    loginStore.loginCheck()
})
</script>

<template>
    <div class="desktop">
        <HeaderProfile />

        <MainProfile />

        <FooterProfile />
    </div>

    <div class="mobile">
        <MobileApp />
    </div>

    <Transition name="fade" @after-enter="ready = true">
        <MapElement v-if="stylesStore.gmap" :ready="ready" />
    </Transition>
</template>

<style lang="scss" scoped>
.desktop {
    padding: 1em;
}
.mobile {
    display: none;
}

@media (max-width: 450px) {
    .desktop {
        display: none;
    }
    .mobile {
        display: block;
    }
}
</style>
