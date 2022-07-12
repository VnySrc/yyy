<template>
    <div class="cars">
        <div class="cars_info">
            <div class="cars_info_gallery">
                <swiper
                :options="swiperOptionTop"
                ref="swiperTop"
                >
                    <swiper-slide v-for="(value, index) in carImgs" :key="index">
                        <img :src="value" />
                    </swiper-slide>
                    <div
                        class="swiper-button-next swiper-button-white"
                        slot="button-next"
                    ></div>
                    <div
                        class="swiper-button-prev swiper-button-white"
                        slot="button-prev"
                    ></div>
                </swiper>
                <swiper
                class="cars_info_gallery_thumbs"
                :options="swiperOptionThumbs"
                ref="swiperThumbs"
                >
                    <swiper-slide v-for="(value, index) in carImgs" :key="index">
                        <img :src="value" />
                    </swiper-slide>
                </swiper>
            </div>
            <div class="cars_info_brand">
                <div class="cars_info_brand_titles">
                    <h1>{{ car.marca_descricao }} {{ car.modelo_descricao }}</h1>
                    <span>{{ car.versao_descricao }}</span>
                </div>
                <div class="cars_info_brand_details">
                    <div class="cars_info_brand_details_price">
                        <h3>{{ car.valor_final | price }}</h3>
                    </div>
                    <nuxt-link to="/contato" class="cars_info_brand_details_zap">
                        <IconsWhatsapp />
                    </nuxt-link>
                </div>
            </div>
        </div>
        <div class="cars_table">
            <div class="cars_table_specs">
                <h4>Especificações técnicas</h4>
                <table>
                    <tbody>
                        <tr>
                            <th>Ano</th>
                            <td>{{ car.ano_fabricacao_descricao }}</td>
                        </tr>
                        <tr>
                            <th>Quilometragem</th>
                            <td>{{ car.kilometragem | km }}</td>
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
            </div>
            <div class="cars_table_obs">
                <h4>Observações</h4>
                <p>{{ car.observacao }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

const xml2js = require('xml2js'),
      parser = new xml2js.Parser({explicitRoot: false, explicitArray: false});

export default {
    data() {
      return {
        cars: [],
        swiperOptionTop: {
            loop: true,
            loopedSlides: 5, // looped slides should be the same
            spaceBetween: 5,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        },
        swiperOptionThumbs: {
            loop: true,
            loopedSlides: 5, // looped slides should be the same
            spaceBetween: 5,
            centeredSlides: true,
            slidesPerView: "auto",
            slideToClickedSlide: true
        }
      }
    },
    mounted() {
        this.$nextTick(() => {
        const swiperTop = this.$refs.swiperTop.$swiper;
        const swiperThumbs = this.$refs.swiperThumbs.$swiper;
        swiperTop.controller.control = swiperThumbs;
        swiperThumbs.controller.control = swiperTop;
        });
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    filters: {
        price(value) {
            return Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
        },
        km(value) {
            return Intl.NumberFormat('pt-BR', { style: 'unit', unit: 'kilometer' }).format(value)
        }
    },
    computed: {
        ...mapState('links', ['links']),
        car() {
            return this.cars.find(el => el.id === this.$route.params.id)
        },
        carImgs() {
            return this.car.fotos.imagem
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
        padding: 4rem 1.5rem;

        @include md {
            display: flex;
            padding: 4rem 4rem 6rem 4rem;
            gap: 4rem;
        }

        &_info {
            @include md {
                width: 50%;
            }

            &_gallery {
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: .5rem;

                    @include sm-up {
                        height: 38rem;
                    }

                    @include bg {
                        height: 100%;
                    }
                }
    
                &_thumbs {
                    width: 100%;
                    margin: .3rem 0 0 0;
                    box-sizing: border-box;
                    border-radius: .5rem;

                    .swiper-slide {
                        width: 25%;
                        height: 100%;
                        opacity: 0.6;
                    }

                    .swiper-slide-active {
                        opacity: 1;
                    }

                    img {
                        width: 100%;
                        height: 5rem;
                    }
                }
            }

    
            &_brand {
                
                &_titles {
                    margin: 1rem 0;
                    padding-left: 1rem;
                    border-left: solid $gray-400 .8rem;
        
                    h1 {
                        color: $p-600;
                        font-size: 3.4rem;
                        margin: 0 0 .5rem 0;
                    }
        
                    span {
                        font-family: $ff-s;
                        font-weight: bold;
                        font-size: 1.5rem;
                        color: $gray-600;
                    }
                }
    
                &_details {
                    display: flex;
                    gap: .5rem;

                    &_price {
                        width: 100%;
                        padding: 1.5rem 0;
                        background-color: $gray-600;
                        border-radius: .5rem;

                        h3 {
                            color: $white;
                            font-size: 2.5rem;
                            text-align: center;
                        }
                    }

                    &_zap {
                        padding: 1.5rem;
                        background-color: $gray-500;
                        border-radius: .5rem;

                        svg {
                            fill: $white;
                            width: 2.8rem;
                        }

                        &:hover {
                            background-color: $gray-400;
                        }
                    }
                }
            }
        }

        &_table {
            margin: 4rem 0;

            @include md {
                margin: 0;
            }

            h4 {
                color: $p-600;
                font-size: 2.2rem;
            }

            &_specs {
                margin: 0 0 4rem 0;

                h4 {
                    padding: .5rem 1rem;
                    text-align: left;
                    border-left: solid $gray-400 .5rem;
                    margin: 0 0 4rem 0;
                }

                table {
                    width: 100%;
                    table-layout: fixed;
                    border-collapse: collapse;
                    text-align: center;
                    font-size: 1.5rem;
                    font-family: $ff-s;
    
                    tbody {
                        tr {
                            th {
                                padding: 1rem;
                                color: $gray-600;
                                border-bottom: .2rem $gray-400 solid;
                                border-right: .2rem $gray-400 solid;
                            }
        
                            td {
                                border-bottom: .2rem $gray-400 solid;
                                color: $gray-600;
                                padding: 1rem;
                            }
                        }
                    }
                }
            }

            &_obs {
                text-align: right;
                
                h4 {
                    padding: .5rem 1rem;
                    border-right: solid $gray-400 .5rem;
                    margin: 0 0 2rem 0;
                }

                p {
                    font-size: 1.7rem;
                    font-family: $ff-s;
                    color: $gray-600;
                }
            }
        }
    }
</style>