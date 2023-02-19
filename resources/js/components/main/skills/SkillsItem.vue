<script setup lang="ts">
import { ref, onMounted } from 'vue'

const visibility = ref(false)

onMounted(() => {
    setTimeout(() => {
        visibility.value = true
    }, props.delay)
})

const props = defineProps({
    image: { type: String },
    alt: { type: String },
    delay: { type: Number, default: 50 },
})
</script>

<template>
    <Transition name="fade">
        <div v-if="visibility" class="skill-wraper">
            <img :src="`./${props.image}`" :alt="props.alt" />
            <h3>{{ props.alt }}</h3>
        </div>
    </Transition>
</template>

<style lang="scss" scoped>
@import '../../../../sass/variables';
.skill-wraper {
    display: flex;
    margin: 0.8em 0 0.8em 0;
    justify-content: center;
    align-items: center;
    gap: 2em;
    transition: transform 300ms ease-in-out;

    h3 {
        font-size: 1.8em;
        color: darken($font, 10%);
        min-width: 5em;
    }

    img {
        max-width: 30%;
        filter: drop-shadow(0 0 5px lighten($other1, 20%));
    }

    &:hover {
        transform: scale(1.03);
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

// Media Queries
//-------------------------
@media (max-width: 1198px) {
    .skill-wraper {
        h3 {
            font-size: 1.6em;
        }
    }
}

@media (max-width: 1000px) {
    .skill-wraper {
        flex: 0 1 30%;
    }
}

@media (max-width: 450px) {
    .skill-wraper {
        flex-direction: column;
        gap: 0;

        flex: 1 1 auto;
        margin: 0.5em 0.5em 0 0;

        h3 {
            min-width: auto;
            margin: 0.4em 0 0 0;
            text-align: center;
            font-size: 1.3em;
        }

        img {
            min-width: 100px;
        }
    }
}
</style>
