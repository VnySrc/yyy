<template>
    <section class="blog">
        <nuxt-link to="/sobre" class="blog_card">
            <nuxt-img format="webp" src="/img/avenida.jpg" />
            <div class="blog_card_title">
                <h5>Avenida Veículos</h5>
                <h4>Conheça nossa história de sucesso!</h4>
            </div>
        </nuxt-link>
        <nuxt-link :to="`/blog/${value.slug}`" v-for="value in blog" :key="value.id" class="blog_card">
            <nuxt-img format="webp" :src="value.banner"/>
            <div class="blog_card_title">
                <h5>{{ value.tag }}</h5>
                <h4>{{ value.titulo }}</h4>
            </div>
        </nuxt-link>
        <nuxt-link to="/sobre" class="blog_card">
            <nuxt-img format="webp" src="/img/avenida.jpg" />
            <div class="blog_card_title">
                <h5>Avenida Veículos</h5>
                <h4>Conheça nossa história de sucesso!</h4>
            </div>
        </nuxt-link>
    </section>
</template>

<style lang="scss">
.blog {
    padding: 4rem 1.5rem;

    @include sm-up {
        padding: 6rem 2rem;
        display: flex;
        gap: 1rem;
    }

    @include md {
        gap: 3rem;
    }

    &_card {
        gap: 0.5rem;
        margin: 0 0 4rem 0;
        display: flex;
        flex-direction: column;

        @include sm-up {
            margin: 0;
        }

        &_title {
            text-align: left;
            font-weight: bold;
            margin: 1rem 0 0 0;
            padding: .5rem 1rem;
            border-left: solid $p-600 .8rem;

            h5 {
                font-size: 1.4rem;
                color: $gray-500;
                margin-bottom: .5rem;
            }

            h4 {
                font-size: 2.4rem;
                line-height: 1;
                color: $p-600;
            }
        }

        img {
            height: 18rem;
            object-fit: cover;
            box-shadow: .1rem .1rem 1rem rgba(0, 0, 0, 0.1);
        }

        &:hover {
            div {
                border-left: solid $p-500 .8rem;
            }

            img {
                outline: solid .4rem $p-500;
            }

            h4 {
                color: $p-500;
            }

            h5 {
                color: $gray-400;
            }
        }
    }
}
</style>

<script>
    export default {
        computed: {
            cars() {
                return this.$store.state.stock.cars
            }
        },
        async asyncData({ $content }) {
            const blog = await $content("blog").fetch();

            return {
                message: "",
                blog
            };
        }
    }
</script>