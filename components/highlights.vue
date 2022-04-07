<template>
    <div class="highlights">
        <div class="highlights_imgs">
            <div class="highlights_imgs_info">
                <h4>Jeep</h4>
                <h5>Compass</h5>
                <div>
                    <span>2020</span>
                    <span>Flex</span>
                    <span>20mil KM</span>
                </div>
            </div>
            <div class="highlights_background">
                <div>
                    <IconsInfo />
                    <span>Saiba mais</span>
                </div>
            </div>
            <nuxt-img format="webp" src="/img/compass.png" />
        </div>
        <div class="highlights_imgs">
            <div class="highlights_imgs_info">
                <h4>Honda</h4>
                <h5>Civic</h5>
                <div>
                    <span>2020</span>
                    <span>Flex</span>
                    <span>20mil KM</span>
                </div>
            </div>
            <div class="highlights_background">
                <div>
                    <IconsInfo />
                    <span>Saiba mais</span>
                </div>
            </div>
            <nuxt-img format="webp" src="/img/civic.png" />
        </div>
        <div class="highlights_imgs">
            <div class="highlights_imgs_info">
                <h4>Renault</h4>
                <h5>Captur</h5>
                <div>
                    <span>2020</span>
                    <span>Flex</span>
                    <span>20mil KM</span>
                </div>
            </div>
            <div class="highlights_background">
                <div>
                    <IconsInfo />
                    <span>Saiba mais</span>
                </div>
            </div>
            <nuxt-img format="webp" src="/img/captur.png" />
        </div>
        <div class="highlights_imgs">
            <div class="highlights_imgs_info">
                <h4>Nissan</h4>
                <h5>Kicks</h5>
                <div>
                    <span>2020</span>
                    <span>Flex</span>
                    <span>20mil KM</span>
                </div>
            </div>
            <div class="highlights_background">
                <div>
                    <IconsInfo />
                    <span>Saiba mais</span>
                </div>
            </div>
            <nuxt-img format="webp" src="/img/kicks.png" />
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

    &_imgs {
        height: 22rem;
        flex: 1 1 auto;
        min-width: 15rem;
        background: linear-gradient(45deg, $p-500 0%, $p-700 100%);

        overflow: hidden;
        position: relative;

        &_info {
            padding: 1.5rem;
            position: absolute;

            h4 {
                font-size: 1rem;
                color: $p-300;
            }

            h5 {
                font-size: 2.2rem;
                color: $p-200;
                margin: 0 0 0.6rem 0;
            }

            span {
                font-size: 1rem;
                color: $p-200;

                &:nth-child(2) {
                    margin: 0 0.5rem;
                    padding: 0 0.5rem;
                    border-left: solid 0.1rem $p-300;
                    border-right: solid 0.1rem $p-300;
                }
            }
        }

        img {
            height: 13rem;
            right: -3rem;
            bottom: 1rem;
            position: absolute;
        }
    }

    &_background {
        display: flex;
        align-content: flex-end;
        background: linear-gradient(45deg, $s2-500 0%, $s2-700 100%);
        width: 100%;
        position: absolute;
        height: 7rem;
        bottom: 0;

        div {
            display: flex;
            padding: 1rem;
            align-items: flex-end;

            svg {
                fill: $gray-100;
                height: 1rem;
            }
             span {
                 font-size: 0.8rem;
                 font-weight: bold;
                 color: $gray-100;
             }
        }
    }
}
</style>