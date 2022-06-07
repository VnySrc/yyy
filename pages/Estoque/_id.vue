<template>
    <div class="cars">
        <div class="cars_info">
            <div class="cars_info_gallery">
                <swiper
                class="swiper gallery-top"
                :options="swiperOptionTop"
                ref="swiperTop"
                >
                    <swiper-slide v-for="(value, index) in carImgs" :key="index" class="cars_info_gallery_imgs">
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
                class="swiper gallery-thumbs"
                :options="swiperOptionThumbs"
                ref="swiperThumbs"
                >
                    <swiper-slide v-for="(value, index) in carImgs" :key="index" class="cars_info_gallery_thumbs">
                        <img :src="value" />
                    </swiper-slide>
                </swiper>
            </div>
            <div class="cars_info_brand">
                <div class="cars_info_brand_titles">
                    <h2>{{ car.marca_descricao }}</h2>
                    <h1>{{ car.modelo_descricao }}</h1>
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
    components: {
        Swiper,
        SwiperSlide,
    },
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
            centeredSlides: false,
            slidesPerView: "auto",
            touchRatio: 0.2,
            slideToClickedSlide: true,
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
    .gallery-thumbs {
        padding-top: .5rem;
        width: 100%;
        box-sizing: border-box;
    }

    .gallery-thumbs .swiper-slide {
        width: 25%;
        height: 100%;
        opacity: 0.4;
    }

    .gallery-thumbs .swiper-slide-active {
        opacity: 1;
    }

    .cars {
        padding: 4rem 1.5rem;

        @include md {
            display: flex;
            padding: 4rem 4rem 6rem 4rem;
            gap: 6rem;
        }

        &_info {
            @include md {
                width: 45%;
            }

            &_gallery {
    

                &_imgs {
                    height: 28rem;

                    @include sm-up {
                        height: 40rem;
                    }

                    @include md {
                        height: 30rem;
                    }

                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }
    
                &_thumbs {
                    img {
                        width: 100%;
                        height: 6rem;
                        object-fit: cover;
                    }
                }
            }

    
            &_brand {
                
                &_titles {
                    margin: 1rem 0;
                    padding-left: 1rem;
                    border-left: solid $p-600 .8rem;

                    h2 {
                        color: $gray-500;
                        font-size: 1.4rem;
                    }
        
                    h1 {
                        color: $p-600;
                        font-size: 3.4rem;
                        margin: 0 0 .8rem 0;
                    }
        
                    span {
                        font-family: $ff-s;
                        font-size: 1.5rem;
                        color: $gray-500;
                    }
                }
    
                &_details {
                    display: flex;
                    gap: .5rem;

                    &_price {
                        width: 100%;
                        padding: 1.5rem 0;
                        background-color: $p-600;

                        h3 {
                            font-size: 2rem;
                            color: $white;
                            text-align: center;
                        }
                    }

                    &_zap {
                        padding: 1.5rem 0;
                        background-color: $p-500;

                        svg {
                            fill: $white;
                            height: 2rem;
                        }

                        &:hover {
                            background-color: $p-400;
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
                color: $s-400;
                font-size: 2.2rem;
            }

            &_specs {
                margin: 0 0 4rem 0;

                h4 {
                    padding: .5rem 1rem;
                    text-align: left;
                    border-left: solid $s-400 .5rem;
                    margin: 0 0 4rem 0;
                }

                table {
                    width: 100%;
                    table-layout: fixed;
                    border-collapse: collapse;
                    text-align: center;
                    font-size: 1.4rem;
                    font-family: $ff-s;
    
                    tbody {
                        tr {
                            th {
                                padding: 1rem;
                                color: $gray-500;
                                border-bottom: .2rem $gray-200 solid;
                                border-right: .2rem $gray-200 solid;
                            }
        
                            td {
                                border-bottom: .2rem $gray-200 solid;
                                color: $gray-500;
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
                    border-right: solid $s-400 .5rem;
                    margin: 0 0 2rem 0;
                }

                p {
                    font-size: 1.4rem;
                    font-family: $ff-s;
                    color: $gray-500;
                }
            }
        }
    }
</style>