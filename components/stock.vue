<template>
    <hooper :settings="hooperSettings" class="stock_cards">
        <slide>
            <picture>
                <source srcset="~/assets/img/cross.webp" type="image/webp">
                <img src="~/assets/img/cross.webp" alt="Avenida" />
            </picture>
            <div>
                <h4>Volkswagen</h4>
                <h5>T-Cross 2020</h5>
            </div>
        </slide>
        <slide>
            <picture>
                <source srcset="~/assets/img/cross.webp" type="image/webp">
                <img src="~/assets/img/cross.webp" alt="Avenida" />
            </picture>
            <div>
                <h4>Volkswagen</h4>
                <h5>T-Cross 2020</h5>
            </div>
        </slide>
        <slide>
            <picture>
                <source srcset="~/assets/img/cross.webp" type="image/webp">
                <img src="~/assets/img/cross.webp" alt="Avenida" />
            </picture>
            <div>
                <h4>Volkswagen</h4>
                <h5>T-Cross 2020</h5>
            </div>
        </slide>
    </hooper>
</template>

<style lang="scss">
.stock_cards {
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
        height: 20rem;

            img {
                z-index: -1;
                width: 100%;
                height: 100%;
                position: absolute;
                object-fit: cover;
            }

            div {
                display: flex;
                flex-direction: column;
                justify-content: end;
                padding: 2rem;
                background: linear-gradient(160deg, rgba(0, 0, 0, 0) 10%, $blue-800 100%);
                height: 100%;

                h4 {
                    font-size: 2rem;
                    font-weight: 700;
                    color: $blue-300;
                    text-align: right;
                }

                h5 {
                    font-size: 3rem;
                    font-weight: 700;
                    color: $blue-100;
                    text-align: right;
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