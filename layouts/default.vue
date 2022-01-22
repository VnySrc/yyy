<template>
    <div>
        <section class="nav">
            <img src="~/assets/img/logo.svg" alt="Logo">
            <div class="nav_menu">
                <nuxt-link to="/">Home</nuxt-link>
                <nuxt-link to="/estoque">Estoque</nuxt-link>
                <nuxt-link to="/service">Serviços</nuxt-link>
                <nuxt-link to="/blog">Blog</nuxt-link>
            </div>
            <button><a target="_blank" href="https://avenidaveiculosindaiatuba.com.br/Anuncio/Contato">CONTATO</a></button>
        </section>
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
            <img src="~/assets/img/logo.svg" alt="Logo">
        </footer>
    </div>
</template>

<style lang="scss">

.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10rem;
    padding: 4rem;
    margin-bottom: 4rem;

    img {
        height: 4.5rem;

        &:hover {
            filter: brightness(2);
        }
    }

    &_menu {
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
        border: none;
        text-decoration: none;
        background-color: $blue-700;
        border-radius: 0.5rem;
        height: 4rem;
        
        &:hover {
            background-color: $blue-800;
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
    height:40rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: $primary;
    padding: 6rem;

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
    }

    &_cards {
        display: flex;
        justify-content: space-between;
        gap: 2rem;

        &__card {
            background-color: $gray-200;
            border-radius: 1rem;
            height: 21rem;
            width: 32rem;
        }
    }
}

footer {
    height: 50rem;
    background-color: $secondary;
    padding: 5rem;

    img {
        filter: grayscale(100%) invert(100%);
        height: 5rem;

        &:hover {
            filter: none;
        }
    }
}

</style>