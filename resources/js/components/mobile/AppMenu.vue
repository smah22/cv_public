<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { useMenuStore } from '../../store/menu'
import { useRoute } from 'vue-router'

const menuStore = useMenuStore()
const route = useRoute()

onBeforeMount(() => {
    window.addEventListener('scroll', menuStore.scroll)
})
</script>

<template>
    <TransitionGroup name="slide" mode="out-in">
        <nav key="1" v-if="menuStore.visibility">
            <ul>
                <router-link tag="li" class="item" :to="{ name: 'Profil' }">
                    <font-awesome-icon class="icon" icon="fa-solid fa-user" />
                    <small>Profil</small>
                </router-link>

                <router-link tag="li" class="item" :to="{ name: 'Skúsenosti' }">
                    <font-awesome-icon class="icon" icon="fa-solid fa-code" />
                    <small>Skúsenosti</small>
                </router-link>

                <router-link tag="li" class="item" :to="{ name: 'Vzdelanie' }">
                    <font-awesome-icon class="icon" icon="fa-solid fa-school" />
                    <small>Vzdelanie</small>
                </router-link>

                <router-link tag="li" class="item" :to="{ name: 'Ostatné' }">
                    <font-awesome-icon class="icon" icon="fa-solid fa-file" />
                    <small>Ostatné</small>
                </router-link>
            </ul>
        </nav>

        <font-awesome-icon
            @click="menuStore.showMneu"
            v-if="!menuStore.visibility"
            key="2"
            icon="fa-solid fa-bars"
            class="menu-icon"
        />
    </TransitionGroup>
</template>

<style lang="scss" scoped>
@import '@/../sass/variables';
nav {
    position: fixed;
    z-index: 100;
    width: 100%;
    bottom: 0;
    left: 0;

    ul {
        background-color: lighten($bg1, 15%);
        margin: 0;
        padding: 0 0.2em 0 0.2em;
        height: 70px;
        list-style: none;

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1em;
    }
}

.item {
    flex: 0 1 18%;
    padding: 0.3em 0.3em 0 0.3em;
    font-size: 1.2em;
    text-decoration: none;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    transition: all 200ms ease-in-out;

    small {
        margin-top: 0.2em;
        color: darken($font, 10%);
    }
}
.router-link-exact-active {
    border-radius: 0.2em;
    background-color: lighten($bg1, 8%);
    box-shadow: 0 0 5px darken($bg2, 30%);
}

.icon {
    color: darken($font, 30%);
}

.menu-icon {
    position: fixed;
    z-index: 10;
    bottom: 0;
    right: 0;

    width: 2em;
    height: 2em;
    padding: 0.7em;
    cursor: pointer;
}

// Menu transition

.slide-enter-active,
.slide-leave-active {
    transition: transform 200ms ease-in-out;
}

.slide-enter-from {
    transform: translateY(70px);
}
.slide-leave-to {
    transform: translateY(70px);
}
</style>
