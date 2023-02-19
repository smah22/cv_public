<script setup lang="ts">
import SectionName from '../../uni/SectionName.vue'
import { useStylesStore } from '@/store/store'
import { ref } from 'vue'

defineProps<{
    mobile?: boolean
}>()

const hover = ref(false)
const stylesStore = useStylesStore()
</script>

<template>
    <Transition name="fade" @after-enter="stylesStore.skillsReady">
        <div
            @mouseenter="hover = true"
            @mouseleave="hover = false"
            v-if="stylesStore.header"
            class="wraper"
        >
            <SectionName
                class="name"
                name="Vzdelanie"
                font="1.5em"
                :opacity="hover"
                v-if="!mobile"
            />
            <article>
                <h3>Stredná odborná škola elektrotechnická Žilina</h3>
                <h4>
                    Mechanik elektrotechnik so zamernaím na informačné
                    technológie
                </h4>
                <p>Ukončené maturitnou skúškou a výučným listom, 2006-2010.</p>
            </article>
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

h3 {
    font-size: 1.8em;
    margin-top: 0.8em;
    margin-bottom: 0.3em;
    color: darken($font, 10%);
}

h4 {
    font-size: 1.2em;
    margin: 0.3em 0 0em 0;

    a {
        text-decoration: none;
        color: $font;
    }
}

p {
    font-size: 1.2em;
    text-align: justify;
}

article {
    margin-bottom: 0.8em;
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

    h3 {
        font-size: 1.5em;
        margin-top: 0.4em;
    }

    h4 {
        font-size: 1.1em;
    }
    p {
        font-size: 1.1em;
        text-align: left;
    }
}
</style>
