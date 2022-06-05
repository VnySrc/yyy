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
                <div v-for="value in car" :key="value.id" class="home_header_highlights_card">
                    <div class="home_header_highlights_card_info">
                        <h4>{{ value.marca_descricao }}</h4>
                        <h5>{{ value.modelo_descricao }}</h5>
                        <div>
                            <span>{{ value.ano_fabricacao_descricao }}</span>
                            <span>{{ value.valor_final | price }}</span>
                        </div>
                    </div>
                    <nuxt-link :to="`/estoque/${value.id}`" class="home_header_highlights_card_img">
                        <img :src="value.fotos.imagem[0]" />
                        <div class="home_header_highlights_card_img_plus">
                            <span>Saiba mais</span>
                            <IconsInfo />
                        </div>
                    </nuxt-link>
                </div>
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
            <div class="home_blog_cards">
                <div class="home_blog_cards_card">
                    <nuxt-link to="/sobre" class="home_blog_cards_card_main">
                        <nuxt-img format="webp" src="/img/avenida.jpg" />
                    </nuxt-link>
                    <div class="home_blog_cards_card_title">
                        <h5>Avenida Veículos</h5>
                        <h4>Conheça nossa história de sucesso!</h4>
                    </div>
                </div>
                <div class="home_blog_cards_card">
                    <nuxt-link to="/sobre" class="home_blog_cards_card_main">
                        <nuxt-img format="webp" src="/img/avenida.jpg" />
                    </nuxt-link>
                    <div class="home_blog_cards_card_title">
                        <h5>Avenida Veículos</h5>
                        <h4>Conheça nossa história de sucesso!</h4>
                    </div>
                </div>
                <div class="home_blog_cards_card">
                    <nuxt-link to="/sobre" class="home_blog_cards_card_main">
                        <nuxt-img format="webp" src="/img/avenida.jpg" />
                    </nuxt-link>
                    <div class="home_blog_cards_card_title">
                        <h5>Avenida Veículos</h5>
                        <h4>Conheça nossa história de sucesso!</h4>
                    </div>
                </div>
            </div>
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

        &_header {
            margin-top: 2rem;

            @include md {
                display: flex;
                justify-content: space-around;
            }

            header {
                max-width: 40rem;
        
                h1 {
                    color: $p-500;
                    line-height: 1.1;
                    font-weight: bold;
                    font-size: 3.2rem;
                    word-spacing: -0.5rem;
                    margin: .5rem 0 2rem 0;
                }
        
                p {
                    font-size: 2.2rem;
                    font-family: $ff-s;
                    color: $gray-500;
                }
        
                h3 {
                    font-size: 2rem;
                    font-weight: bold;
                    color: $s-400;
                }
        
                a {
                    display: flex;
                    align-items: center;
                    margin-top: 2rem;
                    margin-bottom: 4rem;
        
                    &:hover {
                        filter: brightness(1.2);
        
                        div {
                            outline: 0.2rem solid $p-500;
                            outline-offset: 0.2rem;
                        }
                    }
        
                    span {
                        font-size: 1.8rem;
                        font-weight: bold;
                        color: $p-500;
                    }
        
                    div {
                        padding: 1.2rem;
                        margin-right: 1rem;
                        border-radius: .5rem;
                        background-color: $p-500;
        
                        svg {
                            fill: $white;
                        }
                    }
                }
            }
        
            &_highlights {
                display: flex;
                gap: 1rem;
                display: flex;
                flex-wrap: wrap;

                @include md {
                    flex-wrap: wrap;
                    max-width: 48rem;
                    gap: 2rem;
                }
        
                &_card {
                    flex: 1 1 auto;
                    min-width: 15rem;
        
                    overflow: hidden;
                    position: relative;
        
                    &_info {
                        padding-bottom: 1rem;
        
                        h4 {
                            color: $gray-500;
                            font-size: 1.2rem;
                        }
        
                        h5 {
                            font-size: 2.8rem;
                            margin: 0 0 .5rem 0;
                            color: $p-500;
                        }
        
                        span {
                            font-weight: bold;
                            font-size: 1.4rem;
                            color: $gray-300;
        
                            &:nth-child(2) {
                                margin: 0 0.5rem;
                                padding: 0 0.5rem;
                                border-left: solid 0.1rem $gray-400;
                            }
                        }
                    }
        
                    &_img {
                        img {
                            width: 100%;
                            height: 12rem;
                            border-radius: .5rem;
                            border-bottom: solid .8rem $p-500;
                            object-fit: cover;
                        }

                        &_plus {
                            display: flex;
                            margin: 1rem 0 1rem 0;
                            justify-content: flex-end;

                            svg {
                                height: 1.8rem;
                                fill: $gray-300;
                                margin-left: .8rem;
                            }
            
                            span {
                                font-size: 1.4rem;
                                color: $gray-300;
                                font-weight: bold;
                                text-align: center;
                            }
                        }

                        &:hover {
                            img {
                                border-bottom: solid .8rem $p-400;
                            }

                            span, svg {
                                color: $p-400;
                                fill: $p-400;
                            }
                        }
                    }
                }
            }
        }

        &_razoes {
            display: flex;
            flex-direction: column;
            margin-top: 4rem;

            @include sm-up {
                padding: 2rem;
            }

            &_text {
                text-align: right;
                margin-bottom: 2rem;

                @include lg {
                    padding-left: 26rem;
                }

                h1 {
                    color: $p-500;
                    line-height: 1;
                    margin: 1rem 0;
                    font-weight: 700;
                    font-size: 3rem;
                    word-spacing: -0.5rem;
                }

                p {
                    font-size: 2.4rem;
                    font-family: $ff-s;
                    color: $gray-500;
                }

                h3 {
                    font-size: 1.8rem;
                    font-weight: 700;
                    color: $s-400;
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
                        fill: $p-500;
                        border-bottom: solid .5rem $p-500;
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
                            fill: $p-400;
                            border-bottom: solid .5rem $p-400;
                        }

                        h3 {
                            color: $gray-500;
                        }
                    }
                }
            }
        }

        &_blog {
            
            h1 {
                color: $p-600;
                font-size: 2.4rem;
                font-weight: 700;
                text-align: center;
                margin-bottom: 1rem;
                margin-top: 4rem;
            }

            &_cards {

                @include sm-up {
                    display: flex;
                    gap: 1rem;
                    padding: 2rem;
                }

                @include md {
                    gap: 4rem;
                }

                &_card {
                    gap: 0.5rem;
                    margin: 4rem 0;
                    display: flex;
                    flex-direction: column;

                    &_title {
                        margin: 1rem 0;
                        padding: 0 1rem;
                        text-align: left;
                        border-left: solid $p-500 .8rem;

                        h5 {
                            font-size: 1.2rem;
                            font-weight: bold;
                            color: $gray-500;
                            margin-bottom: .5rem;
                        }

                        h4 {
                            font-size: 2.2rem;
                            font-weight: bold;
                            line-height: 1;
                            color: $p-500;
                        }
                    }

                    &_main {
                        display: flex;
                        flex-direction: column;
                        gap: .5rem;

                        height: 20rem;

                        img {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }
                    }
                }
            }
        }
    }
</style>