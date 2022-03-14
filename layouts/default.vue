<template>
    <div class="site">
        <Nav />
        <Nuxt class="content"/>
        <div class="blog">
            <h1>VISITE NOSSO BLOG</h1>
            <div class="blog_cards">
                <div class="blog_cards__card">
                    <div>
                    </div>
                </div>
                <div class="blog_cards__card">
                    <div>
                    </div>
                </div>
                <div class="blog_cards__card">
                    <div>
                    </div>
                </div>
            </div>
        </div>
        <footer>
            <div class="infos">
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
            </div>
            <IconsLogo class="logo"/>
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
    display: flex;
    flex-direction: column;
    margin: 4rem 0;

    h1 {
        color: $p-500;
        font-size: 2.4rem;
        font-weight: 700;
        text-align: center;
        margin-bottom: 1rem;
    }

    &_cards {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 2rem;

        @include sm-up {
            flex-direction: row;
            justify-content: space-evenly;
        }

        &__card {
            height: 25rem;

            &:nth-child(2) {
                margin: 2rem 0;
            }

            img {
                width: 100%;
                height: 100%;
                position: absolute;
                object-fit: cover;
            }

            div {
                background-color: $p-500;
                background: linear-gradient(45deg, $p-500 0%, $p-600 100%);
                height: 100%;

                h4 {
                    position: absolute;
                    bottom: 0;
                    font-size: 2rem;
                    font-weight: 700;
                    color: $p-100;
                    text-align: center;
                    padding: 2rem;

                    &:hover {
                        color: $p-200;
                    }
                }
            }                 
        }
    }
}

footer {
    padding: 4rem 2rem 1rem 2rem;
    background: linear-gradient(45deg, $p-600 0%, $p-700 100%);

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
                color: $p-200;
                margin-bottom: 2rem;
            }
    
            a {
                font-size: 1.8rem;
                margin: 0.6rem 0;
                color: $p-400;
            }
    
            .social {
                flex-direction: row;
    
                svg {
                    width: 2.2rem;
                    fill: $p-400;
    
                    &:nth-child(2) {
                        margin: 0 1rem;
                    }
                }
            }
        }
    }


    .logo {
        height: 5rem;
        display: block;
        margin: auto;
        filter: grayscale(100%) invert(100%) opacity(0.4);

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
            background-color: $p-500;
            margin: 1rem 0;
        }
    
        p {
            font-weight: 400;
            font-size: 1.4rem;
            color: $p-500;
        }

    }
}

</style>