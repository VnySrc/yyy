<template>
    <nav>
            <nuxt-link to="/" class="logo"><IconsLogo /></nuxt-link>
            <div>
                <nuxt-link to="/">Home</nuxt-link>
                <nuxt-link to="/estoque">Estoque</nuxt-link>
                <nuxt-link to="/serviços">Serviços</nuxt-link>
                <nuxt-link to="/blog">Blog</nuxt-link>
                <nuxt-link to="/contato" class="chat"><IconsChat /></nuxt-link>
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
        margin: 3rem 0 4rem 0;

        svg {
            height: 7rem;
            display: block;
            margin: auto;

            @include md {
                height: 5rem;
            }

            &:hover {
                filter: brightness(1.4);
            }
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

        .chat {
            fill: $p-300;
            padding: 2rem;
            display: none;
            cursor: pointer;
            background: linear-gradient(45deg, $p-600 0%, $p-700 100%);

            &:hover {
                fill: $p-100;
            }

            &.nuxt-link-exact-active {
                fill: $p-300;
                background: linear-gradient(45deg, $p-500 0%, $p-600 100%);
            }

            svg {
                display: block;
                margin: auto;                    
            }

            @include md {
                display: block;
            }
        }
    }
}
</style>