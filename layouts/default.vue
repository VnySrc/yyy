<template>
    <div class="site">
        <section class="site_banner" v-show="banner === true">
            <nuxt-img format="webp" src="/banner.jpg" />
        </section>
        <nav class="site_nav" :class="{ site_nav_alt: banner }">
            <nuxt-link to="/" class="site_nav_logo"><IconsLogo /></nuxt-link>
            <div class="site_nav_menu">
                <nuxt-link to="/">Home</nuxt-link>
                <nuxt-link to="/estoque">Estoque</nuxt-link>
                <nuxt-link to="/serviços">Serviços</nuxt-link>
                <nuxt-link to="/blog">Blog</nuxt-link>
                <nuxt-link to="/contato" class="site_nav_menu_chat">
                    <IconsChat />
                    <span>Entre em contato</span>
                </nuxt-link>
            </div>
        </nav>
        <Nuxt class="site_content"/>
        <footer>
            <div class="footer">
                <div class="footer_links">
                    <h4>Links</h4>
                    <nuxt-link to="/termos">Termos e condições de uso</nuxt-link>
                    <nuxt-link to="/contato">Contato por email</nuxt-link>
                    <nuxt-link to="/sobre">Sobre a empresa</nuxt-link>
                </div>
                <div class="footer_contato">
                    <h4>Entre em contato</h4>
                    <a href="tel:+551938350800">Loja - (19) 3835-0800</a>
                    <a :href="links.adm" target="_blank">ADM - (19) 99221-4727</a>
                    <a :href="links.vendas" target="_blank">Vendas - (19) 99797-6865</a>
                    <a :href="links.pos" target="_blank">Pós venda - (19) 97822-6748</a>
                    <div class="footer_contato_social">
                        <a :href="links.vendas" target="_blank"><IconsWhatsapp /></a>
                        <a :href="links.face" target="_blank"><IconsFacebook /></a>
                        <a :href="links.insta" target="_blank"><IconsInstagram /></a>
                        <a :href="links.tiktok" target="_blank"><IconsTiktok /></a>
                        <a :href="links.youtube" target="_blank"><IconsYoutube /></a>
                    </div>
                </div>
            </div>
            <nuxt-link to="/" class="logo"><IconsLogo class="logoFlat"/></nuxt-link>
            <div class="cabeçalho">
                <a :href="links.map" target="_blank">Av. Visconde de Indaiatuba, 921 , Vila Vitòria - Indaiatuba/SP</a>
                <div></div>
                <p>Avenida Veiculos Indaiatuba / T. Bella Vitta da Silva Veiculos LTDA - CNPJ 15.358.908/0001-49</p>
                <p>Todos os direitos reservados @2022</p>
            </div>
        </footer>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    computed: {
         ...mapState('links', ['links']),
         banner() {
            if(this.$route.path == "/" || this.$route.path == "/estoque" || this.$route.path == "/servi%C3%A7os" || this.$route.path == "/blog" ) {
                return true
            } else {
                return false
            }
        }
    }
}
</script>

<style lang="scss">
.none {
    display: none;
}

