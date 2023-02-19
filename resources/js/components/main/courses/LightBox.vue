<script setup lang="ts">
import { useStylesStore } from '@/store/store'
import { defineAsyncComponent } from 'vue'

const LightBoxImage = defineAsyncComponent(() => import('./LightBoxImage.vue'))

const stylesStore = useStylesStore()
</script>

<template>
    <div class="lightbox-wraper">
        <div @click="stylesStore.hideLightBox"></div>

        <LightBoxImage />

        <font-awesome-icon
            tabindex="0"
            class="icon-left"
            icon="fa-solid fa-chevron-left"
            @keydown.esc="stylesStore.hideLightBox"
            @click="stylesStore.prevCert()"
        />
        <font-awesome-icon
            tabindex="0"
            class="icon-right"
            icon="fa-solid fa-chevron-right"
            @keydown.esc="stylesStore.hideLightBox"
            @click="stylesStore.nextCert()"
        />
    </div>
</template>

<style lang="scss" scoped>
.lightbox-wraper {
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    div {
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background: rgba(black, 0.5);
    }

    img {
        max-height: 90%;
        border-radius: 0.3em;
        position: fixed;
        z-index: 3;
        outline: none;
    }
}

.icon-left {
    position: fixed;
    height: 4em;
    width: 4em;
    left: 0;
    outline: none;

    color: white;
    border: 1px solid white;
    border-radius: 50%;

    padding: 0.5em;
    margin-left: 2em;
    cursor: pointer;

    backdrop-filter: blur(10px);
    transition: all 200ms ease-in-out;

    &:hover {
        backdrop-filter: saturate(10%) blur(10px);
    }
}

.icon-right {
    position: fixed;
    width: 4em;
    height: 4em;
    right: 0;
    outline: none;

    color: white;
    border: 1px solid white;
    border-radius: 50%;

    padding: 0.5em;
    margin-right: 2em;
    cursor: pointer;

    backdrop-filter: blur(10px);
    transition: all 200ms ease-in-out;

    &:hover {
        backdrop-filter: saturate(10%) blur(10px);
    }
}

// Media queries
//----------------------

@media (max-width: 1050px) {
    .lightbox-wraper {
        img {
            margin-top: -4em;
            max-width: 70%;
        }
    }

    .icon-left,
    .icon-right {
        width: 3em;
        height: 3em;
    }
}

@media (max-width: 780px) {
    .lightbox-wraper {
        img {
            max-width: 80%;
            margin-top: 0;
        }
    }
    .icon-left,
    .icon-right {
        width: 3em;
        height: 3em;
        align-self: flex-end;
        margin-bottom: 9%;
    }

    .icon-left {
        left: 30%;
    }

    .icon-right {
        right: 30%;
    }
}

@media (max-width: 550px) {
    .lightbox-wraper {
        img {
            max-width: 90%;
        }
    }
    .icon-left {
        left: 20%;
    }

    .icon-right {
        right: 20%;
    }
}

@media (max-width: 450px) {
    .lightbox-wraper {
        img {
            max-width: 85%;
            margin-bottom: 9em;
        }
    }
    .icon-left,
    .icon-right {
        width: 2.5em;
        height: 2.5em;
        margin-bottom: 22%;
    }

    .icon-left {
        left: 10%;
    }

    .icon-right {
        right: 10%;
    }
}
</style>
