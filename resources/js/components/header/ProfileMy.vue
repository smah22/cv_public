<script setup lang="ts">
const props = defineProps<{
    mobile?: boolean
}>()
</script>

<template>
    <div class="profile">
        <h1 v-if="!props.mobile">Martin Šmehýl</h1>
        <small v-if="!props.mobile">22. 10. 1990</small>
        <p>
            K programovaniu som sa dostal pri mojej aktuálnej práci a venujem sa
            mu <strong>1.5 roka</strong>. Okrem povinností technika pre oblasť
            zabezpečenia objektov som sa zaujímal aj o firemný e-shop. Začalo to
            jednoduchými úpravami HTML a CSS kódu. Tvorba frontendu ma veľmi
            zaujala a začal som sa jej venovať intenzívnejšie. Absolvoval som
            kurzy programovania, aby som mohol zrealizovať svoje nápady. V mojom
            hlavnom záujme je naďalej sa
            <strong>rozvíjať, učiť sa a nájsť si uplatnenie</strong>
            v tomto sektore.
        </p>
    </div>
</template>

<style lang="scss" scoped>
@import '@/../sass/variables';
.profile {
    flex: 0 1 65%;
    cursor: default;

    h1 {
        font-size: 4em;
        color: darken($font, 10%);
        margin: 0.3em 0 0 0;
    }

    p {
        font-size: 1.2em;
        text-align: justify;
        margin-bottom: 3em;
    }

    small {
        font-size: 1em;
        margin-left: 0.3em;
    }
}

// Media Queries
// ----------------------

@media (max-width: 1000px) {
    .profile {
        h1 {
            font-size: 3.5em;
        }

        p {
            margin-bottom: 1.5em;
            font-size: 1.1em;
        }
    }
}

@media (max-width: 708px) {
    .profile {
        h1 {
            font-size: 3em;
        }
    }
}

@media (max-width: 708px) {
    .profile {
        h1 {
            margin: 0;
        }
    }
}
</style>
