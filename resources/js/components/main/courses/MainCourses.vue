<script setup lang="ts">
import SectionName from '../../uni/SectionName.vue'
import CoursesItem from './CoursesItem.vue'
import { certData, useStylesStore } from '../../../store/store'
import { ref, defineAsyncComponent } from 'vue'

const LightBox = defineAsyncComponent(() => import('./LightBox.vue'))

const stylesStore = useStylesStore()
const itemsBox = ref<HTMLInputElement | null>(null)
const hover = ref(false)

const scroll = (value: number) => {
    itemsBox.value?.scrollBy({
        top: 0,
        left: value,
        behavior: 'smooth',
    })
}

const preventScroll = (e: WheelEvent) => {
    if (e.deltaY < 0) {
        scroll(-320)
    } else if (e.deltaY > 0) {
        scroll(+320)
    }
}
</script>

<template>
    <Transition name="fade" @after-enter="stylesStore.coursesReady">
        <div
            class="wraper"
            @mouseenter="hover = true"
            @mouseleave="hover = false"
            v-if="stylesStore.skills"
        >
            <SectionName
                class="name"
                name="Kurzy"
                font="1.5em"
                :opacity="hover"
            />

            <font-awesome-icon
                class="icon-left"
                icon="fa-solid fa-chevron-left"
                @click="scroll(-320)"
            />

            <font-awesome-icon
                class="icon-right"
                icon="fa-solid fa-chevron-right"
                @click="scroll(+320)"
            />

            <div
                class="cert-wraper"
                ref="itemsBox"
                @wheel.prevent="preventScroll"
            >
                <CoursesItem
                    v-for="cert in certData"
                    :key="cert.id"
                    :src="cert.image"
                    :alt="cert.alt"
                    @click="stylesStore.showGallery(cert.id)"
                />
            </div>
        </div>
    </Transition>
    <LightBox v-if="stylesStore.lightBoxShowing" />
</template>

<style lang="scss" scoped>
@import '@/../sass/variables';
.wraper {
    position: relative;
    padding: 1.5em 3em 1em 3em;

    cursor: default;

    border: 1px solid $bg2;
    border-radius: 0.7em;
    background-color: $bg1;
    box-shadow: 0 0 10px $other1;
}

.cert-wraper {
    margin-top: 1em;
    display: flex;
    gap: 0.8em;
    overflow-x: hidden;
    border-radius: 0.3em;
}

.icon-right {
    position: absolute;
    width: 2.5em;
    height: 2.5em;

    top: 50%;
    right: 0;
    margin-top: -2em;

    padding: 2em 0.3em 2em 0.3em;
    cursor: pointer;
}

.icon-left {
    position: absolute;
    width: 2.5em;
    height: 2.5em;

    top: 50%;
    left: 0;
    margin-top: -2em;

    padding: 2em 0.3em 2em 0.3em;
    cursor: pointer;
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
@media (max-width: 820px) {
    .cert-wraper {
        overflow-x: auto;
    }
    .cert-wraper::-webkit-scrollbar {
        display: none; // Chrome & Safari
    }

    .cert-wraper {
        -ms-overflow-style: none; /* Internet Explorer 10+ */
        scrollbar-width: none; /* Firefox */
    }
}

@media (max-width: 798px) {
    .wraper {
        padding: 1em;
    }
    .icon-left,
    .icon-right {
        display: none;
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
