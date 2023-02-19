<script setup lang="ts">
import { ref } from 'vue'
import { useStylesStore } from '@/store/store'
import SectionName from '../uni/SectionName.vue'
import HobiesGallery from './HobbiesGallery.vue'

const stylesStore = useStylesStore()
const hover = ref<boolean>(false)
</script>

<template>
    <section
        class="wraper"
        @mouseenter="hover = true"
        @mouseleave="hover = false"
        v-if="stylesStore.skills"
    >
        <article>
            <SectionName name="Záujmy" font="1.5em" :opacity="hover" />
            <p>
                <strong>Horská cyklistika</strong> je mojou obľúbenou aktivitou,
                ktorej sa venujem už dlhé roky. Bývam v blízkosti Malej Fatry,
                ktorá je vynikajúca na adrenalínové jazdy. Horský bicykel mi
                pomáha trénovať svoju fyzickú, ale aj mentálnu vytrvalosť.
                Tomuto športu som sa ešte donedávna venoval aj súťažné.
            </p>

            <p>
                Veľmi rád si takisto zájdem na dobrý
                <strong>stand-up</strong>, rôzne kultúrne podujatia alebo
                koncert.
            </p>

            <p>
                Veľkú časť môjho voľného času zaberá práve programovanie.
                Čoskoro sa mu budem venovať už 2 roky a chcel by som v tejto
                činnosti dosiahnuť čo najväčší progres, aby to neostalo len ako
                hobby. Verím, že sa mi to podarí a budem naďalej zlepšovať svoje
                vedomosti.
            </p>
        </article>

        <HobiesGallery />
    </section>
</template>

<style lang="scss" scoped>
@import '@/../sass/variables';
.wraper {
    margin: 0 auto;
    position: relative;
    margin-top: 0.5em;
    border: 1px solid $bg2;
    border-radius: 0.7em;
    background-color: $bg1;
    box-shadow: 0 0 10px $other1;
    overflow: hidden;

    display: flex;

    article {
        flex: 0 1 80%;
        padding: 1em 3em 1em 3em;

        p {
            font-size: 1.2em;
            text-align: justify;
        }
    }
}

// Media Queries
//-------------------------
@media (max-width: 900px) {
    .wraper {
        flex-direction: column;
    }
}

@media (max-width: 798px) {
    .wraper > article {
        padding: 1em;
    }
}

@media (max-width: 450px) {
    .wraper {
        border: unset;
        border-radius: unset;
        background-color: unset;
        box-shadow: unset;

        article {
            padding: 0.5em;
        }
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
