<script setup lang="ts">
import { GoogleMap, Marker } from 'vue3-google-map'
import { useStylesStore } from '@/store/store'

const props = defineProps<{
    ready: boolean
}>()

const stylesStore = useStylesStore()
const center = { lat: 49.152281, lng: 18.677421 }

const cancel = (e: Event) => {
    ;(e.target as Element).className === 'box' ? stylesStore.map(false) : null
}
</script>

<template>
    <div class="wraper">
        <div class="map-wraper">
            <div class="box" @click.prevent="cancel">
                <GoogleMap
                    api-key=""
                    :center="center"
                    :zoom="12"
                    class="map"
                    :class="{ ready: props.ready }"
                    @keydown.esc="stylesStore.map(false)"
                >
                    <Marker :options="{ position: center }" />
                </GoogleMap>

                <font-awesome-icon
                    @click="stylesStore.map(false)"
                    class="icon"
                    icon="fa-solid fa-xmark"
                />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../../../sass/variables';

.wraper {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
}

.map-wraper {
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
}

.box {
    position: fixed;
    z-index: 3;

    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2em;

    background: rgba(black, 0.5);
}
.map {
    width: 80%;
    height: 60%;
    border-radius: 0.4em;
    overflow: hidden;
    opacity: 0;
    box-shadow: 0 0 20px darken($bg2, 50%);
    transition: opacity 250ms ease-in-out;
}

.icon {
    width: 4em;
    height: 4em;
    padding: 1em;
    color: rgba(white, 0.4);
    border: 1px solid rgba(white, 0.4);
    border-radius: 50%;
    transition: all 150ms ease-in-out;
    cursor: pointer;

    &:hover {
        color: rgba(white, 0.8);
        border: 1px solid rgba(white, 0.8);
    }
}

.ready {
    opacity: 1;
}

@media (max-width: 450px) {
    .box {
        backdrop-filter: unset;
        background-color: rgba(black, 0.5);
    }

    .map {
        width: 90%;
    }

    .icon {
        width: 3em;
        height: 3em;
        color: rgba(white, 0.9);
    }
}
</style>
