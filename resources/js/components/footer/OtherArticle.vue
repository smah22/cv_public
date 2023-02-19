<script setup lang="ts"></script>

<template>
    <article class="article-wraper">
        <p class="inline">
            <strong>PHP framework Laravel</strong>, presnejšie jeho
            <strong>základy</strong>, boli súčasťou Vue.js kurzu. Aby som mohol
            vytvoriť funkčnú stránku, naučil som sa
            <strong>základnú</strong> prácu s
            <span>routami, kontrolérmi a layoutom.</span> Taktiež som sa naučil,
            ako fungujú <span>migrácie, modely</span>, práca s databázou a
            <span>API requesty</span>. Na základnej úrovni viem, ako funguje v
            Laraveli <span>autentifikácia</span>.
        </p>

        <p>Aktuálne sa venujem aj <strong>kurzu angličtiny</strong>.</p>

        <p>
            V mojom aktuálnom zamestnaní som už vyše dvanásť rokov. Dlhodobo
            pracujem v <strong>tíme</strong>, avšak moja práca vyžaduje
            schopnosť riešiť problémy aj <strong>samostatne</strong>. Znalosti
            uvedené v tomto životopise sú na juniorskej úrovni a som si vedomý
            toho, že musím zbierať veľa nových skúseností. Ak vás táto stránka
            zaujala a chcete vidieť moju prácu podrobnejšie, odkaz na kód
            prikladám do kontaktov.
        </p>
    </article>
</template>

<style lang="scss" scoped>
.article-wraper {
    flex: 0 1 auto;

    p {
        font-size: 1.2em;
        text-align: justify;
        span {
            font-style: italic;
        }
    }
}
// Media queries
//--------------------------------
@media (max-width: 780px) {
    article > p {
        margin-top: 0em;
    }
}
</style>
