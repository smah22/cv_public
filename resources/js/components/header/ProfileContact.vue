<script setup lang="ts">
import ContactLink from './ContactLink.vue'
import { linkData } from '@/store/store'
</script>

<template>
    <div class="contact">
        <TransitionGroup name="slide-fade">
            <ContactLink
                v-for="link in linkData"
                :key="link.id"
                :href="link.href"
                :text="link.text"
                :icon="link.icon"
                :target="link.target"
                :delay="link.delay"
            />
        </TransitionGroup>
    </div>
</template>

<style lang="scss" scoped>
@import '@/../sass/variables';
.contact {
    flex: 0 1 35%;

    align-self: center;
    display: flex;
    flex-direction: column;
}
.slide-fade-leave-active,
.slide-fade-enter-active {
    transition: all 300ms ease-in-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(40px);
    opacity: 0;
}

.fade-leave-active,
.fade-enter-active {
    transition: all 100ms ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

// Media Queries
// ----------------------

@media (max-width: 1000px) {
    .contact {
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        row-gap: 0.5em;
        column-gap: 1.5em;
        margin-bottom: 0.5em;
    }
    .contact > a:nth-child(1) {
        margin-left: 3.5em;
    }
    .contact > a:nth-child(2) {
        margin-right: 3.5em;
    }
    .contact > a:nth-child(3) {
        margin-left: 3.5em;
    }
    .contact > a:nth-child(4) {
        margin-right: 3.5em;
    }
    .contact > a:nth-child(5) {
        margin-left: 3.5em;
    }
}

@media (max-width: 850px) {
    .contact > a:nth-child(1) {
        margin-left: 1.8em;
    }
    .contact > a:nth-child(2) {
        margin-right: 1.8em;
    }
    .contact > a:nth-child(3) {
        margin-left: 1.8em;
    }
    .contact > a:nth-child(4) {
        margin-right: 1.8em;
    }
    .contact > a:nth-child(5) {
        margin-left: 1.8em;
    }
}

@media (max-width: 798px) {
    .contact {
        justify-content: center;
        column-gap: 0.8em;
        row-gap: 0.8em;
    }
    .contact > a:nth-child(1) {
        margin-left: 0;
    }
    .contact > a:nth-child(2) {
        margin-right: 0;
    }
    .contact > a:nth-child(3) {
        margin-left: 0;
    }
    .contact > a:nth-child(4) {
        margin-right: 0;
    }
    .contact > a:nth-child(5) {
        margin-left: 0;
    }
}
</style>
