<template>
    <div class="highlights">
        <div class="highlights_card">
            <div class="highlights_card_info">
                <h4>Jeep</h4>
                <h5>Compass</h5>
                <div>
                    <span>2020</span>
                    <span>Flex</span>
                    <span>20mil KM</span>
                </div>
            </div>
            <div class="highlights_card_img">
                <nuxt-img format="webp" src="/img/cross.jpg" />
            </div>
            <div class="highlights_card_plus">
                <span>Saiba mais</span>
                <IconsInfo />
            </div>
        </div>
        <div class="highlights_card">
            <div class="highlights_card_info">
                <h4>Honda</h4>
                <h5>Civic</h5>
                <div>
                    <span>2020</span>
                    <span>Flex</span>
                    <span>20mil KM</span>
                </div>
            </div>
            <div class="highlights_card_img">
                <nuxt-img format="webp" src="/img/cross.jpg" />
            </div>
            <div class="highlights_card_plus">
                <span>Saiba mais</span>
                <IconsInfo />
            </div>
        </div>
        <div class="highlights_card">
            <div class="highlights_card_info">
                <h4>Renault</h4>
                <h5>Captur</h5>
                <div>
                    <span>2020</span>
                    <span>Flex</span>
                    <span>20mil KM</span>
                </div>
            </div>
            <div class="highlights_card_img">
                <nuxt-img format="webp" src="/img/cross.jpg" />
            </div>
            <div class="highlights_card_plus">
                <span>Saiba mais</span>
                <IconsInfo />
            </div>
        </div>
        <div class="highlights_card">
            <div class="highlights_card_info">
                <h4>Nissan</h4>
                <h5>Kicks</h5>
                <div>
                    <span>2020</span>
                    <span>Flex</span>
                    <span>20mil KM</span>
                </div>
            </div>
            <div class="highlights_card_img">
                <nuxt-img format="webp" src="/img/cross.jpg" />
            </div>
            <div class="highlights_card_plus">
                <span>Saiba mais</span>
                <IconsInfo />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.highlights {
    display: flex;
    gap: 0.5rem;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 0.5rem;

    @include sm-up {
        flex-wrap: nowrap;
    }

    @include md {
        margin-left: 40rem;
    }

    &_card {
        flex: 1 1 auto;
        min-width: 15rem;

        overflow: hidden;
        position: relative;

        &_info {
            padding: 1rem;
            background-color: $p-500;

            h4 {
                color: $p-200;
                font-size: 1.5rem;
            }

            h5 {
                font-size: 2.5rem;
                margin: 0 0 .5rem 0;
                color: $gray-100;
            }

            span {
                font-weight: bold;
                font-size: 1.2rem;
                color: $p-400;
                
                &:nth-child(2) {
                    margin: 0 0.5rem;
                    padding: 0 0.5rem;
                    border-left: solid 0.1rem $p-400;
                    border-right: solid 0.1rem $p-400;
                }
            }
        }

        &_img {
            height: 12rem;
            border-bottom: solid .8rem $p-500;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        &_plus {
            display: flex;
            padding: 1rem 0 1rem 0;
            align-items: center;
            justify-content: flex-end;
            cursor: pointer;

            &:hover {
                svg, span {
                    fill: $p-500;
                    color: $p-500;
                }
            }

            svg {
                fill: $gray-400;
                margin-left: 0.5rem;
            }
            span {
                font-size: 1rem;
                text-align: center;
                font-weight: bold;
                color: $gray-400;
            }
        }
    }
}
</style>