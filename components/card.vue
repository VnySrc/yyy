<template>
    <div class="card">
        <div class="card_info">
            <h4>volkswagen</h4>
            <h5>Cross</h5>
            <div>
                <div>
                    <iconsDate />
                    <span>2020</span>
                </div>
                <div>
                    <iconsEngine />
                    <span>Flex</span>
                </div>
                <div>
                    <iconsSpeed />
                    <span>20mil KM</span>
                </div>
            </div>
        </div>
        <span class="card_price">R$60.000</span>
        <div class="card_background">
            <div>
                <IconsInfo />
                <span>Mais informações</span>
            </div>
        </div>
        <div class="card_imgs">
            <nuxt-img format="webp" src="/img/cross.jpg" />
        </div>
    </div>
</template>

<script>
 
const xml2js = require('xml2js');

export default {
    created() {
        this.$axios.$get()
        .then(res => {
            xml2js.parseString(res, function (err, result) {
                console.log(JSON.stringify(result))
            });
        })
        .catch( err => {
            console.log(err)
        })
    }
}
</script>

<style lang="scss">
.card {
    flex: 1 1 auto;
    min-width: 15rem;
    background: linear-gradient(45deg, $p-400 0%, $p-700 100%);

    overflow: hidden;
    position: relative;

    &:hover {
        span, svg {
            filter: brightness(1.2);
        }
    }

    &_info {
        padding: 1.5rem;
        text-shadow: .1rem .1rem 1rem $p-600;

        h4 {
            color: $p-300;
            font-size: 1.4rem;   
        }

        h5 {
            font-size: 3.4rem;
            color: $gray-100;
            margin: 0 0 1rem 0;
        }

        div {
            display: flex;
            align-items: center;

            svg {
                fill: $p-300;
            }

            span {
                font-weight: bold;
                font-size: 1.6rem;
                color: $p-200;

                &:nth-child(2) {
                    margin: 0 0.5rem;
                    padding: 0 0.5rem;
                }
            }
        }
    }

    &_price {
        position: absolute;
        top: 0;
        right: 1rem;
        padding: 1.5rem 1rem;
        font-size: 1.6rem;
        font-weight: bold;
        color: $gray-100;
        background: linear-gradient(200deg, $s-500 0%, $s-600 75%);
        clip-path: polygon(50% 85%, 100% 100%, 100% 0, 0 0, 0 100%);
        outline: solid $gray-700 1rem;
    }
    
    &_background {
        display: flex;
        align-content: flex-end;
        background: linear-gradient(170deg, $gray-600 0%, $gray-800 100%);
        width: 100%;
        position: absolute;
        height: 10rem;
        bottom: 0;

        div {
            display: flex;
            padding: 0rem 0 1.5rem 1.5rem;
            align-items: flex-end;
            cursor: pointer;

            svg {
                fill: $gray-100;
                height: 1.5rem;
                margin-right: 0.5rem;
            }
            span {
                font-size: 1.2rem;
                font-weight: bold;
                color: $gray-100;
            }
        }
    }

    &_imgs {
        height: 18rem;
        position: relative;
        margin: 0 0 4rem 1.5rem;
        border-top: solid $gray-700 1rem;
        border-left: solid $gray-700 1rem;

        @include md {
            height: 15rem;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}

</style>