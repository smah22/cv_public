<script setup lang="ts">
import { ref } from 'vue'
import { useStylesStore, hobbyData } from '@/store/store'

const stylesStore = useStylesStore()
const wraper = ref<HTMLDivElement | null>(null)

interface galleryImage {
    id: number
    image: string
    alt: string
    show?: boolean
}

const changeImg = () => {
    const showed = <galleryImage>hobbyData.find(({ show }) => show === true)
    const id = <number>showed.id
    const length = <number>hobbyData.length

    hobbyData.forEach((item) => {
        if (item.id === id) {
            item.show = false

            if (item.id === length) {
                hobbyData[0].show = true
            }
        }

        if (item.id === id + 1) {
            item.show = true
        }
    })
}
</script>

<template>
    <div class="gallery" v-if="stylesStore.hobbyShowing">
        <div class="img-box" ref="wraper">
            <div v-for="item in hobbyData" class="img-wraper">
                <TransitionGroup name="fade" mode="out-in">
                    <div v-if="item.show" class="img-filter" :key="item.id">
                        <img
                            :src="`/${item.image}`"
                            :alt="item.alt"
                            class="img"
                        />

                        <small class="img-title">{{ item.alt }}</small>
                    </div>
                </TransitionGroup>
            </div>
        </div>

        <div @click="changeImg" class="gallery-button">
            <font-awesome-icon icon="fa-solid fa-forward-step" class="icon" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/../sass/variables';
.gallery {
    position: relative;
    flex: 0 1 auto;
    width: 100%;
    height: auto;
    overflow: hidden;
}

.img {
    position: absolute;
    left: -1000%;
    right: -1000%;
    top: -1000%;
    bottom: -1000%;
    margin: auto auto;
    min-width: 1000%;
    min-height: 1000%;
    transform: scale(0.1);
}

.img-box {
    position: relative;
    width: 100%;
    height: 100%;
}

.img-wraper {
    position: absolute;
    width: 100%;
    height: 100%;
}

.img-filter {
    width: 100%;
    height: 100%;
}

.gallery-button {
    position: absolute;
    top: 0;
    right: 0;
    width: 10%;
    height: 100%;
    background-color: rgba(black, 0.1);

    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 200ms ease-in-out;
    cursor: pointer;

    &:hover {
        background-color: rgba(black, 0.4);

        .icon {
            opacity: 0.8;
            transform: scale(1.2);
        }
    }
}

.img-title {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0.3em;
    color: darken($font, 10%);
    background-color: rgba($bg1, 0.4);
    border-top-right-radius: 0.3em;
}

.icon {
    width: 1.5em;
    height: auto;
    color: lighten($bg1, 10%);
    opacity: 0.7;
    transition: all 300ms ease-in-out;
}

.fade-enter-active,
.fade-leave-active {
    transition: transform 200ms ease-out, filter 350ms linear;
}

.fade-enter-from {
    transform: translateX(-100%);
    filter: blur(2px);
}
.fade-leave-to {
    transform: translateX(100%);
    filter: blur(2px);
}

// Media queries
// ---------------------------
@media (max-width: 1135px) {
    div.img-wraper:nth-child(3) > img:nth-child(1) {
        left: -1020%;
    }

    div.img-wraper:nth-child(1) > img:nth-child(1) {
        left: -980%;
    }
}

@media (max-width: 1135px) {
    div.img-wraper:nth-child(3) > img:nth-child(1) {
        left: -1048%;
    }
}

@media (max-width: 900px) {
    .gallery {
        height: 30em;
        width: 100%;
    }

    div.img-wraper:nth-child(3) > img:nth-child(1) {
        left: -1000%;
    }
    div.img-wraper:nth-child(1) > img:nth-child(1) {
        left: -1000%;
    }

    .gallery-button {
        width: 7%;
    }
}

@media (max-width: 650px) {
    .gallery {
        height: 20em;
    }

    .icon {
        width: 1em;
    }
}

@media (max-width: 450px) {
    .gallery-button {
        background-color: rgba(black, 0.2);
    }
    .gallery {
        height: 17em;
    }
}
</style>
