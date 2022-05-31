<template>
<div class="estoque">
    <div class="estoque_filter">
        <select v-model="sortModel" @change="orderModel($event)">
            <option value="">Modelo</option>
            <option v-for="(value, index) in getModel" :key="index" :value="value">{{ value }}</option>
        </select>
        <select v-model="sortBrand" @change="orderBrand($event)">
            <option value="">Marca</option>
            <option v-for="(value, index) in getBrand" :key="index" :value="value">{{ value }}</option>
        </select>
        <select v-model="sortType" :change="sortItem()">
            <option value="">Ordenar por</option>
            <option value="yearUp">Mais novo</option>
            <option value="yearDown">Mais velho</option>
            <option value="priceUp">Maior preço</option>
            <option value="priceDown">Menor preço</option>
        </select>
    </div>
    <div v-for="value in cars" :key="value.id" class="estoque_cards">
        <div class="estoque_cards_card">
            <div class="estoque_cards_card_brand">
                <h4>{{ value.marca_descricao }}</h4>
                <h5>{{ value.modelo_descricao }}</h5>
            </div>
            <span class="estoque_cards_card_price">{{ value.valor_final | price }}</span>
            <div class="estoque_cards_card_img">
                <nuxt-link :to="`/estoque/${value.id}`">
                    <img :src="value.fotos.imagem[0]" />
                </nuxt-link>
            </div>
            <div class="estoque_cards_card_info">
                <div>
                    <iconsDate />
                    <span>{{ value.ano_fabricacao_descricao }}</span>
                </div>
                <div>
                    <iconsEngine />
                    <span>{{ value.combustivel_descricao | gas }}</span>
                </div>
                <div>
                    <iconsSpeed />
                    <span>{{ value.kilometragem | km }}</span>
                </div>
                <nuxt-link :to="`/estoque/${value.id}`">
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
        cars: [],
        sortType: '',
        sortModel: '',
        sortBrand: ''
      }
    },
    filters: {
        gas(value) {
            if ( value === `Gasolina e álcool` ) {
                return `Flex`
            } else { return value }
        },
        price(value) {
            return Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
        },
        km(value) {
            return Intl.NumberFormat('pt-BR', { style: 'unit', unit: 'kilometer' }).format(value)
        }
    },
    computed: {
        getBrand() {
            return this.cars.map(el => el.marca_descricao).filter((value, index, arr) => (arr.indexOf(value) === index));
        },
        getModel() {
            return this.cars.map(el => el.modelo_descricao).filter((value, index, arr) => (arr.indexOf(value) === index));
        }
    },
    methods: {
        sortItem() {
            if (this.sortType == '') {
                this.cars = this.cars.sort(function(a, b) {
                    var nameA = a.marca_descricao.toUpperCase();
                    var nameB = b.marca_descricao.toUpperCase();
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;
                });
            }
            if (this.sortType == 'priceUp') {
                this.cars = this.cars.sort((prev, curr) => curr.valor_final - prev.valor_final);
            }
            if (this.sortType == 'priceDown') {
                this.cars = this.cars.sort((prev, curr) => prev.valor_final - curr.valor_final);
            }
            if (this.sortType == 'yearUp') {
                this.cars = this.cars.sort((prev, curr) => curr.ano_fabricacao_descricao - prev.ano_fabricacao_descricao);
            }
            if (this.sortType == 'yearDown') {
                this.cars = this.cars.sort((prev, curr) => prev.ano_fabricacao_descricao - curr.ano_fabricacao_descricao);
            }
        },
        orderModel(event) {
            if (this.sortModel == event.target.value) {
                this.cars = this.cars.filter(el => el.modelo_descricao === event.target.value );
            }
        },
        orderBrand(event) {
            if (this.sortBrand == event.target.value) {
                this.cars = this.cars.filter(el => el.marca_descricao === event.target.value );
            }
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

        select {
            font-size: 1.4rem;
            font-weight: bold;
            color: $gray-400;
            cursor: pointer;

            &:hover {
                color: $p-500;
            }
        }

        button {
            font-size: 2rem;
            background-color: $gray-300;
            height: 10rem;
            width: 10rem;
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