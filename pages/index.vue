<template>
  <div>
    <Header />
    <Reason />
    <div class="blog">
        <div class="blog_cards">
            <div class="blog_cards_card">
                <nuxt-link to="/sobre" class="blog_cards_card_main">
                    <nuxt-img format="webp" src="/img/avenida.jpg" />
                </nuxt-link>
                <div class="blog_cards_card_title">
                    <h5>Avenida Veículos</h5>
                    <h4>Conheça nossa história de sucesso!</h4>
                </div>
            </div>
            <div class="blog_cards_card">
                <nuxt-link to="/sobre" class="blog_cards_card_main">
                    <nuxt-img format="webp" src="/img/avenida.jpg" />
                </nuxt-link>
                <div class="blog_cards_card_title">
                    <h5>Avenida Veículos</h5>
                    <h4>Conheça nossa história de sucesso!</h4>
                </div>
            </div>
            <div class="blog_cards_card">
                <nuxt-link to="/sobre" class="blog_cards_card_main">
                    <nuxt-img format="webp" src="/img/avenida.jpg" />
                </nuxt-link>
                <div class="blog_cards_card_title">
                    <h5>Avenida Veículos</h5>
                    <h4>Conheça nossa história de sucesso!</h4>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<style lang="scss">

.blog {
    margin: 0 auto;
    max-width: 120rem;

    h1 {
        color: $p-600;
        font-size: 2.4rem;
        font-weight: 700;
        text-align: center;
        margin-bottom: 1rem;
        margin-top: 4rem;
    }

    &_cards {
        padding: 0 2rem;

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

</style>