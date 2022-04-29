<template>
    <div class="card">
        <div class="card_brand">
            <h4>volkswagen</h4>
            <h5>Cross</h5>
        </div>
        <span class="card_price">R$60.000</span>
        <div class="card_imgs">
            <nuxt-img format="webp" src="/img/cross.jpg" />
        </div>
        <div class="card_info">
            <div class="card_info_stats">
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
            </div>
            <div class="card_info_more">
                <span>Ver mais</span>
                <IconsInfo />
            </div>
        </div>
    </div>
</template>

<script>
 
const xml2js = require('xml2js');

export default {
    data() {
        return {
            cars: []
        }
    },
    methods: {
        xmlToJSON: (xml, options) => {
        return new Promise((resolve, reject) => {
            xml2js.parseStringPromise(xml, options, (err, jsonObj) => {
            if (err) {
                return reject(err);
            }
            resolve(jsonObj);
            });
        });
        }
    },
    async fetch() {
        const xmlData = await this.$axios.$get()
        .then(res => res.xmlToJSON())
        .then(data => {
            console.log('<<==');
            const xml = data;
            return data;
        });
        const jsonData = await this.xmlToJSON(xmlData);
        if (jsonData && jsonData.estoque && jsonData.estoque.veiculo) this.cars = jsonData.estoque.veiculo
    }
}
</script>

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
            color: $p-800;
            font-size: 1.4rem;   
        }

        h5 {
            font-size: 3.4rem;
            color: $p-600;
        }
    }

    &_price {
        position: absolute;
        top: 0;
        right: 0;
        padding: 1rem;
        font-size: 1.3rem;
        font-weight: bold;
        color: $p-800;
        background-color: $gray-100;
        border-top: solid $p-600 .5rem;
        clip-path: polygon(50% 85%, 100% 100%, 100% 0, 0 0, 0 100%);
    }
    
    &_info {
        display: flex;
        justify-content: space-between;

        svg {
            fill: $p-800;
        }

        span {
            font-weight: bold;
            font-size: 1rem;
            color: $p-800;
        }

        &_stats {
            display: flex;
            
            div {
                display: flex;
                align-items: center;
            }

            span {
                &:nth-child(2) {
                    padding: 0 1rem;
                }
            }
        }

        &_more {
            display: flex;
            align-items: center;
            cursor: pointer;

            span {
                margin-right: 0.5rem;
            }
        }
    }

    &_imgs {
        height: 20rem;
        position: relative;
        margin: 1rem 0;
        border-left: solid $p-600 1rem;

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