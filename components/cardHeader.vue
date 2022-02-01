<template>
    <hooper :settings="hooperSettings" class="header_cards">
        <slide>
            <picture>
                <source srcset="~/assets/img/avenida.webp" type="image/webp">
                <img src="~/assets/img/avenida.webp" alt="Avenida" />
            </picture>
            <div>
                <h4>Conheça a história de sucesso!</h4>
            </div>
        </slide>
        <slide>
            <picture>
                <source srcset="~/assets/img/avenida.webp" type="image/webp">
                <img src="~/assets/img/avenida.webp" alt="Avenida" />
            </picture>
            <div>
                <h4>Conheça a história de sucesso!</h4>
            </div>
        </slide>
        <slide>
            <picture>
                <source srcset="~/assets/img/avenida.webp" type="image/webp">
                <img src="~/assets/img/avenida.webp" alt="Avenida" />
            </picture>
            <div>
                <h4>Conheça a história de sucesso!</h4>
            </div>
        </slide>
    </hooper>
</template>

<style lang="scss">
.header_cards {
    padding: 0 !important;
    height: auto;

    ul {
        padding: 1rem 0;

        li {
        position: relative;
        margin: 0 1.5rem 0 0;
        border-radius: 2rem;
        overflow: hidden;
        box-shadow: 1rem 1rem 0.5rem rgba($color: $gray-500, $alpha: 0.2);
        height: 30rem;

            img {
                z-index: -1;
                width: 100%;
                height: 100%;
                position: absolute;
                object-fit: cover;
            }

            div {
                background: linear-gradient(180deg, rgba(0, 0, 0, 0) 20%, $blue-800 100%);
                height: 100%;

                h4 {
                    position: absolute;
                    bottom: 0;
                    font-size: 3rem;
                    font-weight: 700;
                    color: $gray-100;
                    text-align: right;
                    padding: 2rem;

                    &:hover {
                        color: $gray-200;
                    }
                }
            }
        }
    }
}
</style>

<script>
  import { Hooper, Slide } from 'hooper';
  import 'hooper/dist/hooper.css';

  export default {
    name: 'App',
    components: {
      Hooper,
      Slide
    },
    data() {
        return {
            hooperSettings: {
                itemsToShow: 1.2,
                centerMode: true,
                breakpoints: {
                    900: {
                        itemsToShow: 1.8
                    }
                }
            }
        };
    }
  }
</script>