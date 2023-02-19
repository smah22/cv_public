<script setup lang="ts">
import FooterOther from './FooterOther.vue'
import FooterHobbies from './FooterHobbies.vue'
import { useStylesStore, useLoginStore } from '@/store/store'

defineProps<{
    mobile?: boolean
}>()

const stylesStore = useStylesStore()
const loginStore = useLoginStore()
</script>

<template>
    <Transition name="fade">
        <footer v-if="stylesStore.courses">
            <FooterOther :mobile="mobile" />
            <FooterHobbies />

            <div>
                <small
                    >Táto webova stránka nebola inšpirovaná žiadnou predlohou a
                    je len mojím výmyslom.</small
                >
                <a @click="loginStore.logout">
                    Odhlásiť | {{ loginStore.loggedUser }}
                </a>
            </div>
        </footer>
    </Transition>
</template>

<style lang="scss" scoped>
@import '@/../sass/variables';
footer {
    margin-bottom: 2em;
}

div {
    margin: 0.5em;
    text-align: center;
    cursor: pointer;

    a {
        padding: 0.3em;
        color: darken($font, 20%);
        border: 1px solid darken($font, 20%);
        border-radius: 0.1em;
        transition: all 100ms ease-out;

        &:hover {
            background-color: $bg2;
        }
    }

    small {
        text-align: center;
        display: block;
        padding: 0.5em;
        font-size: 0.9em;
        margin: 0.7em;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 400ms ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

@media (max-width: 450px) {
    small {
        margin: 1.5em;
    }

    footer {
        margin-bottom: 0.5em;
    }
}
</style>
