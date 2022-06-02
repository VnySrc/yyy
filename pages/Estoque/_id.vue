<template>
    <div class="cars">
        <div class="cars_info">
            <swiper
              class="swiper gallery-top"
              :options="swiperOptionTop"
              ref="swiperTop"
            >
                <swiper-slide v-for="(value, index) in carImgs" :key="index" class="cars_info_imgs">
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
                <swiper-slide v-for="(value, index) in carImgs" :key="index" class="cars_info_thumbs">
                    <img :src="value" />
                </swiper-slide>
            </swiper>
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
                        <th>Kilometragem</th>
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
            <h4>Observações</h4>
            <p>{{ car.observacao }}</p>
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
        padding: 4rem 2rem;

        &_info {

            &_imgs {
                img {
                    width: 100%;
                    height: 28rem;
                    object-fit: cover;

                    @include sm-up {
                        height: 50rem;
                    }
                }
            }

            &_thumbs {
                img {
                    width: 100%;
                    height: 8rem;
                    object-fit: cover;
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