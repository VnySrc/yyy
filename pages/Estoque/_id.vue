<template>
<div class="cars">
    <div itemscope itemtype="http://schema.org/Product">
            <meta itemprop="brand" :content="car.marca_descricao.toLowerCase()">
            <meta itemprop="name" :content='car.marca_descricao.toLowerCase()+" "+car.modelo_descricao.toLowerCase()'>
            <meta itemprop="description" :content= 'car.versao_descricao.toLowerCase()' >
            <meta itemprop="productID" :content="car.id">
            <meta itemprop="url" :content="url">
            <meta itemprop="image" :content="car.fotos.imagem[0]">
            <div itemprop="value" itemscope itemtype="http://schema.org/PropertyValue">
            <span itemprop="propertyID" content="item_group_id"></span>
            <meta itemprop="value" content="cars">
        </div>
        <div itemprop="offers" itemscope itemtype="http://schema.org/Offer">
            <meta itemprop="availability" content="in stock">
            <meta itemprop="price" :content="Intl.NumberFormat('pt-BR').format(car.valor_final).toString()">
            <meta itemprop="priceCurrency" content="BRL">
            <meta itemprop="itemCondition" content="new">
        </div>
    </div>

        <div class="cars_info">
            <div class="cars_info_gallery">
                <swiper
                :options="swiperOptionTop"
                ref="swiperTop"
                >
                    <swiper-slide v-for="(value, index) in carImgs" :key="index">
                        <img id="texte" :src="value" loading="lazy" />
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
                        <img :src="value" loading="lazy" />
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
                        <h3><span class="promotion">  {{ Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(car.valor_de) }} </span> <span class="arrow"> ></span> {{ car.valor_final | price }}</h3>
                    </div>
                    <!--<a :href="'https://api.whatsapp.com/send?phone=5519997976865&text=Ol%C3%A1%20%F0%9F%98%80%2C%20tenho%20interesse%20no%20produto%20' +car.marca_descricao+ '%20%20' +car.modelo_descricao+ '%0ANome%3A%20' +car.marca_descricao+ '%20%20' +car.modelo_descricao+ '%0AVers%C3%A3o%3A%20' +car.versao_descricao+ '%0AAno%3A%20' +car.ano_fabricacao_descricao+'/'+car.ano_modelo_descricao+'%0APre%C3%A7o%3A%20' +Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(car.valor_final) || price" class="cars_info_brand_details_zap">-->
                    <a :href="'https://api.whatsapp.com/send?phone=5519997976865&text=Ol??%2C%20tenho%20interesse%20neste%20ve??culo%20que%20vi%20no%20seu%20%23Estoque%0ANome%3A%20' +car.marca_descricao+ '%20%20' +car.modelo_descricao + '%0AAno%3A%20' +car.ano_fabricacao_descricao+'/'+car.ano_modelo_descricao+'%0APre%C3%A7o%3A%20' + Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(car.valor_final) +'%0ALink%3A%20' + url " class="cars_info_brand_details_zap">
                        <IconsWhatsapp />
                    </a>
                </div>
            </div>
        </div>
        <div class="cars_table">
            <div class="cars_table_specs">
                <h4>Especifica????es t??cnicas</h4>
                <table>
                    <tbody>
                        <tr>
                            <th>Ano</th>
                            <td>{{ car.ano_fabricacao_descricao }} / {{ car.ano_modelo_descricao }}</td>
                        </tr>
                        <tr>
                            <th>Quilometragem</th>
                            <td>{{ car.kilometragem | km }}</td>
                        </tr>
                        <tr>
                            <th>Combust??vel</th>
                            <td>{{ car.combustivel_descricao }}</td>
                        </tr>
                        <tr>
                            <th>Transmis??o</th>
                            <td>{{ car.cambio_descricao }}</td>
                        </tr>
                        <tr>
                            <th>Cor</th>
                            <td>{{ car.cor_descricao }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="cars_table_obs">
                <h4>Observa????es</h4>
                <p>{{ car.observacao }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

try {
    fbq('track', 'ViewContent');
}
catch (err) {
    console.log("")
}
let carImgsH
let gg = [
    {id:1},
    {id:2}
]
function ff () {
    try {
        return 
    }catch(err) {
        console.error(err)
    return ""
    }
}

const xml2js = require('xml2js'),
      parser = new xml2js.Parser({explicitRoot: false, explicitArray: false});

export default {
    data() {
      return {
        url: '',
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
    head: {
        meta: [
       // {property: "og:image", content: `${new URLSearchParams(window.location.search).get("img")}`}, // localStorage.getItem("imgUrl")
     //     {property: "og:image:type", content: "image/jpg"},
      //    {property:"og:image:width", content:"1280"},
       //   {property: "og:image:height", content: "720"},
        ]
    },
    mounted() {
        setTimeout(() => {
        // document.querySelector('meta[property="og:image"]').content =  this.carImgs[0]
        this.carImgsH =  this.carImgs[0]
        
        }, 1000);
        console.log()
        console.log(this.carImgs[0])
        this.url = window.location.href
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
    methods: {
       

        
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
                    margin: 1rem 0 2rem 0;
                    padding: 1rem;
                    border-left: solid $gray-400 .8rem;
        
                    h1 {
                        color: $gray-700;
                        font-size: 3.4rem;
                        margin: 0 0 .5rem 0;
                    }
        
                    span {
                        font-weight: bold;
                        font-size: 1.8rem;
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
                        border-radius: .5rem;

                        h3 {
                            color: $white;
                            font-size: 2.5rem;
                            text-align: center;
                        }
                    }

                    &_zap {
                        padding: 1.5rem;
                        background-color: $p-500;
                        border-radius: .5rem;
                        margin: auto;
                        display: block;

                        svg {
                            fill: $white;
                            height: 3rem;
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
                color: $p-700;
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
    
                    tbody {
                        tr {
                            th {
                                padding: 2rem;
                                color: $gray-700;
                                border-bottom: .2rem $gray-400 solid;
                                border-right: .2rem $gray-400 solid;
                            }
        
                            td {
                                border-bottom: .2rem $gray-400 solid;
                                color: $gray-700;
                                padding: 2rem;
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
                    font-size: 1.8rem;
                    font-family: $ff-s;
                    color: $gray-600;
                }
            }
        }

        .promotion {
            text-decoration: line-through;
            font-size: 20px;
            color: #EF233C;
        }
        .arrow {
            font-size: 20px;
            color:#EF233C;
    }
    }
   
</style>