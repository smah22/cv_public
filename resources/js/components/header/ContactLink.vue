<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useStylesStore } from '../../store/store'

const props = defineProps<{
    text: string
    href: string
    icon: string
    target?: string
    delay: number
}>()

const stylesStore = useStylesStore()
const visibility = ref(false)
const code = ref(false)
const opacity = ref(0)

const showMap = (event: Event) => {
    if (props.href === 'map') {
        event.preventDefault()
        stylesStore.map(true)
    }
}

const codeEnter = () => {
    if (props.text === 'GitHub') {
        if (opacity.value === 0.7) return
        else {
            opacity.value = 0.7
            setTimeout(() => {
                opacity.value = 0
            }, 3000)
        }
    }
}

onMounted(() => {
    props.text === 'GitHub' ? (code.value = true) : null
    setTimeout(() => {
        visibility.value = true
    }, props.delay)
})
</script>

<template>
    <a
        v-if="visibility"
        :href="props.href"
        :target="props.target"
        @click="showMap"
        @mouseenter="codeEnter"
        >{{ props.text }}

        <font-awesome-icon class="icon" :icon="icon" />
        <font-awesome-icon v-if="code" class="code" icon="fa-solid fa-code" />

        <small v-if="code"
            >Kód tejto <br />
            stránky</small
        >
    </a>
</template>

<style lang="scss" scoped>
@import '@/../sass/variables';
a {
    position: relative;
    font-size: 1.3em;
    padding: 0.3em 0.3em 0.3em 2.3em;
    margin: 0 0 0.5em 4em;
    color: darken($font, 10%);
    background: darken($bg1, 5%);
    text-decoration: none;
    border-radius: 0.2em;
    transition: all 150ms ease-in-out;
    overflow: hidden;
    box-shadow: 0 0 3px darken($bg1, 40%);

    small {
        font-weight: 100;
        font-size: 0.7em;
        text-align: center;
        position: absolute;
        right: 15%;
        top: 50%;
        margin-top: -1.2em;
        opacity: v-bind(opacity);
        transition: opacity 150ms ease-in-out;
    }

    &:hover {
        box-shadow: 0 0 6px darken($bg1, 40%);
        .icon {
            opacity: 1;
        }
    }
}

.icon {
    position: absolute;
    font-size: 1.2em;
    top: 50%;
    left: 7px;
    margin-top: -0.5em;
    opacity: 0.7;
    transition: opacity 150ms ease-in-out;
}
.code {
    position: absolute;
    font-size: 1em;
    top: 50%;
    right: 7px;
    margin-top: -0.5em;
    transition: opacity 150ms ease-in-out;
    opacity: v-bind(opacity);
}

// Media Queries
// ----------------------

@media (max-width: 1000px) {
    a {
        flex: 0 1 30%;
        margin: 0;
    }
}

@media (max-width: 850px) {
    a {
        flex: 0 1 32%;
    }
}

@media (max-width: 798px) {
    a {
        flex: 0 1 auto;
        padding-right: 0.7em;

        small {
            display: none;
        }
    }
    .code {
        display: none;
    }
}

@media (max-width: 708px) {
    a {
        flex: 0 1 60%;
    }
}

@media (max-width: 450px) {
    a {
        flex: 0 1 80%;
        background: lighten($bg1, 5%);
    }

    .icon {
        color: darken($font, 15%);
    }
}
</style>
