<script setup lang="ts">
import { ref } from 'vue'
import SectionName from '../uni/SectionName.vue'
import OtherArticle from './OtherArticle.vue'
import OtherSkills from './OtherSkills.vue'

defineProps<{
    mobile?: boolean
}>()

const hover = ref(false)
</script>

<template>
    <section
        @mouseenter="hover = true"
        @mouseleave="hover = false"
        class="wraper"
    >
        <SectionName
            class="name-edit"
            name="Ostatné"
            font="1.5em"
            :opacity="hover"
            v-if="!mobile"
        />

        <div class="other-wraper">
            <OtherSkills />
            <OtherArticle />
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import '@/../sass/variables';
.wraper {
    margin: 0 auto;
    position: relative;
    margin-top: 0.5em;
    padding: 1em 3em 1em 3em;
    border: 1px solid $bg2;
    border-radius: 0.7em;
    background-color: $bg1;
    box-shadow: 0 0 10px $other1;
    overflow: hidden;
    display: block !important;
}

.other-wraper {
    display: flex;
    gap: 2em;
}

// Media Queries
//-------------------------
@media (max-width: 798px) {
    .wraper {
        padding: 1em;
    }
}

@media (max-width: 780px) {
    .other-wraper {
        flex-direction: column;
    }
}

@media (max-width: 450px) {
    .wraper {
        padding: 0.5em;
        border: unset;
        border-radius: unset;
        background-color: unset;
        box-shadow: unset;
        margin-top: 0;
    }
}
</style>
