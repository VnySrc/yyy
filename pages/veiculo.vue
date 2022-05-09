<template>
    <section class="cars">
        <div class="cars_imgs">
            <nuxt-img format="webp" src="/img/cross.jpg" />
        </div>
        <div class="cars_brand">
            <h2>TOYOTA</h2>
            <h1>YARIS HATCH</h1>
            <span>1.6 MSI TRENDLINE CS 8V FLEX 2P MANUAL</span>
        </div>
        <div class="cars_info">
            <div class="cars_info_price">
                <h3>R$ 99.900,00</h3>
            </div>
            <div class="cars_info_zap">
                <IconsWhatsapp />
            </div>
        </div>
        <div class="cars_table">
            <h4>Especificações técnicas</h4>
            <table>
                <tbody>
                    <tr>
                        <th>Ano</th>
                        <td>2020</td>
                    </tr>
                    <tr>
                        <th>Categoria</th>
                        <td>Hatch</td>
                    </tr>
                    <tr>
                        <th>Kilometragem</th>
                        <td>30mil</td>
                    </tr>
                    <tr>
                        <th>Combustível</th>
                        <td>Gasolina</td>
                    </tr>
                    <tr>
                        <th>Transmisão</th>
                        <td>Automático</td>
                    </tr>
                    <tr>
                        <th>Potência</th>
                        <td>200cv</td>
                    </tr>
                    <tr>
                        <th>Freio</th>
                        <td>Disco</td>
                    </tr>
                    <tr>
                        <th>Cor</th>
                        <td>Branco</td>
                    </tr>
                </tbody>
            </table>
            <h4>Observações</h4>
            <p>===Opcionais: completo ===Vários Acessórios rizoma ===Embreagem a seco ===Kit procton rizoma ===Mecânica ok ===Documentos ok Financiamos em até 60x parcelamos sua entrada em 12x no cartão de crédito. Aceitamos trocas e fazemos troca com troco. Avenida veículos Indaiatuba. Av. Visconde de Indaiatuba,921 Indaiatuba SP tel (19) 3835-0800whats (19) 99309-1270</p>
        </div>
    </section>
</template>

<style lang="scss">
    .cars {
        padding: 4rem 2rem;

        &_imgs {
            img {
                width: 100%;
                object-fit: cover;
            }
        }

        &_brand {
            margin: 1rem 0;
            padding-left: 1rem;
            border-left: solid $p-500 1rem;

            h2 {
                color: $gray-600;
                font-size: 1.5rem;
            }

            h1 {
                font-size: 3.5rem;
                color: $p-600;
                margin: 0 0 .5rem 0;
            }

            span {
                font-family: $ff-s;
                font-size: 1.4rem;
                color: $gray-500;
            }
        }

        &_info {
            display: flex;
            gap: .5rem;

            &_price {
                width: 100%;
                padding: 1.5rem 0;
                background-color: $p-500;

                h3 {
                    font-size: 2rem;
                    color: $white;
                    text-align: center;
                }
            }

            &_zap {
                padding: 1.5rem 0;
                background-color: $p-400;

                svg {
                    fill: $white;
                    height: 2rem;
                }
            }
        }

        &_table {
            margin: 2rem 0;
            font-family: $ff-s;
            font-size: 1.4rem;

            h4 {
                text-align: right;
                color: $p-600;
                font-size: 2rem;
                margin: 4rem 0;
            }

            p {
                border-right: solid $p-500 1rem;
                padding-right: 1rem;
                text-align: right;
            }

            table {
                width: 100%;
                table-layout: fixed;
                border-collapse: collapse;
                text-align: center;

                tbody {
                    tr {
                        th {
                            padding: 1rem;
                            color: $p-600;
                            border-bottom: .2rem $p-500 solid;
                        }
    
                        td {
                            border-bottom: .2rem $p-500 solid;
                            color: $gray-600;
                            padding: 1rem;
                        }
                    }
                }
            }
        }
    }
</style>