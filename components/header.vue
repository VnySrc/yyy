<template>
    <header class="header">
        <div class="header_text">
            <h3>INDAIATUBA - SP</h3>
            <h1>Tudo começa com um sonho, mas aqui a gente te ajudar a realizar</h1>
            <p>Vamos juntos achar um veículo perfeito para você</p>
            <nuxt-link to="/estoque">
                <div>
                    <IconsArrow />
                </div>
                <span>Confira nosso estoque</span>
            </nuxt-link>
        </div>
        <div class="header_card">
            <nuxt-link to="/sobre" class="header_card_main">
                <div class="imageFilter">
                    <h5>Avenida Veículos</h5>
                    <h4>Conheça a história de sucesso!</h4>
                </div>
                <nuxt-img format="webp" src="/img/avenida.jpg" />
            </nuxt-link>
            <div class="header_card_media">
                <div class="header_card_media_youtube"><IconsYoutube /></div>
                <div class="header_card_media_instagram"><IconsInstagram /></div>
                <div class="header_card_media_whatsapp"><IconsWhatsapp /></div>
                <div class="header_card_media_tiktok"><IconsTiktok /></div>
            </div>
        </div>
        <highlights />
    </header>
</template>

<style lang="scss">
    .header {
        padding: 2rem 1.4rem;
        max-width: 120rem;
        margin-top: 4rem;

        @include sm-up {
            display: flex;
            padding: 2rem;
            flex-wrap: wrap;
            justify-content: space-between;
        }

        &_text {
            margin-bottom: 3rem;
            max-width: 50rem;

            @include sm-up {
                flex-basis: 50%;
                margin-bottom: 0;
            }

            h1 {
                line-height: 1;
                margin: 1rem 0;
                font-weight: 700;
                font-size: 3.8rem;
                word-spacing: -0.5rem;
                
                color: $p-500;
            }

            p {
                font-size: 2.6rem;
                font-family: $ff-s;
                color: $gray-500;
            }

            h3 {
                font-size: 2rem;
                font-weight: 700;
                color: $s-400;
            }

            a {
                display: flex;
                align-items: center;
                padding: 0.5rem;
                margin-top: 2rem;
                width: auto;

                &:hover {
                    filter: brightness(1.2);

                    div {
                        outline: 0.2rem solid $p-500;
                        outline-offset: 0.2rem;
                    }
                }

                span {
                    font-size: 1.6rem;
                    font-weight: 600;
                    color: $p-600;
                }

                div {
                    background-color: $p-500;
                    margin-right: 1rem;
                    padding: 1rem;

                    svg {
                        fill: $p-100;
                    }
                }
            }
        }

        &_card {
            gap: 0.5rem;
            display: flex;
            align-content: flex-end;
            height: 100%;

            @include sm-up {
                flex-basis: 50%;
                flex-direction: column-reverse;
                align-items: flex-end;
                padding-left: 4rem;
            }

            @include md {
                flex-direction: row;
            }

            &_main {
                display: flex;
                position: relative;
                overflow: hidden;
                flex-direction: column;
                text-align: right;

                div {
                    padding: 2rem;
                    z-index: 2;
                    text-shadow: .1rem .1rem 1rem $p-900;

                    h5 {
                        margin-top: 16rem;
                        font-size: 1.6rem;
                        font-weight: 700;
                        color: $p-400;
                        margin-bottom: 1rem;
                    }
        
                    h4 {
                        font-size: 3rem;
                        font-weight: 800;
                        line-height: 1;
                        color: $gray-100;
                    }
                }
    

                img {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    filter: saturate(1.2)
                            contrast(1.2);
                }
            }
    
            &_media {
                display: flex;
                flex-direction: column;
                align-self: flex-end;
                gap: 0.5rem;

                @include sm-up {
                    flex-direction: row;
                }

                @include md {
                    flex-direction: column;
                }

                div {
                    display: flex;
                    height: 5rem;
                    width: 5rem;
                    cursor: pointer;

                    &:hover {
                        filter: brightness(1.2);
                    }

                    svg {
                        display: block;
                        margin: auto;
                        height: 2rem;
                        fill: $gray-100;
                    }
                }
    
                &_youtube {
                    width: 100%;
                    background: linear-gradient(45deg, $s-400 0%, $s-600 100%);
                }
    
                &_instagram {
                    width: 100%;
                    background: linear-gradient(45deg, $s-300 0%, $s-400 100%);
                }
    
                &_whatsapp {
                    width: 100%;
                    background: linear-gradient(45deg, $p2-500 0%, $p2-600 100%);
                }

                &_tiktok {
                    width: 100%;
                    background: linear-gradient(45deg, $gray-600 0%, $gray-800 100%);
                }
            }
        }
    }
</style>