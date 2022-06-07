<template>
    <div class="home">
        <section class="home_header">
            <header>
                <h3>INDAIATUBA - SP</h3>
                <h1>Tudo começa com um sonho, mas aqui a gente te ajudar a realizar</h1>
                <p>Vamos juntos achar um veículo perfeito para você</p>
                <nuxt-link to="/estoque">
                    <div>
                        <IconsArrow />
                    </div>
                    <span>Confira nosso estoque</span>
                </nuxt-link>
            </header>
            <div class="home_header_highlights">
                <nuxt-link :to="`/estoque/${value.id}`" v-for="value in car" :key="value.id" class="home_header_highlights_card">
                    <h4>{{ value.marca_descricao }}</h4>
                    <h5>{{ value.modelo_descricao }}</h5>
                    <div class="home_header_highlights_card_img">
                        <div class="home_header_highlights_card_img_stats">
                            <span>{{ value.ano_fabricacao_descricao }}</span>
                            <span>-</span>
                            <span>{{ value.combustivel_descricao | gas }}</span>
                            <span>-</span>
                            <span>{{ value.valor_final | price }}</span>
                        </div>
                        <img :src="value.fotos.imagem[0]" />
                    </div>
                </nuxt-link>
            </div>
        </section>
        <section class="home_razoes">
            <div class="home_razoes_text">
                <h3>COMPRA CERTA</h3>
                <h1>Benefícios de comprar com a Avenida veículos</h1>
                <p>Atuando no mercado automobilístico, nós da Avenida Veículos buscamos auxiliar nossos clientes afim de
                    encontrar o melhor negócio, agindo como consultores, não somente como simples vendedores.</p>
            </div>
            <div class="home_razoes_cards">
                <nuxt-link to="/serviços" class="home_razoes_cards_card">
                        <iconsShield />
                        <h3>Garantia de até um ano</h3>
                </nuxt-link>
                <nuxt-link to="/serviços" class="home_razoes_cards_card">
                        <iconsDeal />
                        <h3>Financiamento rápido que cabe no seu bolso</h3>
                </nuxt-link>
                <nuxt-link to="/serviços" class="home_razoes_cards_card">
                        <iconsGift />
                        <h3>Compre e receba em casa como presente</h3>
                </nuxt-link>
                <nuxt-link to="/serviços" class="home_razoes_cards_card">
                        <iconsTool />
                        <h3>Carros com certificados de qualidade</h3>
                </nuxt-link>
            </div>
        </section>
        <section class="home_blog">
            <nuxt-link to="/sobre" class="home_blog_card">
                <nuxt-img format="webp" src="/img/avenida.jpg" />
                <div class="home_blog_card_title">
                    <h5>Avenida Veículos</h5>
                    <h4>Conheça nossa história de sucesso!</h4>
                </div>
            </nuxt-link>
            <nuxt-link to="/sobre" class="home_blog_card">
                <nuxt-img format="webp" src="/img/avenida.jpg" />
                <div class="home_blog_card_title">
                    <h5>Avenida Veículos</h5>
                    <h4>Conheça nossa história de sucesso!</h4>
                </div>
            </nuxt-link>
            <nuxt-link to="/sobre" class="home_blog_card">
                <nuxt-img format="webp" src="/img/avenida.jpg" />
                <div class="home_blog_card_title">
                    <h5>Avenida Veículos</h5>
                    <h4>Conheça nossa história de sucesso!</h4>
                </div>
            </nuxt-link>
        </section>
    </div>
</template>

