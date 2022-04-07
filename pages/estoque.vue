<template>
<div class="estoque">
    <div class="estoque_cards">
        <card />
        <card />
        <card />
        <card />
        <card />
        <card />
        <card />
        <card />
    </div>
</div>
</template>

<style lang="scss">

.estoque {
    padding: 0 1.5rem;

    @include sm-up {
        padding: 0 2rem;
    }
    
    &_cards {
        display: flex;
        flex-direction: column;
        margin: 4rem 0;
        gap: 1rem;

        @include sm-up {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }

        @include md {
            grid-template-columns: repeat(4, 1fr);
        }

    }
}
</style>