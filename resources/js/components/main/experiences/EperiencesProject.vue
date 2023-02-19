<script setup lang="ts"></script>

<template>
    <article>
        <h3>Prezentačná webová stránka</h3>
        <h4>
            <a target="_blank" href="https://www.tesa-security.sk/"
                >TESA-SECURITY.sk</a
            >
        </h4>
        <small>Nedokončené</small>

        <p>
            Počas absolvovania kurzov som pracoval len na malých cvičných
            projektoch. V mojom záujme je zbierať čo
            <strong>najviac skúseností</strong> a stretnúť sa s reálnymi
            riešeniami pri písaní kódu. Vymyslel som si pracovný projekt
            prezentačnej stránky, ktorej súčasťou je "Admin panel" pre úpravu
            jej obsahu, vytvorený vo Vue.js. Projekt sa zapáčil a aktuálne je aj
            reálne nasadený.
        </p>
    </article>
</template>

<style lang="scss" scoped>
@import '@/../sass/variables';
h3 {
    font-size: 1.8em;
    margin-top: 0.8em;
    margin-bottom: 0.3em;
    color: darken($font, 10%);
}

h4 {
    font-size: 1.2em;
    cursor: pointer;
    margin: 0.3em 0 0em 0;

    a {
        text-decoration: none;
        color: $font;
    }
}

p {
    font-size: 1.2em;
    text-align: justify;
}

// Media Queries
//-------------------------

@media (max-width: 450px) {
    h3 {
        font-size: 1.5em;
    }

    h4 {
        font-size: 1.1em;
    }

    p {
        font-size: 1.1em;
    }
}
</style>
