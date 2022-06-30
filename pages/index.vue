<template>
    <div class="home">
        <section class="home_banner">
            <div></div>
            <nuxt-img format="webp" src="/office/office8.jpg" />
        </section>
        <div class="home_content">
            <section class="home_content_header">
                <header>
                    <nuxt-link to="/estoque">
                        <div>
                            <IconsArrow />
                        </div>
                        <span>Confira nosso estoque</span>
                    </nuxt-link>
                </header>
                <div class="home_content_header_highlights">
                    <nuxt-link :to="`/estoque/${value.id}`" v-for="value in car" :key="value.id" class="home_content_header_highlights_card">
                        
                        <div class="home_content_header_highlights_card_img">
                            <img :src="value.fotos.imagem[0]" />
                        </div>
                        <h4>{{ value.marca_descricao }}</h4>
                        <h5>{{ value.modelo_descricao }}</h5>
                        <div class="home_content_header_highlights_card_stats">
                            <span>{{ value.ano_fabricacao_descricao }}</span>
                            <span>-</span>
                            <span>{{ value.combustivel_descricao | gas }}</span>
                            <span>-</span>
                            <span>{{ value.valor_final | price }}</span>
                        </div>
                    </nuxt-link>
                </div>
            </section>
            <section class="home_content_razoes">
                <div class="home_content_razoes_text">
                    <h2>COMPRA CERTA</h2>
                    <h1>Benefícios de comprar com a Avenida veículos</h1>
                    <p>Atuando no mercado automobilístico, nós da Avenida Veículos buscamos auxiliar nossos clientes afim de
                        encontrar o melhor negócio, agindo como consultores, não somente como simples vendedores.</p>
                </div>
                <div class="home_content_razoes_cards">
                    <nuxt-link to="/serviços" class="home_content_razoes_cards_card">
                            <iconsShield />
                            <h3>Garantia de até um ano</h3>
                    </nuxt-link>
                    <nuxt-link to="/serviços" class="home_content_razoes_cards_card">
                            <iconsDeal />
                            <h3>Financiamento rápido que cabe no seu bolso</h3>
                    </nuxt-link>
                    <nuxt-link to="/serviços" class="home_content_razoes_cards_card">
                            <iconsGift />
                            <h3>Compre e receba em casa como presente</h3>
                    </nuxt-link>
                    <nuxt-link to="/serviços" class="home_content_razoes_cards_card">
                            <iconsTool />
                            <h3>Carros com certificados de qualidade</h3>
                    </nuxt-link>
                </div>
            </section>
            <section class="home_content_blog">
                <nuxt-link to="/sobre" class="home_content_blog_card">
                    <div class="home_content_blog_card_img">
                        <nuxt-img format="webp" src="/office/office0.jpg" />
                    </div>
                    <div class="home_content_blog_card_title">
                        <h5>Avenida Veículos</h5>
                        <h4>Conheça nossa história de sucesso!</h4>
                    </div>
                </nuxt-link>
                <nuxt-link :to="`/blog/${value.slug}`" v-for="value in blog" :key="value.id" class="home_content_blog_card">
                    <div class="home_content_blog_card_img">
                        <nuxt-img format="webp" :src="value.banner"/>
                    </div>
                    <div class="home_content_blog_card_title">
                        <h5>{{ value.tag }}</h5>
                        <h4>{{ value.titulo }}</h4>
                    </div>
                </nuxt-link>
            </section>
        </div>
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
        async asyncData({ $axios, $content }) {
            const blog = await $content("blog").fetch();
            const xml = await $axios.$get()
            const cars = await parser.parseStringPromise(xml)
                .then(function (res) {
                    return res.veiculo
                })
            return { 
                cars,
                blog
            }
        }
    }
</script>

