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
            <div class="header_card_main">
                <h5>Avenida Veículos</h5>
                <h4>Conheça a história de sucesso!</h4>
            </div>
            <div class="header_card_media">
                <div class="header_card_media_youtube"><IconsYoutube /></div>
                <div class="header_card_media_instagram"><IconsInstagram /></div>
                <div class="header_card_media_whatsapp"><IconsWhatsapp /></div>
                <div class="header_card_media_tiktok"><IconsTiktok /></div>
            </div>
        </div>
        <div class="header_highlights">
            <destaques />
            <destaques />
            <destaques />
            <destaques />
        </div>
    </header>
</template>

<style lang="scss">
    .header {
        padding: 2rem 1.4rem;
        max-width: 120rem;
        margin-top: 4rem;

        @include sm-up {
            display: flex;
            flex-wrap: wrap;
            padding: 2rem;
        }

        &_text {
            margin-bottom: 3rem;
            max-width: 50rem;

            @include sm-up {
                flex-basis: 50%;
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
            display: flex;
            align-items: flex-end;

            @include sm-up {
                flex-basis: 50%;
            }

            &_main {
                display: flex;
                padding: 2rem;
                flex-direction: column;
                background: linear-gradient(45deg, $gray-600 0%, $gray-700 100%);
                text-align: right;
    
                h5 {
                    margin-top: 16rem;
                    font-size: 1.6rem;
                    font-weight: 700;
                    color: $p2-400;
                    margin-bottom: 1rem;
                }
    
                h4 {
                    font-size: 3rem;
                    font-weight: 800;
                    line-height: 1;
                    color: $gray-100;
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
                    cursor: pointer;
                    margin-top: 0.5rem;

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
                    background: linear-gradient(45deg, $s-500 0%, $s-600 100%);
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

        &_highlights {
            gap: 0.5rem;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-top: 0.5rem;
            
            @include sm-up {
                flex-wrap: nowrap;
                flex-basis: 100%;
            }
        }
    }
</style>