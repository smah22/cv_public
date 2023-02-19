<script setup lang="ts"></script>

<template>
    <ul>
        <li>
            <font-awesome-icon class="icon" icon="fa-solid fa-earth-europe" />
            <h3>Anglický jazyk</h3>
            <p>A1 - začiatočník</p>
        </li>

        <li>
            <font-awesome-icon class="icon" icon="fa-solid fa-id-card" />
            <h3>Vodičský preukaz</h3>
            <p>B</p>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
@import '@/../sass/variables';
ul {
    flex: 1 0 20%;
    padding: 0 0 0 0;
    border-right: 1px solid darken($bg1, 10%);
    margin-top: 0;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    li {
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;

        h3 {
            margin: 0;
        }

        p {
            margin: 0.2em 0 1.4em 0;
        }
    }
}

.icon {
    width: 2.5em;
    height: auto;
    margin-bottom: 0.5em;
}

// Media Queries
//-------------------------
@media (max-width: 930px) {
    ul {
        padding-right: 0.5em;
    }
}

@media (max-width: 780px) {
    ul {
        flex-direction: row;
        margin: 1.2em 0 0 0;
        border-right: none;

        li > p {
            margin-bottom: 0;
        }
    }

    .icon {
        min-height: 2.8em;
    }
}

@media (max-width: 450px) {
    .icon {
        color: darken($font, 15%);
    }

    ul > li > h3 {
        color: darken($font, 15%);
    }
}
</style>
