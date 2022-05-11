<template>
    <div class="card">
        <div class="card_brand">
            <h4>TOYOTA</h4>
            <h5>YARIS HATCH</h5>
        </div>
        <span class="card_price">$ 99.900,00</span>
        <div class="card_img">
            <nuxt-link to="/veiculo">
                <nuxt-img format="webp" src="/img/cross.jpg" />
            </nuxt-link>
        </div>
        <div class="card_info">
            <div>
                <iconsDate />
                <span>2020</span>
            </div>
            <div>
                <iconsEngine />
                <span>Gasolina</span>
            </div>
            <div>
                <iconsSpeed />
                <span>20mil KM</span>
            </div>
            <div class="card_info_stats">
                <IconsInfo />
                <span>Ver mais</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .card {
        flex: 1 1 auto;
        min-width: 15rem;
        margin: 2rem 0;
        flex-wrap: nowrap;

        overflow: hidden;
        position: relative;

        @include md {
            margin: 1rem;
        }

        &_brand {
            h4 {
                color: $gray-500;
                font-size: 1.5rem;
            }

            h5 {
                font-size: 3.5rem;
                color: $p-600;
            }
        }

        &_price {
            position: absolute;
            top: 0;
            right: 0;
            color: $white;
            font-size: 1.2rem;
            font-weight: bold;
            font-family: $ff-s;
            background-color: $p-500;
            padding: 1rem 1rem 1.4rem 1rem;
            clip-path: polygon(50% 85%, 100% 100%, 100% 0, 0 0, 0 100%);
        }

        &_info {
            width: 100%;
            display: flex;
            justify-content: space-between;

            div {
                display: flex;
                align-items: center;
                flex-wrap: nowrap;

                &:hover {

                    span,
                    svg {
                        fill: $p-600;
                        color: $p-600;
                    }
                }
            }

            svg {
                fill: $gray-500;
            }

            span {
                padding-left: 0.8rem;
                font-weight: bold;
                font-size: 1.2rem;
                color: $gray-500;

                @include sm-up {
                    font-size: 1rem;
                }
            }

            &_stats {
                cursor: pointer;
            }
        }

        &_img {
            height: 25rem;
            margin: 1.5rem 0;
            border-bottom: solid $p-500 .8rem;
            overflow: hidden;

            cursor: pointer;

            @include md {
                height: 20rem;
            }

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
</style>