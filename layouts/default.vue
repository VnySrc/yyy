<template>
    <div class="site">
        <Nav />
        <Nuxt class="content"/>
        <footer>
            <div class="infos">
                <div class="links">
                    <h4>Links</h4>
                    <nuxt-link to="/termos">Termos e condições de uso</nuxt-link>
                    <nuxt-link to="/contato">Contato por email</nuxt-link>
                    <nuxt-link to="/sobre" href="">Sobre a empresa</nuxt-link>
                </div>
                <div class="contato">
                    <h4>Entre em contato</h4>
                    <a href="">Loja - (19) 3835-0800</a>
                    <a href="">(19) 99309-1270</a>
                    <div class="social">
                        <IconsFacebook />
                        <IconsWhatsapp />
                        <IconsInstagram />
                        <IconsYoutube />
                        <IconsTiktok />
                    </div>
                </div>
            </div>
            <nuxt-link to="/" class="logo"><IconsLogoFlat class="logoFlat"/></nuxt-link>
            <div class="cabeçalho">
                <a target="_blank" href="https://g.page/Avenidaveiculosindaiatuba?share">Av. Visconde de Indaiatuba, 921 , Vila Vitòria 1 - Indaiatuba/SP</a>
                <div></div>
                <p>Todos os direitos reservados @2022</p>
            </div>
        </footer>
    </div>
</template>

<style lang="scss">
.site {

    .content {
        max-width: 120rem;
        margin: 0 auto;
    }
    
    footer {
        padding: 4rem 2rem 1rem 2rem;
        background-color: $gray-700;
        
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
                    color: $gray-500;
                    margin-bottom: 2rem;
                }
        
                a {
                    font-size: 1.8rem;
                    font-family: $ff-s;
                    margin: 0.6rem 0;
                    color: $gray-400;
    
                    &:hover {
                        color: $gray-100;
                    }
                }
        
                .social {
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
                            fill: $gray-100;
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
                color: $gray-500;
    
                &:hover {
                    filter: brightness(1.2);
                }
            }
        
            div {
                height: 0.1rem;
                background-color: $gray-600;
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