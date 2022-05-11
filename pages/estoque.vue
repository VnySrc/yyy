<template>
<div class="estoque">
    <div class="estoque_filter">
        <span>Marca ></span>
        <span>Modelo ></span>
        <span>Ano ></span>
        <span>Ordena por ></span>
    </div>
    <div v-for="(car, index) in cars" :key="index">
        <span>{{ car.veiculo.id }}</span>
    </div>
    <span v-bind="cars"></span>
    <pre>{{ cars }}</pre>
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

<script>
const xml2js = require('xml2js');

export default {
    async asyncData({ $axios }) {
        const cars = await $axios.$get()
        .then(res => {
            xml2js.parseString(res, {explicitRoot: false, explicitArray: false}, function (err, result) {
                console.dir(result)
            });
        })
        return { cars }
    }
}
</script>

<style lang="scss">

.estoque {
    padding: 0 1.5rem;

    @include sm-up {
        padding: 0 2rem;
    }

    @include md {
        padding: 2rem 2rem;
    }

    &_filter {
        display: flex;
        justify-content: space-between;
        margin: 4rem 0 2rem 0;
        padding: 0 1rem;

        @include sm-up {
            width: 40rem;
        }

        span {
            font-size: 1.4rem;
            font-weight: bold;
            color: $gray-400;
            cursor: pointer;

            &:hover {
                color: $p-500;
            }
        }
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