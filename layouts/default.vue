<template>
    <div>
        <section class="nav">
            <h1>Navegation</h1>
        </section>
        <Nuxt />
        <section class="blog">
            <h1>Blog</h1>
        </section>
        <footer>
            <h1>Footer</h1>
        </footer>
    </div>
</template>

<style lang="scss">

.nav {
    height: 10rem;

    h1 {
        background-color: bisque;
        width: 100%;
        height: 100%;
    }
}

.blog {
    height:35rem;
    background-color: $primary;
}

footer {
    height: 50rem;
    background-color: $secondary;
}

</style>