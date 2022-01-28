<template>
    <div>
        <nav>
            <IconsLogo />
            <div>
                <nuxt-link to="/">Home</nuxt-link>
                <nuxt-link to="/estoque">Estoque</nuxt-link>
                <nuxt-link to="/service">Serviços</nuxt-link>
                <nuxt-link to="/blog">Blog</nuxt-link>
            </div>
            <button><a target="_blank" href="https://avenidaveiculosindaiatuba.com.br/Anuncio/Contato">CONTATO</a></button>
        </nav>
        <Nuxt />
        <div class="blog">
            <h1>VISITE NOSSO BLOG</h1>
            <div class="blog_cards">
                <div class="blog_cards__card"></div>
                <div class="blog_cards__card"></div>
                <div class="blog_cards__card"></div>
            </div>
        </div>
        <footer>
            <div class="links">
                <h4>Links</h4>
                <a href="">Termos e condições de uso</a>
                <a href="">Contato por email</a>
                <a href="">Cadastre seu pedido</a>
                <a href="">Sobre a empresa</a>
            </div>
            <div class="contato">
                <h4>Entre em contato</h4>
                <a href="">Loja - (19) 3835-0800</a>
                <a href="">(19) 99309-1270</a>
                <div class="social">
                    <IconsWhatsapp />
                    <IconsInstagram />
                    <IconsFacebook />
                </div>
            </div>
            <IconsLogo class="logo"/>
            <div class="infos">
                <span>Av. Visconde de Indaiatuba, 921 , Vila Vitòria 1 - Indaiatuba/SP</span>
                <div></div>
                <p>Todos os direitos reservados @2022</p>
            </div>
        </footer>
    </div>
</template>

<style lang="scss">

nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 4rem;
    width: 100%;

    svg {
        height: 5.5rem;
        margin: 4rem 0;

        &:hover {
            filter: brightness(2);
        }
    }

    div {
        display: flex;
        gap: 4rem;
        justify-content: center;

        a {
            font-family: $ff-primary;
            font-weight: bolder;
            font-size: 1.5rem;
            color: $gray-400;

            &:hover {
                color: $blue-700;
            }
        }
    }

    button {
        display: none;
        border: none;
        text-decoration: none;
        background-color: $blue-700;
        border-radius: 0.5rem;
        height: 4rem;
        
        &:hover {
            background-color: $blue-800;
        }

        @include sm-up {
            display: block;
        }

        a {
            padding: 2.5rem;
            font-size: 1.3rem;
            font-family: $ff-primary;
            font-weight: bolder;
            text-align: center;
            color: $gray-100;
        }
    }
}

.blog {
    display: flex;
    flex-direction: column;
    background-color: $primary;
    padding: 4rem 2rem;

    @include md {
        padding: 6rem 16rem;
    }

    @include bg {
        padding: 6rem 40rem;
    }

    h1 {
        color: $gray-200;
        font-family: $ff-primary;
        font-size: 2.5rem;
        font-weight: bolder;
        text-align: center;
        margin-bottom: 2rem;
    }

    &_cards {
        display: flex;
        flex-direction: column;
        gap: 2rem;

        &__card {
            background-color: $gray-200;
            border-radius: 1rem;
            height: 30rem;
        }
    }
}

footer {
    padding: 4rem 2rem;
    font-family: $ff-primary;
    background-color: $secondary;

    .links,
    .contato {
        display: flex;
        flex-direction: column;
        margin-bottom: 2rem;

        h4 {
            font-weight: 600;
            font-size: 2rem;
            color: $blue-500;
            margin-bottom: 1rem;
        }

        a {
            font-size: 1.6rem;
            margin: 0.5rem 0;
            color: $gray-100;
        }

        .social {
            flex-direction: row;

            svg {
                width: 2rem;
                fill: $blue-300;

                &:nth-child(2) {
                    margin: 0 1rem;
                }
            }
        }
    }

    .logo {
        height: 6rem;
        display: block;
        margin: auto;
        filter: grayscale(100%) invert(100%);

        &:hover {
            filter: none;
        }
    }

    .infos {
        margin-top: 4rem;

        span {
            font-weight: 400;
            font-size: 1.3rem;
            color: $gray-100;
        }
    
        div {
            height: 0.1rem;
            background-color: $gray-100;
            margin: 1rem 0;
        }
    
        p {
            font-weight: 400;
            font-size: 1.2rem;
            color: $gray-100;
        }

    }
}

</style>