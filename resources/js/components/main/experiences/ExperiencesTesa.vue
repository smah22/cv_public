<script setup lang="ts"></script>

<template>
    <article>
        <h3>Technik zabezpečovacích systémov</h3>
        <h4>
            <a target="_blank" href="https://www.tesa-systems.sk/"
                >TESA shop Žilina</a
            >
        </h4>
        <small>2010 - doteraz</small>
        <p>
            Náplň mojej práce vo firme spočíva v
            <strong>kompletnom procese</strong>, ktorý začína prvou komunikáciou
            so zákazníkom, pokračuje prípravou cenovej ponuky a končí
            realizáciou montáže zabezpečovacích a kamerových systémov. Okrem
            toho dlhodobo pracujem aj ako technik satelitných a terestriálnych
            systémov. Moje skúsenosti v týchto oblastiach sú predovšetkým s
            výrobcami ako Satel, Dahua, Jablotron, ale aj s kompletným
            portfóliom satelitnej techniky.
        </p>
    </article>
</template>

<style lang="scss" scoped>
@import '@/../sass/variables';
article {
    border-bottom: 1px solid $font;
}

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
        margin-top: 0.4em;
    }

    h4 {
        font-size: 1.1em;
    }
    p {
        font-size: 1.1em;
    }
}
</style>