<style lang="scss">
    .home {
        padding: 0 !important;
        
        &_banner {
            height: 50vh;
            
            img {                
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: center;
            }
        }

        &_content {
            max-width: 120rem;
            margin: 0 auto;

            &_header {
                margin: -20rem 0 0 0;
                padding: 0 1.5rem;

                @include md {
                    padding: 0 6rem;
                }
                
                
                header {
                    a {
                        display: flex;
                        align-items: center;
                        margin: 2rem 0;
            
                        &:hover {
                            span {
                                color: $gray-100;
                            }
            
                            div {
                                outline: 0.2rem solid $gray-600;
                                outline-offset: 0.2rem;
                                background-color: $gray-600;
                            }
                        }
            
                        span {
                            font-size: 1.8rem;
                            font-weight: bold;
                            color: $gray-100;
                        }
            
                        div {
                            padding: 1.2rem;
                            margin-right: 1rem;
                            background-color: $gray-100;
            
                            svg {
                                fill: $gray-500;
                            }
                        }
                    }
                }
            
                &_highlights {
                    gap: 1rem;
                    display: flex;
                    flex-wrap: wrap;
                    margin: 0 0 2rem 0;
    
                    @include sm-up {
                        flex-wrap: nowrap;
                    }
    
                    @include md {
                        gap: 4rem 3rem;
                    }
            
                    &_card {
                        flex: 1 1 auto;
                        background-color: $white;
                        border-radius: .2rem;
                        padding: 1rem;
                        width: 45%;
    
                        h4 {
                            color: $gray-500;
                            font-size: 1.2rem;
                        }
        
                        h5 {
                            font-size: 2.8rem;
                            color: $p-700;
                        }
            
                        &_img {
                            overflow: hidden;
                            position: relative;
                            margin: 0 0 1rem 0;
                            box-shadow: .1rem .1rem 1rem rgba(0, 0, 0, 0.1);
                            height: 12rem;
                            
                            img {
                                width: 100%;
                                height: 100%;
                                object-fit: cover;
                                object-position: center;
                            }
    
                        }
    
                        &_stats {
                            width: 100%;
                            display: flex;
                            justify-content: space-between;
                            margin: 1rem 0 0 0;
    
                            background-size: 1000% 1000%;
                            animation: Color 2s ease-in-out infinite;
        
                            span {
                                font-weight: bold;
                                font-size: 1rem;
                                color: $gray-500;
                            }
                        }
    
                        &:hover {
    
                            h5 {
                                color: $gray-800;
                            }
    
                            img {
                                animation: scaling 1s both;
                            }
    
                            .home_header_highlights_card_stats {
                                background: linear-gradient(90deg, $gray-600 0%, $gray-700 100%);
                            }
    
                            
                        }
                    }
                }

                h1 {
                    font-size: 2rem;
                    color: $gray-700;
                }
            }
    
            &_razoes {
                display: flex;
                flex-direction: column;
                margin: 10rem 0;
                padding: 0 1.5rem;
    
                @include md {
                    margin: 14rem 0;
                    padding: 0 2rem;
                }
    
                &_text {
                    text-align: right;
                    margin-bottom: 2rem;
    
                    @include lg {
                        padding-left: 26rem;
                    }
    
                    h1 {
                        color: $gray-700;
                        font-size: 3rem;
                        margin: .5rem 0 1rem 0;
                    }
    
                    h2 {
                        font-size: 2rem;
                        color: $gray-600;
                    }
    
                    p {
                        font-size: 2rem;
                        font-family: $ff-s;
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
                            fill: $gray-600;
                            border-bottom: solid .5rem $gray-400;
                            padding: 0 0 1rem 0;
                        }
    
                        h3 {
                            font-size: 1.6rem;
                            font-weight: bold;
                            text-align: center;
                            color: $gray-600;
                        }
    
                        &:hover {
                            svg {
                                fill: $gray-700;
                                border-bottom: solid .5rem $gray-700;
                            }
                        }
                    }
                }
            }
    
            &_blog {
                padding: 0 1.5rem 4rem 1.5rem;
    
                @include sm-up {
                    display: flex;
                    justify-content: space-between;
                    gap: 1rem;
                }
    
                @include md {
                    gap: 3rem;
                    padding: 0 2rem 14rem 2rem;
                }
    
                &_card {
                    margin: 4rem 0;
                    display: flex;
                    flex-direction: column;
    
                    @include sm-up {
                        margin: 0;
                        width: 25rem;
                    }
    
                    @include md {
                        width: 38rem;
                    }
    
                    &_title {
                        text-align: left;
                        font-weight: bold;
                        margin: 1rem 0 0 0;
                        padding: .5rem 1rem;
                        border-left: solid $gray-400 .8rem;
    
                        h5 {
                            font-size: 1.4rem;
                            color: $gray-500;
                            margin-bottom: .5rem;
                        }
    
                        h4 {
                            font-size: 2.2rem;
                            line-height: 1;
                            color: $gray-600;
                        }
                    }
    
                    &_img {
                        height: 18rem;
                        overflow: hidden;
                        box-shadow: .1rem .1rem 1rem rgba(0, 0, 0, 0.1);
    
                        img {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }
                    }
    
    
                    &:hover {
                        .home_blog_card_title {
                            border-left: solid $gray-700 .8rem;
                        }
    
                        img {
                            outline: solid .4rem $gray-700;
                            animation: scaling 1s both;
                        }
    
                        h4 {
                            color: $gray-700;
                        }
                    }
                }
            }
        }

    }
</style>