.site {
    font-family: $ff-primary;
        
    &_banner {
        width: 100%;
        z-index: -1;
        height: 50vh;
        position: absolute;

        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
            object-position: bottom;
        }
    }

    &_nav {
        width: 100%;
        display: flex;
        margin: auto;
        flex-direction: column;
        justify-content: center;

        @include md {
            flex-direction: row;
            justify-content: space-between;
            padding: 0 2rem;
        }

        &_logo {
            margin: 2rem 0 6rem 0;

            @include md {
                margin: 2rem 0;
            }

            svg {
                height: 6rem;
                display: block;
                margin: auto;

                &:hover {
                    filter: brightness(1.2);
                }
            }
        }

        &_menu {
            display: flex;
            justify-content: space-evenly;
            align-items: center;

            a {
                font-weight: bold;
                font-size: 1.6rem;
                color: $gray-400;

                @include md {
                    &:nth-child(2n) {
                        margin: 0 4rem;
                    }
                }

                &:hover {
                    color: $gray-600;
                }
            }

            a.nuxt-link-exact-active {
                font-weight: bold;
                color: $gray-700;
            }

            &_chat {
                display: flex;
                justify-content: center;
                align-items: center;
                bottom: 0;
                width: 100%;
                padding: 2rem;
                cursor: pointer;
                position: fixed;
                background: linear-gradient(0deg, $p-700 0%, $p-800 100%);
                z-index: 2;

                @include sm-up {
                    border-radius: .5rem;
                    background: $gray-600;
                    display: block;
                    position: relative;
                    width: auto;
                }

                &.nuxt-link-exact-active {
                    display: none;

                    @include sm-up {
                        color: $gray-500;
                        display: block;
                        outline: 0.2rem solid $gray-500;
                        outline-offset: 0.2rem;
                    }
                }

                &:hover {
                    background-color: $gray-500;

                    @include sm-up {
                        outline: 0.2rem solid $gray-500;
                        outline-offset: 0.2rem;
                    }
                }

                svg {
                    fill: $white;
                    margin-right: 1rem;
                    
                    @include sm-up {
                        display: block;
                        margin: auto; 
                    }
                }

                span {
                    color: $white;

                    @include sm-up {
                        display: none;
                    }
                }
            }
        }

        &_alt {
            background: linear-gradient(0deg, transparent 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.6) 100%);

            .site_nav_menu {
                a {
                    color: $gray-500;

                    &:hover {
                        color: $gray-100;
                    }
                }

                a.nuxt-link-exact-active {
                    color: $gray-100;
                }
            }

            .site_nav_menu_chat {
                @include sm-up {
                    background: $gray-300;
    
                    svg {
                        fill: $gray-500;
                    }
    
                    &:hover {
                        background-color: $gray-200;

                        svg {
                            fill: $p-600;
                        }
    
                        @include sm-up {
                            outline: 0.2rem solid $gray-200;
                            outline-offset: 0.4rem;
                        }
                    }
                }
            }
        }
    }

    &_content {
        margin: 0 auto;
        max-width: 140rem;
        padding: 6rem 1.5rem;

        @include md {
            padding: 8rem 2rem 14rem 2rem;
        }
    }
    
    footer {
        padding: 1.5rem 1.5rem 8rem 1.5rem;
        background: rgba(161, 161, 161, 0.1);

        @include sm-up {
            padding: 2rem;
        }
        
        .footer {
            @include sm-up {
                display: flex;
                flex-direction: row;
                justify-content: flex-end;

                &_links {
                    margin: 0 8rem 0 0 !important;
                }
            }
    
            &_links,
            &_contato {
                display: flex;
                flex-direction: column;
                margin: 0 0 4rem 0;
                gap: .5rem;

                @include sm-up {
                    margin: 0;
                }
        
                h4 {
                    font-weight: bold;
                    font-size: 2.4rem;
                    color: $gray-700;
                    margin-bottom: 2rem;
                }
        
                a {
                    font-size: 1.8rem;
                    font-weight: bold;
                    margin: 0.6rem 0;
                    color: $gray-500;
    
                    &:hover {
                        color: $gray-700;
                    }
                }
        
                &_social {
                    display: flex;
                    justify-content: space-between;
                    max-width: 22rem;
                    margin: 2rem 0;
        
                    svg {
                        fill: $gray-500;
                        height: 3rem;
                        cursor: pointer;
    
                        &:hover {
                            fill: $gray-700;
                            stroke: $gray-700;
                        }
                    }
                }
            }
        }
    
    
        .logoFlat {
            height: 5rem;
            display: block;
            margin: auto;
    
            @include sm-up {
                display: inline;
            }
    
            &:hover {
                filter: brightness(1.2);
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
                font-weight: bold;
                font-size: 1.5rem;
                color: $p-700;
    
                &:hover {
                    filter: brightness(1.2);
                }
            }
        
            div {
                height: 0.3rem;
                background-color: $p-600;
                margin: 1rem 0;
            }
        
            p {
                font-weight: bold;
                font-size: 1.4rem;
                margin: .5rem 0 0 0;
                color: $gray-600;
            }
        }
    }
}

</style>