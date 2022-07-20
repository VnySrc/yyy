<template>
    <div class="home">
        <header class="home_header">
            <nuxt-link to="/estoque" class="home_header_btn">
                <div>
                    <IconsArrow />
                </div>
                <span>Confira nosso estoque</span>
            </nuxt-link>
            <div class="home_header_highlights">
                <nuxt-link :to="`/estoque/${value.id}`" v-for="value in car" :key="value.id" class="home_header_highlights_card">
                    <div class="home_header_highlights_card_img">
                        <img :src="value.fotos.imagem[0]" />
                    </div>
                    <h4>{{ value.marca_descricao }}</h4>
                    <h5>{{ value.modelo_descricao }}</h5>
                    <div class="home_header_highlights_card_stats">
                        <span>{{ value.ano_fabricacao_descricao }} / {{ value.ano_modelo_descricao }}</span>
                        <span>{{ value.combustivel_descricao | gas }}</span>
                        <span>{{ value.kilometragem | km }}</span>
                    </div>
                </nuxt-link>
            </div>
        </header>
        <section class="home_razoes">
            <div class="home_razoes_text">
                <h2>COMPRA CERTA</h2>
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
        <section class="home_clients">
            <div class="home_clients_text">
                <h2>Confira a opinião de alguns de nossos clientes</h2>
                <p>Cerca de 80% de nossos clientes chegam através de recomendação direta. Por isso nos focamos em um atendimento personalizado, para que clientes satisfeitos tragam mais clientes.</p>
            </div>
            <div class="home_clients_persons">
                <div class="home_clients_persons_person">
                    <div class="home_clients_persons_person_img">
                        <nuxt-img format="webp" src="/people/person.jpg" />
                    </div>
                    <div class="home_clients_persons_person_info">
                        <h4>⭐⭐⭐⭐⭐</h4>
                        <h3>Flávio Santos</h3>
                        <p>"Atendimento excelente! E carros com procedência já é o terceiro carro que compro com eles, Renato e Eric estão de PARABÉNS!"</p>
                    </div>
                </div>
                <div class="home_clients_persons_person">
                    <div class="home_clients_persons_person_img">
                        <nuxt-img format="webp" src="/people/person1.jpg" />
                    </div>
                    <div class="home_clients_persons_person_info">
                        <h4>⭐⭐⭐⭐⭐</h4>
                        <h3>Carol Corrêa</h3>
                        <p>"Ambiente excelente, organizado, bem higienizado, com atendimento atencioso, valores e condições de compra dentro de uma realidade. Recomendado!"</p>
                    </div>
                </div>
                <div class="home_clients_persons_person">
                    <div class="home_clients_persons_person_img">
                        <nuxt-img format="webp" src="/people/index.jpg" />
                    </div>
                    <div class="home_clients_persons_person_info">
                        <h4>⭐⭐⭐⭐⭐</h4>
                        <h3>Júlio Rocha</h3>
                        <p>"Bom diaa... Gostaria de agradecer todo o empenho, profissionalismo, respeito e seriedade com que vocês realizam seus trabalhos. Depois que falei com vocês, a determinação em nos ajudar a resolver  trouxe paz e tranquilidade. Obg"</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="home_blog">
            <div class="home_blog_text">
                <h2>Confira os artigos do blog</h2>
                <p>Pensando em você criamos com exclusividade artigos com as últimas novidades do mundo automotivo e dicas de cuidados com o veículo.</p>
            </div>
            <div class="home_blog_cards">
                <nuxt-link to="/sobre" class="home_blog_cards_card">
                    <div class="home_blog_cards_card_img">
                        <nuxt-img format="webp" src="/office/office7.jpg" />
                    </div>
                    <div class="home_blog_cards_card_title">
                        <h5>Avenida Veículos</h5>
                        <h4>Conheça nossa história de sucesso!</h4>
                    </div>
                </nuxt-link>
                <nuxt-link :to="`/blog/${value.slug}`" v-for="value in blog" :key="value.id" class="home_blog_cards_card">
                    <div class="home_blog_cards_card_img">
                        <nuxt-img format="webp" :src="value.banner"/>
                    </div>
                    <div class="home_blog_cards_card_title">
                        <h5>{{ value.tag }}</h5>
                        <h4>{{ value.titulo }}</h4>
                    </div>
                </nuxt-link>
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
            gas(value) {
                if ( value === `Gasolina e álcool` ) {
                    return `Flex`
                } else { return value }
            },
            price(value) {
                return Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
            },
            km(value) {
                return Intl.NumberFormat("pt-BR", {
                    style: "unit",
                    unit: "kilometer",
                }).format(value);
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
        max-width: 120rem;
        margin: 0 auto;

        &_header {
            @include md {
                padding: 6rem 0 0 0;
            }

            @include bg {
                padding: 12rem 0 0 0;
            }

            &_btn {
                display: flex;
                margin: 2rem 0;
                width: fit-content;
                align-items: center;
    
                span {
                    font-size: 2rem;
                    font-weight: bold;
                    color: $gray-100;
                }
    
                div {
                    padding: 1.2rem;
                    margin-right: 1.5rem;
                    border-radius: .5rem;
                    background-color: $gray-100;
    
                    svg {
                        fill: $gray-400;
                    }
                }

                &:hover {
                    span {
                        filter: brightness(1.2);
                    }

                    svg {
                        fill: $p-600;
                    }
    
                    div {
                        outline: 0.2rem solid $gray-200;
                        outline-offset: 0.4rem;
                        filter: brightness(1.2);
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
                    gap: 2rem;
                }
        
                &_card {
                    padding: 1rem;
                    flex: 1 1 auto;
                    text-align: center;
                    width: 15rem;
                    border-radius: .5rem;
                    box-shadow: .1rem .1rem 1rem rgba(0, 0, 0, 0.1);
                    background: linear-gradient(45deg, $gray-100 0%, $gray-200 100%);

                    h4 {
                        color: $gray-500;
                        font-weight: 400;
                        font-size: 1.4rem;
                    }
    
                    h5 {
                        font-size: 2.6rem;
                        color: $gray-600;
                    }
        
                    &_img {
                        overflow: hidden;
                        position: relative;
                        border-radius: .5rem;
                        margin: 0 0 1rem 0;
                        height: 12rem;

                        @include md {
                            height: 16rem;
                        }
                        
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
                        margin: .5rem 0 0 0;
                        padding: 1rem 0 0 0;
                        border-top: solid $gray-300 .2rem;
                        justify-content: space-around;

                        background-size: 1000% 1000%;
                        animation: Color 2s ease-in-out infinite;
    
                        span {
                            font-weight: bold;
                            font-size: 1rem;
                            color: $gray-400;
                        }
                    }

                    &:hover {

                        h5 {
                            color: $p-600;
                        }

                        img {
                            animation: scaling 1s both;
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

            @include md {
                margin: 14rem 0;
            }

            &_text {
                text-align: right;
                margin-bottom: 2rem;

                @include lg {
                    padding-left: 26rem;
                }

                h1 {
                    color: $p-600;
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
                gap: 1rem;
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                margin: 4rem 0 0 0;

                @include sm-up {
                    flex-wrap: nowrap;
                }

                &_card {
                    flex: 1 1 auto;
                    width: 15rem;
                    display: flex;
                    padding: 4rem 1rem;
                    align-items: center;
                    flex-direction: column;
                    justify-content: space-around;
                    border-radius: .5rem;
                    background: linear-gradient(45deg, $gray-100 0%, $gray-200 100%);
                    box-shadow: .1rem .1rem 1rem rgba(0, 0, 0, 0.1);


                    svg {
                        height: 8rem;
                        margin-bottom: 1.5rem;
                        fill: $p-600;
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
                        }
                    }
                }
            }
        }

        &_clients {
            margin: 0 0 10rem 0;

            &_text {
                text-align: left;
                margin-bottom: 6rem;

                @include lg {
                    padding-right: 26rem;
                }

                h2 {
                    font-size: 2rem;
                    color: $gray-600;
                    margin: 0 0 1rem 0;
                }

                p {
                    font-size: 2rem;
                    font-family: $ff-s;
                    color: $gray-500;
                }
            }

            &_persons {
                gap: 2rem;
                display: flex;
                flex-direction: column;
            
                @include sm-up {
                    flex-direction: row;
                    align-content: space-between;
                    justify-content: space-around;

                    &_person {
                        width: 30rem;
                    }
                }

                &_person {
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    &_img {
                        width: 15rem;
                        overflow: hidden;
                        border-radius: 50%;
                        box-shadow: .2rem .2rem 1rem rgba(0, 0, 0, 0.1);

                        img {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }
                    }

                    &_info {
                        text-align: center;
                        padding: 2rem;

                        h4 {
                            font-size: 1.4rem;
                        }

                        h3 {
                            font-size: 2rem;
                            margin: 1rem 0;
                            color: $p-600;
                        }

                        p {
                            font-size: 1.4rem;
                            color: $gray-600;
                            font-family: $ff-s;
                        }
                    }
                }
            }

        }

        &_blog {
            &_text {
                text-align: right;
                margin-bottom: 6rem;

                @include lg {
                    padding-left: 26rem;
                }

                h2 {
                    font-size: 2rem;
                    color: $gray-600;
                    margin: 0 0 1rem 0;
                }

                p {
                    font-size: 2rem;
                    font-family: $ff-s;
                    color: $gray-500;
                }
            }

            &_cards {
                @include sm-up {
                    display: flex;
                    justify-content: space-between;
                    gap: 1rem;
                }

                @include md {
                    gap: 3rem;
                }

                &_card {
                    margin: 2rem 0;
                    display: flex;
                    flex-direction: column;
                    padding: 1rem;
                    border-radius: .5rem;
                    background: linear-gradient(45deg, $gray-100 0%, $gray-200 100%);

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
                            color: $s-400;
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
                        border-radius: .5rem;
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