<script setup lang="ts">
import SectionName from '@/components/uni/SectionName.vue'
import SkillsItem from './SkillsItem.vue'
import { skillsData, useStylesStore } from '@/store/store'
import { ref } from 'vue'

const hover = ref(false)
const stylesStore = useStylesStore()
</script>

<template>
    <Transition name="fade">
        <div
            class="skills-wraper"
            @mouseenter="hover = true"
            @mouseleave="hover = false"
            v-if="stylesStore.header"
        >
            <SectionName
                class="name"
                name="Znalosti"
                font="1.5em"
                :opacity="hover"
            />
            <div class="skills-box">
                <SkillsItem
                    v-for="data in skillsData"
                    :key="data.id"
                    :image="data.image"
                    :alt="data.alt"
                    :delay="data.delay"
                />
            </div>
        </div>
    </Transition>
</template>

<style lang="scss" scoped>
@import '@/../sass/variables';
.skills-wraper {
    flex: 0 1 90%;
    padding: 1.5em 3em 1em 3em;
    position: relative;
    cursor: default;

    border: 1px solid $bg2;
    border-radius: 0.7em;
    background-color: $bg1;
    box-shadow: 0 0 10px $other1;
}

.skills-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
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
@media (max-width: 1198px) {
    .skills-box {
        gap: 1.2em;
    }
}

@media (max-width: 1060px) {
    .skills-box {
        gap: 1.7em;
    }
}

@media (max-width: 1008px) {
    .skills-box {
        gap: 2.5em;
    }
}

@media (max-width: 1000px) {
    .skills-wraper {
        margin-bottom: 0.5em;
    }
    .skills-box {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        row-gap: 0em;
        column-gap: 3em;
    }
}

@media (max-width: 798px) {
    .skills-wraper {
        padding: 1em;
    }
}

@media (max-width: 450px) {
    .skills-wraper {
        padding: 0.5em;

        border: unset;
        border-radius: unset;
        background-color: unset;
        box-shadow: unset;
    }
    .skills-box {
        overflow-x: auto;
        flex-wrap: nowrap;
        justify-content: flex-start;
    }

    .skills-box::-webkit-scrollbar {
        display: none;
    }

    .skills-box {
        -ms-overflow-style: none; /* Internet Explorer 10+ */
        scrollbar-width: none; /* Firefox */
    }
}
</style>
