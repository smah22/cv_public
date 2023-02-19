<script setup lang="ts">
import ProfileContact from './ProfileContact.vue'
import ProfileMy from './ProfileMy.vue'
import SectionName from '../uni/SectionName.vue'
import { useLoginStore, useStylesStore } from '@/store/store'
import { ref } from 'vue'

const props = defineProps<{
    mobile?: boolean
}>()

const hover = ref(false)
const loginStore = useLoginStore()
const stylesStore = useStylesStore()
</script>

<template>
    <Transition name="fade" @after-enter="stylesStore.headerReady()">
        <header
            v-if="loginStore.logged"
            class="wraper"
            @mouseenter="hover = true"
            @mouseleave="hover = false"
        >
            <SectionName
                v-if="!props.mobile"
                name="Profil"
                font="2em"
                :opacity="hover"
            />
            <article>
                <ProfileMy :mobile="props.mobile" />
                <ProfileContact />
            </article>
        </header>
    </Transition>
</template>

<style lang="scss" scoped>
@import '@/../sass/mixin';
@import '@/../sass/variables';
.wraper {
    @include container;
    position: relative;
    margin-top: 3em;
    border: 1px solid $bg2;
    border-radius: 0.7em;
    background-color: $bg1;
    box-shadow: 0 0 10px $other1;

    article {
        display: flex;
    }
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 200ms ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

// Media Queries
// ----------------------

@media (max-width: 1000px) {
    .wraper {
        article {
            display: block;
        }
    }
}

@media (max-width: 798px) {
    .wraper {
        padding: 1em;
    }
}

@media (max-width: 450px) {
    .wraper {
        padding: 0.5em;
        margin-top: 0;

        border: unset;
        border-radius: unset;
        background-color: unset;
        box-shadow: unset;
    }
}
</style>
