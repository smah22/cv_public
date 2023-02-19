<script setup lang="ts">
import AppGuestInput from './AppGuestInput.vue'
import AppGuestButton from './AppGuestButton.vue'
import AppLogo from './AppLogo.vue'
import LoginError from './LoginError.vue'
import { useLoginStore, errors } from '@/store/store'

const loginStore = useLoginStore()
</script>

<template>
    <Transition name="fade">
        <div v-if="!loginStore.authorized" class="login-box">
            <form class="login-wraper">
                <AppLogo />

                <AppGuestInput
                    id="login"
                    type="text"
                    text="Meno"
                    icon="fa-envelope"
                />
                <AppGuestInput
                    id="pass"
                    type="password"
                    text="Heslo"
                    icon="fa-key"
                />

                <AppGuestButton v-if="!errors.show" />
                <LoginError v-if="errors.show" />
            </form>
        </div>
    </Transition>
</template>

<style lang="scss" scoped>
@import '@/../sass/variables';
.login-box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: rgb(119, 161, 217);
    background: linear-gradient(90deg, $other1 0%, $bg2 100%);
}
.login-wraper {
    padding: 1em;

    display: flex;
    flex-direction: column;

    width: 20em;
    height: 16em;

    color: $font;
    background-color: lighten($bg2, 10%);
    border-radius: 0.8em;
    box-shadow: 0 0 50px lighten($other1, 5%);
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 200ms ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
