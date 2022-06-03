<template>
    <div class="site">
        <Nav />
        <Nuxt class="content"/>
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
                    <a :href="links.vendas" target="_blank">Vendas - (19) 99797-6865</a>
                    <a :href="links.pos" target="_blank">Pós venda - (19) 97822-6748</a>
                    <a :href="links.adm" target="_blank">ADM - (19) 99221-4727</a>
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
                <a :href="links.map" target="_blank">Av. Visconde de Indaiatuba, 921 , Vila Vitòria 1 - Indaiatuba/SP</a>
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
         ...mapState('links', ['links'])
    }
}
</script>

<style lang="scss">
.site {

    .content {
        max-width: 120rem;
        margin: 0 auto;
    }
    
    footer {
        padding: 3rem 2rem 8rem 2rem;
        background: rgba(179, 179, 179, 0.1);

        @include sm-up {
            padding: 3rem 2rem 2rem 2rem;
        }
        
        .footer {
            @include sm-up {
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
            }
    
            &_links,
            &_contato {
                display: flex;
                flex-direction: column;
                margin: 0 0 2rem 0;

                @include sm-up {
                    margin: 0 4rem 0 0;
                }

                @include bg {
                    margin: 0 8rem 0 0;
                }
        
                h4 {
                    font-weight: 600;
                    font-size: 2.4rem;
                    color: $p-500;
                    margin-bottom: 2rem;
                }
        
                a {
                    font-size: 1.8rem;
                    font-family: $ff-s;
                    margin: 0.6rem 0;
                    color: $gray-600;
    
                    &:hover {
                        color: $p-600;
                    }
                }
        
                &_social {
                    display: flex;
                    justify-content: space-between;
                    max-width: 20rem;
        
                    svg {
                        width: 2.2rem;
                        fill: $gray-600;
                        cursor: pointer;
    
                        &:hover {
                            fill: $p-600;
                        }
                    }
                }
            }
        }
    
    
        .logoFlat {
            height: 5rem;
            display: block;
            margin: auto;
            fill: $gray-500;
    
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
            font-family: $ff-s;
    
            @include sm-up {
                text-align: right;
                margin-top: 0;
            }
    
            a {
                font-weight: 500;
                font-size: 1.5rem;
                color: $p-600;
    
                &:hover {
                    filter: brightness(1.2);
                }
            }
        
            div {
                height: 0.2rem;
                background-color: $p-500;
                margin: 1rem 0;
            }
        
            p {
                font-weight: 400;
                font-size: 1.4rem;
                color: $gray-500;
            }
        }
    }
}

</style>