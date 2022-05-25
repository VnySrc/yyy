<template>
<div class="estoque">
    <div class="estoque_filter">
        <span>Marca ></span>
        <span>Modelo ></span>
        <span>Ano ></span>
        <span>Ordena por ></span>
    </div>
    <div v-for="(car, index) of cars" :key="index" class="estoque_cards">
        <div class="estoque_cards_card">
            <div class="estoque_cards_card_brand">
                <h4>{{ car.marca_descricao }}</h4>
                <h5>{{ car.modelo_descricao }}</h5>
            </div>
            <span class="estoque_cards_card_price">$ {{ car.valor_final }}</span>
            <div class="estoque_cards_card_img">
                <nuxt-link :to="`/estoque/${car.id}`">
                    <img v-bind:src="car.fotos.imagem[0]" />
                </nuxt-link>
            </div>
            <div class="estoque_cards_card_info">
                <div>
                    <iconsDate />
                    <span>{{ car.ano_fabricacao_descricao }}</span>
                </div>
                <div>
                    <iconsEngine />
                    <span>{{ car.combustivel_descricao }}</span>
                </div>
                <div>
                    <iconsSpeed />
                    <span>{{ car.kilometragem }} KM</span>
                </div>
                <nuxt-link :to="`/estoque/${car.id}`">
                    <div class="estoque_cards_card_info_stats">
                        <IconsInfo />
                        <span>Ver mais</span>
                    </div>
                </nuxt-link>
            </div>
        </div>
    </div>
</div>
</template>

<script>
const xml2js = require('xml2js'),
      parser = new xml2js.Parser({explicitRoot: false, explicitArray: false});

export default {
    data() {
      return {
        cars: []
      }
    },
    async asyncData({ $axios }) {
        const xml = await $axios.$get()
        const cars = await parser.parseStringPromise(xml)
        .then(function (res) {
            return res.veiculo
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

        &_card {
            flex: 1 1 auto;
            min-width: 15rem;
            margin: 2rem 0;
            flex-wrap: nowrap;

            overflow: hidden;
            position: relative;

            @include md {
                margin: 1rem;
            }

            &_brand {
                h4 {
                    color: $gray-500;
                    font-size: 1.5rem;
                }

                h5 {
                    font-size: 3.5rem;
                    color: $p-600;
                }
            }

            &_price {
                position: absolute;
                top: 0;
                right: 0;
                color: $white;
                font-size: 1.6rem;
                font-weight: bold;
                background-color: $p-500;
                padding: 1rem 1.5rem 1.5rem 1.5rem;
                clip-path: polygon(50% 85%, 100% 100%, 100% 0, 0 0, 0 100%);
            }

            &_info {
                width: 100%;
                display: flex;
                justify-content: space-between;

                div {
                    display: flex;
                    align-items: center;
                    flex-wrap: nowrap;

                    &:hover {

                        span,
                        svg {
                            fill: $p-600;
                            color: $p-600;
                        }
                    }
                }

                svg {
                    fill: $gray-500;
                }

                span {
                    padding-left: 0.8rem;
                    font-weight: bold;
                    font-size: 1.2rem;
                    color: $gray-500;

                    @include sm-up {
                        font-size: 1rem;
                    }
                }

                &_stats {
                    cursor: pointer;
                }
            }

            &_img {
                height: 25rem;
                margin: 1.5rem 0;
                border-bottom: solid $p-500 1rem;
                overflow: hidden;

                cursor: pointer;

                @include md {
                    height: 20rem;
                }

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
        }

    }
}
</style>