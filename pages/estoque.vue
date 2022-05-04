<template>
<div class="estoque">
    <div class="estoque_filter">
    </div>
    <div class="estoque_cards">
        <card />
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

    &_filter {
        height: 4rem;
        border: solid $p-500 .1rem;
        margin: 4rem 0 2rem 0;
    }
    
    &_cards {
        display: flex;
        flex-direction: column;
        gap: 2rem;

        @include sm-up {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }

        @include md {
            grid-template-columns: repeat(3, 1fr);
        }

    }
}
</style>