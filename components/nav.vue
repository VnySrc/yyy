<template>
    <nav>
        <nuxt-link to="/" class="logo"><IconsLogo /></nuxt-link>
        <div>
            <nuxt-link to="/">Home</nuxt-link>
            <nuxt-link to="/estoque">Estoque</nuxt-link>
            <nuxt-link to="/serviços">Serviços</nuxt-link>
            <nuxt-link to="/blog">Blog</nuxt-link>
            <nuxt-link to="/contato" class="chat">
                <IconsChat />
                <span>Entre em contato</span>
            </nuxt-link>
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
                filter: brightness(1.2);
            }
        }
    }

    div {
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        a {
            font-weight: 700;
            font-size: 1.6rem;
            color: $gray-300;

            @include md {
                &:nth-child(2n) {
                    margin: 0 4rem;
                }
            }

            &:hover {
                color: $p-400;
            }
        }

        a.nuxt-link-exact-active {
            font-weight: 800;
            color: $p-500;
        }

        .chat {
            display: flex;
            justify-content: center;
            align-items: center;
            bottom: 0;
            width: 100%;
            padding: 2rem;
            cursor: pointer;
            position: fixed;
            background-color: $p-500;
            z-index: 2;

            @include sm-up {
                display: block;
                position: relative;
                width: auto;
                border-radius: .5rem;
            }

            &.nuxt-link-exact-active {
                display: none;

                @include sm-up {
                    filter: brightness(1.2);
                    display: block;
                }
            }

            &:hover {
                filter: brightness(1.2);

                @include sm-up {
                    outline: 0.2rem solid $p-500;
                    outline-offset: 0.2rem;
                }
            }

            svg {
                fill: $p-100;
                margin-right: 1rem;
                
                @include sm-up {
                    display: block;
                    margin: auto; 
                }
            }

            span {
                color: $p-100;

                @include sm-up {
                    display: none;
                }
            }
        }
    }
}
</style>