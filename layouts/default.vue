<template>
    <div>
        <section class="nav">
            <img src="~/assets/img/logo.svg" alt="">
            <ul>
                <li>Home</li>
                <li>Estoque</li>
                <li>Serviços</li>
                <li>Blog</li>
            </ul>
            <button><a href="">CONTATO</a></button>
        </section>
        <Nuxt />
        <section class="blog">
            <h1>VISITE NOSSO BLOG</h1>
            <div class="blog_cards">
                <div class="blog_cards__card"></div>
                <div class="blog_cards__card"></div>
                <div class="blog_cards__card"></div>
            </div>
        </section>
        <footer>
        </footer>
    </div>
</template>

<style lang="scss">

.nav {
    display: flex;
    justify-content: space-between;
    height: 10rem;
    padding: 4rem;
    margin-bottom: 4rem;

    img {
        height: 6rem;
    }

    ul {
        display: flex;
        gap: 4rem;
        justify-content: center;

        li {
            font-size: 2rem;
            color: $gray-400;
        }
    }

    button {
        border: none;
        padding: 3rem 4rem;
        text-decoration: none;
        background-color: $primary;

        a {
            font-size: 1.6rem;
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
            height: 21rem;
            width: 32rem;
        }
    }
}

footer {
    height: 50rem;
    background-color: $secondary;
}

</style>