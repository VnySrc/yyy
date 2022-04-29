<template>
    <div class="card">
        <div class="card_brand">
            <h4>TOYOTA</h4>
            <h5>YARIS HATCH</h5>
        </div>
        <div class="card_imgs">
            <nuxt-link to="/">
                <span class="card_imgs_price">R$99.900,00</span>
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

    overflow: hidden;
    position: relative;

    @include md {
        margin: 2rem;
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
    
    &_info {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 0 .2rem;
        
        div {
            display: flex;
            align-items: center;

            &:hover {
                span, svg {
                    fill: $p-600;
                    color: $p-600;
                    scale: 1.1;
                }
            }
        }

        svg {
            fill: $gray-500;
        }

        span {
            padding: 0 1rem;
            font-weight: bold;
            font-size: 1.4rem;
            color: $gray-500;

            @include sm-up {
                font-size: 1.1rem;
            }
        }

        &_stats {
            cursor: pointer;
        }
    }

    &_imgs {
        height: 25rem;
        position: relative;
        margin: 1.5rem 0;
        border-bottom: solid $p-500 .8rem;
        overflow: hidden;
        
        cursor: pointer;

        &:hover {
            span {
                color: $p-600;
            }
        }

        @include md {
            height: 20rem;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        &_price {
            position: absolute;
            top: 0;
            right: 0;
            color: $gray-600;
            font-size: 2rem;
            font-weight: bold;
            margin-right: 1rem;
            padding: 1.2rem 1rem;
            background-color: $gray-100;
            border-bottom: solid $p-500 .8rem;

            @include sm-up {
                font-size: 1.5rem;
            }
        }
    }
}

</style>