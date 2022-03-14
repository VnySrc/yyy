<template>
    <div class="site">
        <Nav />
        <Nuxt class="content"/>
        <div class="blog">
            <h1>VISITE NOSSO BLOG</h1>
            <div class="blog_cards">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <footer>
            <div class="infos">
                <div class="links">
                    <h4>Links</h4>
                    <a href="">Termos e condições de uso</a>
                    <nuxt-link to="/contato">Contato por email</nuxt-link>
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
            </div>
            <IconsLogoFlat class="logoFlat"/>
            <div class="cabeçalho">
                <a target="_blank" href="https://g.page/Avenidaveiculosindaiatuba?share">Av. Visconde de Indaiatuba, 921 , Vila Vitòria 1 - Indaiatuba/SP</a>
                <div></div>
                <p>Todos os direitos reservados @2022</p>
            </div>
        </footer>
    </div>
</template>

<style lang="scss">
.content {
    max-width: 120rem;
    margin: 0 auto;
}

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
        padding: 2rem 1.4rem;
        margin-bottom: 4rem;

        @include sm-up {
            padding: 2rem;
        }

        @include sm-up {
            display: flex;
        }

        div {
            height: 25rem;
            width: 100%;
            background: linear-gradient(45deg, $p-500 0%, $p-600 100%);

            &:nth-child(2) {
                margin: 2rem 0;

                @include sm-up {
                    margin: 0 1rem;
                }
            }                 
        }
    }
}

footer {
    padding: 4rem 2rem 1rem 2rem;
    background: linear-gradient(45deg, $p-600 0%, $p-800 50%, $p-700 100%);
    background-size: 1000% 1000%;
    -webkit-animation: Color 5s ease infinite;
    -moz-animation: Color 5s ease infinite;
    animation: Color 5s ease infinite;

    .infos {
        @include sm-up {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;

            .contato {
                margin-left: 4rem;
            }
        }

        .links,
        .contato {
            display: flex;
            flex-direction: column;
            margin-bottom: 4rem;

            @include lg-up {
                margin-right: 6rem;
            }
    
            h4 {
                font-weight: 600;
                font-size: 2.4rem;
                color: $p-500;
                margin-bottom: 2rem;
            }
    
            a {
                font-size: 1.8rem;
                margin: 0.6rem 0;
                color: $p-200;
            }
    
            .social {
                flex-direction: row;
    
                svg {
                    width: 2.2rem;
                    fill: $p-200;
    
                    &:nth-child(2) {
                        margin: 0 1rem;
                    }
                }
            }
        }
    }


    .logoFlat {
        height: 5rem;
        display: block;
        margin: auto;
        fill: $p-400;

        @include sm-up {
            display: inline;
        }

        &:hover {
            filter: none;
        }
    }

    .cabeçalho {
        margin-top: 4rem;
        text-align: center;

        @include sm-up {
            text-align: right;
            margin-top: 0;
        }

        a {
            font-weight: 500;
            font-size: 1.5rem;
            color: $p-400;

            &:hover {
                color: $p-500;
            }
        }
    
        div {
            height: 0.1rem;
            background-color: $p-400;
            margin: 1rem 0;
        }
    
        p {
            font-weight: 400;
            font-size: 1.4rem;
            color: $p-400;
        }

    }
}

</style>