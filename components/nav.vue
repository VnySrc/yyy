<template>
    <nav>
            <IconsLogo class="logo"/>
            <div>
                <nuxt-link to="/">Home</nuxt-link>
                <nuxt-link to="/estoque">Estoque</nuxt-link>
                <nuxt-link to="/serviços">Serviços</nuxt-link>
                <nuxt-link to="/blog">Blog</nuxt-link>
                <button><a target="_blank" href="https://avenidaveiculosindaiatuba.com.br/Anuncio/Contato"><IconsChat /></a></button>
            </div>
        </nav>
</template>

<style lang="scss">
nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    width: 100%;

    @include md {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0 2rem;
        max-width: 120rem;
    }

    .logo {
        height: 7rem;
        margin: 3rem 0 4rem 0;

        @include md {
            height: 5rem;
        }

        &:hover {
            filter: brightness(2);
        }
    }

    div {
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        a {
            font-weight: 500;
            font-size: 1.6rem;
            color: $cream-300;

            @include md {
                &:nth-child(2n) {
                    margin: 0 4rem;
                }
            }

            &:hover {
                color: $p-600;
            }
        }

        a.nuxt-link-exact-active {
            font-weight: 700;
            color: $p-600;
        }

        button {
            width: 5rem;
            height: 5rem;
            background: linear-gradient(45deg, $p-600 0%, $p-700 100%);
            cursor: pointer;

            &:hover {
                a {
                    fill: $p-100;
                }
            }

            a {
                fill: $p-300;

            }

            @include md {
                display: block;
            }
        }
    }
}
</style>