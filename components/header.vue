<template>
    <header class="header">
        <div class="header_text">
            <h3>INDAIATUBA - SP</h3>
            <h1>Tudo começa com um sonho, mas aqui a gente te ajudar a realizar</h1>
            <p>Vamos juntos achar um veículo perfeito para você</p>
        </div>
        <div class="header_card">
            <div class="header_card_main">
                <h5>Avenida Veículos</h5>
                <h4>Conheça a história de sucesso!</h4>
            </div>
            <div class="header_card_media">
                <div class="header_media_youtube"></div>
                <div class="header_media_instagram"></div>
                <div class="header_media_maps"></div>
            </div>
        </div>
    </header>
</template>

<style lang="scss">
    .header {
        padding: 2rem;
        margin-top: 4rem;
        max-width: 120rem;

        &_text {
            margin-bottom: 4rem;

            h1 {
                color: $p-700;
                line-height: 1;
                margin: 1rem 0;
                font-weight: 700;
                font-size: 3.6rem;
                word-spacing: -0.5rem;
            }

            p {
                font-size: 2.6rem;
                font-weight: 400;
                color: $cream-500;
            }

            h3 {
                font-size: 2rem;
                font-weight: 700;
                color: $s-400;
            }
        }

        &_card {
            &_main {
                display: flex;
                padding: 2rem;
                height: 30rem;
                flex-direction: column;
                justify-content: flex-end;
                margin-bottom: 0.5rem;
                background: linear-gradient(45deg, $p-600 0%, $p-500 100%);
                text-align: right;
    
                h5 {
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
                height: 10rem;
    
                &_youtube {
                    width: 100%;
                    height: 100%;
                    background-color: $s-600;
                }
    
                &_instagram {
                    width: 100%;
                    height: 100%;
                    margin: 0 0.5rem;
                    background-color: $s-400;
                }
    
                &_maps {
                    width: 100%;
                    height: 100%;
                    background-color: $p2-600;
                }
            }
        }

    }
</style>