<template>
    <header class="header">
        <div class="header_text">
            <h3>INDAIATUBA - SP</h3>
            <h1 class="animatedFill">Tudo começa com um sonho, mas aqui a gente te ajudar a realizar</h1>
            <p>Vamos juntos achar um veículo perfeito para você</p>
            <nuxt-link to="/estoque">
                <div class="animatedFill">
                    <IconsArrow />
                </div>
                <span>Confira nosso estoque</span>
            </nuxt-link>
        </div>
        <div class="header_card">
            <div class="header_card_main">
                <h5>Avenida Veículos</h5>
                <h4>Conheça a história de sucesso!</h4>
            </div>
            <div class="header_card_media">
                <div class="header_card_media_youtube"><IconsYoutube class="header_card_media_youtube"/></div>
                <div class="header_card_media_instagram"><IconsInstagram class="header_card_media_instagram"/></div>
                <div class="header_card_media_maps"><IconsWhatsapp class="header_card_media_maps"/></div>
            </div>
        </div>
    </header>
</template>

<style lang="scss">
    .header {
        display: flex;
        flex-direction: column;
        padding: 2rem 1.4rem;
        max-width: 120rem;
        margin-top: 4rem;

        @include sm-up {
            padding: 2rem;
            flex-direction: row;
        }

        &_text {
            margin-bottom: 3rem;
            max-width: 50rem;

            h1 {
                line-height: 1;
                margin: 1rem 0;
                font-weight: 700;
                font-size: 3.8rem;
                word-spacing: -0.5rem;
                
                color: transparent;
                background-clip: text;
            }

            p {
                font-size: 2.6rem;
                font-family: $ff-s;
                font-weight: 400;
                color: $cream-300;
            }

            h3 {
                font-size: 2rem;
                font-weight: 700;
                color: $s-400;
            }

            a {
                display: flex;
                align-items: center;
                font-size: 1.6rem;
                font-weight: 600;
                color: $p-700;
                margin-top: 2rem;

                &:hover {
                    color: $p-500;

                    div {
                        background-color: $p-500;
                    }
                }

                div {
                    margin-right: 1rem;
                    padding: 1rem;

                    svg {
                        fill: $p-200;
                    }
                }
            }
        }

        &_card {
            display: flex;
            justify-content: flex-end;
            width: 100%;

            &_main {
                display: flex;
                padding: 2rem;
                flex-direction: column;
                justify-content: flex-end;
                background: linear-gradient(45deg, $p-600 0%, $p-500 100%);
                text-align: right;
                margin-bottom: 0.5rem;
    
                h5 {
                    margin-top: 16rem;
                    font-size: 1.6rem;
                    font-weight: 700;
                    color: $p-300;
                    margin-bottom: 1rem;
                }
    
                h4 {
                    font-size: 3rem;
                    font-weight: 800;
                    line-height: 1;
                    color: $p-100;
                }
            }
    
            &_media {
                display: flex;
                flex-direction: column;
                margin-left: 0.5rem;
                height: 100%;

                div {
                    display: flex;
                    height: 5rem;
                    width: 5rem;

                    svg {
                        display: block;
                        margin: auto;
                        height: 2rem;
                        fill: $gray-100;
                    }
                }
    
                &_youtube {
                    width: 100%;
                    background: linear-gradient(45deg, $s-500 0%, $s-600 100%);
                }
    
                &_instagram {
                    width: 100%;
                    margin: 0.5rem 0;
                    background: linear-gradient(45deg, $s-300 0%, $s-400 100%);
                }
    
                &_maps {
                    width: 100%;
                    background: linear-gradient(45deg, $p2-500 0%, $p2-600 100%);
                }
            }
        }

    }
</style>