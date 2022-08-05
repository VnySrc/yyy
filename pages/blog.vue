<template>
    <section class="blog">
        <nuxt-link to="/sobre" class="blog_card">
            <div class="blog_card_img">
                <nuxt-img format="webp" src="/office/office.jpg" />
            </div>
            <div class="blog_card_title">
                <h5>Avenida Veículos</h5>
                <h4>Conheça nossa história de sucesso!</h4>
            </div>
        </nuxt-link>
        <nuxt-link :to="`/blog/${value.slug}`" v-for="value in blog" :key="value.id" class="blog_card">
            <div class="blog_card_img">
                <nuxt-img format="webp" :src="value.banner"/>
            </div>
            <div class="blog_card_title">
                <h5>{{ value.tag }}</h5>
                <h4>{{ value.titulo }}</h4>
            </div>
        </nuxt-link>
    </section>
</template>

<style lang="scss">
.blog {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @include sm-up {
        flex-direction: row;
        justify-content: space-evenly;
    }

    @include md {
        padding-top: 12rem;
    }

    @include bg {
        padding-top: 22rem;
    }

    &_card {
        display: flex;
        padding: 1rem;
        border-radius: .5rem;
        background: linear-gradient(45deg, $gray-100 0%, $gray-200 100%);
        flex-direction: column;
        justify-content: space-between;

        @include sm-up {
            margin: 0;
            width: 28rem;
        }

        @include md {
            width: 38rem;
        }

        &_title {
            text-align: left;
            font-weight: bold;
            margin: 1rem 0 0 0;
            padding: .5rem 1rem;
            flex: 1 1 auto;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            border-left: solid $gray-400 .8rem;

            h5 {
                font-size: 1.4rem;
                color: $s-400;
                margin-bottom: .5rem;
            }

            h4 {
                font-size: 2.4rem;
                line-height: 1;
                color: $gray-600;
            }
        }

        &_img {
            height: 18rem;
            border-radius: .5rem;
            overflow: hidden;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: center;                object-fit: cover;
                box-shadow: .1rem .1rem 1rem rgba(0, 0, 0, 0.1);
            }
        }

        &:hover {
            .blog_card_title {
                border-left: solid $gray-700 .8rem;
            }

            img {
                animation: scaling 1s both;
            }

            h4 {
                color: $gray-700;
            }
        }
    }
}
</style>

<script>
    export default {
        head: {
            title: 'Avenida Veículos',
            titleTemplate: 'Confira os artigos do blog | %s'
        },
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