<script>
    const xml2js = require('xml2js'),
          parser = new xml2js.Parser({ explicitRoot: false, explicitArray: false });

    export default {
        data() {
            return {
                cars: []
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
            }
        },
        computed: {
            car() {
                return this.cars.slice(0, 4)
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
    .home {
        padding: 2rem 1.4rem;
        max-width: 120rem;

        @include md {
            padding: 2rem 2rem 8rem 2rem;
        }

        &_header {
            margin-top: 4rem;

            @include md {
                display: flex;
                justify-content: space-around;
            }

            header {
                max-width: 40rem;
        
                h1 {
                    color: $p-600;
                    line-height: 1.1;
                    font-weight: bold;
                    font-size: 3.2rem;
                    word-spacing: -0.5rem;
                    margin: .5rem 0 2rem 0;
                }
        
                p {
                    font-size: 2.2rem;
                    font-family: $ff-s;
                    color: $gray-400;
                }
        
                h3 {
                    font-size: 2rem;
                    font-weight: bold;
                    color: $gray-500;
                }
        
                a {
                    display: flex;
                    align-items: center;
                    margin-top: 2rem;
                    margin-bottom: 4rem;
        
                    &:hover {
                        span {
                            color: $p-500;
                        }
        
                        div {
                            outline: 0.2rem solid $p-500;
                            outline-offset: 0.2rem;
                            background-color: $p-500;
                        }
                    }
        
                    span {
                        font-size: 1.8rem;
                        font-weight: bold;
                        color: $p-600;
                    }
        
                    div {
                        padding: 1.2rem;
                        margin-right: 1rem;
                        background-color: $p-600;
        
                        svg {
                            fill: $white;
                        }
                    }
                }
            }
        
            &_highlights {
                gap: 2rem;
                display: flex;
                flex-wrap: wrap;

                @include sm-up {
                    flex-wrap: nowrap;
                }

                @include md {
                    flex-wrap: wrap;
                    gap: 4rem 3rem;
                    max-width: 46rem;
                }
        
                &_card {
                    flex: 1 1 auto;
                    width: 45%;

                    h4 {
                        color: $gray-500;
                        font-size: 1.2rem;
                    }
    
                    h5 {
                        font-size: 2.8rem;
                        color: $p-600;
                    }
        
                    &_img {
                        overflow: hidden;
                        position: relative;
                        margin: 1rem 0 0 0;
                        box-shadow: .1rem .1rem 1rem rgba(0, 0, 0, 0.1);
                        
                        img {
                            width: 100%;
                            height: 15rem;
                            object-fit: cover;
                            object-position: bottom;
                        }

                        &_stats {
                            bottom: 0;
                            width: 100%;
                            display: flex;
                            position: absolute;
                            padding: .5rem 1rem;
                            justify-content: space-around;
                            background: linear-gradient(10deg, $gray-100 0%, $white 100%);
        
                            span {
                                font-weight: bold;
                                font-size: 1rem;
                                color: $gray-500;
                            }
                        }
                    }

                    &:hover {
                        h4 {
                            color: $gray-400;
                        }

                        h5 {
                            color: $p-500;
                        }

                        .home_header_highlights_card_img {
                            outline: solid .3rem $p-500;
                        }

                        
                    }
                }
            }
        }

        &_razoes {
            display: flex;
            flex-direction: column;
            margin: 6rem 0;

            @include md {
                margin: 8rem 0;
            }

            &_text {
                text-align: right;
                margin-bottom: 2rem;

                @include lg {
                    padding-left: 26rem;
                }

                h1 {
                    color: $p-600;
                    line-height: 1;
                    margin: 1rem 0;
                    font-weight: 700;
                    font-size: 3rem;
                    word-spacing: -0.5rem;
                }

                p {
                    font-size: 2.4rem;
                    font-family: $ff-s;
                    color: $gray-400;
                }

                h3 {
                    font-size: 1.8rem;
                    font-weight: 700;
                    color: $gray-500;
                }
            }

            &_cards {
                gap: 2rem;
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                margin: 4rem 0 0 0;

                @include sm-up {
                    flex-wrap: nowrap;
                }

                &_card {
                    width: 15rem;
                    height: 15rem;
                    flex: 1 1 auto;
                    display: flex;
                    padding: 0 2rem;
                    align-items: center;
                    flex-direction: column;
                    justify-content: flex-start;

                    svg {
                        height: 6rem;
                        margin-bottom: 1.5rem;
                        fill: $p-600;
                        border-bottom: solid .5rem $p-600;
                        padding: 0 0 1rem 0;
                    }

                    h3 {
                        font-size: 1.6rem;
                        font-weight: bold;
                        text-align: center;
                        color: $gray-400;
                    }

                    &:hover {
                        svg {
                            fill: $p-500;
                            border-bottom: solid .5rem $p-500;
                        }

                        h3 {
                            color: $gray-500;
                        }
                    }
                }
            }
        }

        &_blog {
            @include sm-up {
                display: flex;
                gap: 1rem;
            }

            @include md {
                gap: 3rem;
            }

            &_card {
                margin: 4rem 0;
                gap: 0.5rem;
                display: flex;
                flex-direction: column;

                @include sm-up {
                    margin: 0;
                }

                &_title {
                    text-align: left;
                    font-weight: bold;
                    margin: 1rem 0 0 0;
                    padding: .5rem 1rem;
                    border-left: solid $p-600 .8rem;

                    h5 {
                        font-size: 1.4rem;
                        color: $gray-500;
                        margin-bottom: .5rem;
                    }

                    h4 {
                        font-size: 2.4rem;
                        line-height: 1;
                        color: $p-600;
                    }
                }

                img {
                    height: 18rem;
                    object-fit: cover;
                    box-shadow: .1rem .1rem 1rem rgba(0, 0, 0, 0.1);
                }

                &:hover {
                    div {
                        border-left: solid $p-500 .8rem;
                    }

                    img {
                        outline: solid .4rem $p-500;
                    }

                    h4 {
                        color: $p-500;
                    }

                    h5 {
                        color: $gray-400;
                    }
                }
            }
        }
    }
</style>