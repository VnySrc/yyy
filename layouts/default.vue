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
        padding: 4rem 2rem 1rem 2rem;
        
        .footer {
            @include sm-up {
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
    
                &_contato {
                    margin-left: 4rem;
                }
            }
    
            &_links,
            &_contato {
                display: flex;
                flex-direction: column;
                margin: 0rem 0 4rem 0;
    
                @include sm-up {
                    margin-right: 2rem;
                }

                @include bg {
                    margin-right: 8rem;
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
                    color: $gray-400;
    
                    &:hover {
                        color: $p-600;
                    }
                }
        
                &_social {
                    flex-direction: row;
                    display: flex;
                    width: 20rem;
                    align-items: center;
                    justify-content: space-between;
        
                    svg {
                        width: 2.2rem;
                        fill: $gray-400;
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