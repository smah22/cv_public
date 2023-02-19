<script setup lang="ts">
import { ref, onMounted, type StyleValue } from 'vue'
import { useLoginStore } from '../../store/store'

const props = defineProps({
    type: { type: String },
    id: { type: String },
    text: { type: String },
    icon: { type: String },
})

const loginStore = useLoginStore()

const selected = ref(false)
const email = ref<HTMLInputElement | null>(null)
const input = ref('')

const typing = () => {
    props.id === 'login'
        ? loginStore.setName(input.value)
        : loginStore.setPass(input.value)
}

onMounted(() => {
    props.id === 'login' ? email.value?.focus() : null
})
</script>

<template>
    <div class="input-wraper">
        <label :for="props.id">{{ props.text }}</label>

        <div class="wraper">
            <input
                ref="email"
                tabindex="0"
                v-model="input"
                @change="typing"
                @focusin="selected = true"
                @focusout="selected = false"
                @submit="loginStore.login"
                :id="props.id"
                :type="props.type"
            />
            <font-awesome-icon
                :class="{ focus: selected }"
                class="icon"
                :icon="icon"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/../sass/variables';
.input-wraper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0.5em 0 0.5em;
    margin-bottom: 1em;

    label {
        font-weight: 200;
        font-size: 0.8em;
        margin: 0 0 0.3em 0.2em;
        align-self: flex-start;
        text-transform: uppercase;
    }
}
.wraper {
    border-radius: 0.2em;
    position: relative;
    overflow: hidden;
    width: 100%;

    input {
        height: 100%;
        width: 100%;
        outline: none;
        border: none;
        border-radius: 0.2em;
        padding: 0.2em 0em 0.2em 2.1em;
        font-size: 1.2em;
        background-color: lighten($bg1, 10%);
        color: $font;
        opacity: 0.8;
        transition: all 150ms ease-in-out;
        box-sizing: border-box;
        &:focus {
            opacity: 1;
            box-shadow: 0 0 4px $other1;
        }
    }
}
.icon {
    position: absolute;
    top: 50%;
    left: 0;
    width: auto;
    height: 22px;
    color: $font;
    margin-top: -11px;
    margin-left: 0.4em;
    opacity: 0.7;
    transition: all 150ms ease-in-out;
}

.focus {
    opacity: 1;
}
</style>
