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
        <highlights />
    </header>
</template>

<style lang="scss">
    .header {
        padding: 2rem 1.4rem;
        max-width: 120rem;
        margin-top: 4rem;

        @include md {
            display: flex;
            justify-content: space-around;
        }

        &_text {
            margin-bottom: 3rem;

            @include md {
                flex-basis: 40%;
                margin-bottom: 0;
                margin-top: 2rem;
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
    }
</style>