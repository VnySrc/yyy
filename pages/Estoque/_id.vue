<template>
    <div class="cars">
        <div class="cars_info">
            <div class="cars_info_imgs">
                <img v-bind:src="car.fotos.imagem[0]" />
            </div>
            <div class="cars_info_brand">
                <div class="cars_info_brand_titles">
                    <h2>{{ car.marca_descricao }}</h2>
                    <h1>{{ car.modelo_descricao }}</h1>
                    <span>{{ car.versao_descricao }}</span>
                </div>
                <div class="cars_info_brand_details">
                    <div class="cars_info_brand_details_price">
                        <h3>R$ {{ car.valor_final }}</h3>
                    </div>
                    <div class="cars_info_brand_details_zap">
                        <nuxt-link to="/contato"><IconsWhatsapp /></nuxt-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="cars_table">
            <h4>Especificações técnicas</h4>
            <table>
                <tbody>
                    <tr>
                        <th>Ano</th>
                        <td>{{ car.ano_fabricacao_descricao }}</td>
                    </tr>
                    <tr>
                        <th>Categoria</th>
                        <td>{{ car.tipo_descricao }}</td>
                    </tr>
                    <tr>
                        <th>Kilometragem</th>
                        <td>{{ car.kilometragem }}</td>
                    </tr>
                    <tr>
                        <th>Combustível</th>
                        <td>{{ car.combustivel_descricao }}</td>
                    </tr>
                    <tr>
                        <th>Transmisão</th>
                        <td>{{ car.cambio_descricao }}</td>
                    </tr>
                    <tr>
                        <th>Portas</th>
                        <td>{{ car.porta_id }}</td>
                    </tr>
                    <tr>
                        <th>Cor</th>
                        <td>{{ car.cor_descricao }}</td>
                    </tr>
                </tbody>
            </table>
            <h4>Observações</h4>
            <p>{{ car.observacao }}</p>
        </div>
    </div>
</template>

<script>
const xml2js = require('xml2js'),
      parser = new xml2js.Parser({explicitRoot: false, explicitArray: false});

export default {
    data() {
      return {
        cars: {}
      }
    },
    computed: {
        car() {
            return this.cars.find(el => el.id === this.$route.params.id)
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
    .cars {
        padding: 4rem 2rem;

        &_info {
            @include sm-up {
                display: flex;
                justify-content: space-around;
            }

            &_imgs {
                img {
                    width: 100%;
                    height: 25rem;
                    object-fit: cover;

                    @include sm-up {
                        height: 28rem;
                    }

                    @include md {
                        height: 38rem;
                    }
                }
            }
    
            &_brand {
                
                &_titles {
                    padding-left: 1rem;
                    margin: 1rem 0;
                    border-left: solid $p-500 1rem;

                    h2 {
                        color: $gray-600;
                        font-size: 1.5rem;
                    }
        
                    h1 {
                        font-size: 3.5rem;
                        color: $p-600;
                        margin: 0 0 .5rem 0;
                    }
        
                    span {
                        font-family: $ff-s;
                        font-size: 1.4rem;
                        color: $gray-500;
                    }
                }
    
                &_details {
                    display: flex;
                    gap: .5rem;

                    &_price {
                        width: 100%;
                        padding: 1.5rem 0;
                        background-color: $p-500;

                        h3 {
                            font-size: 2rem;
                            color: $white;
                            text-align: center;
                        }
                    }

                    &_zap {
                        padding: 1.5rem 0;
                        background-color: $p-400;

                        svg {
                            fill: $white;
                            height: 2rem;
                        }
                    }
                }
            }
        }



        &_table {
            margin: 2rem 0;
            font-family: $ff-s;
            font-size: 1.4rem;

            h4 {
                text-align: right;
                color: $p-600;
                font-size: 2rem;
                margin: 4rem 0;
            }

            p {
                border-right: solid $p-500 1rem;
                padding-right: 1rem;
                text-align: right;
            }

            table {
                width: 100%;
                table-layout: fixed;
                border-collapse: collapse;
                text-align: center;

                tbody {
                    tr {
                        th {
                            padding: 1rem;
                            color: $p-600;
                            border-bottom: .2rem $p-500 solid;
                        }
    
                        td {
                            border-bottom: .2rem $p-500 solid;
                            color: $gray-600;
                            padding: 1rem;
                        }
                    }
                }
            }
        }
    }
</style>