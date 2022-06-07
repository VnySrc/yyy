<template>
  <section class="services">
    <div class="services_service">
      <div>
        <iconsShield />
        <h3>Garantia de até 1 ano inédita entre as lojas de seminovos no Brasil</h3>
        <p>Carros seminovos ou usados com garantia de até 1 ano.</p>
      </div>
      <nuxt-img format="webp" src="/img/services/warranty.jpg" />
    </div>
    <div class="services_service">
      <div>
        <iconsDeal />
        <h3>Financiamento rápido que cabe no seu bolso sem burocracia</h3>
        <p>Diversas opções de financiamento para você comprar seu seminovo com total segurança e rapidez.</p>
      </div>
      <nuxt-img format="webp" src="/img/services/finance.jpg" />
    </div>
    <div class="services_service">
      <div>
        <iconsGift />
        <h3>Compre e receba em casa como presente</h3>
        <p>Compre e receba em casa experimente a entrega domiciliar, tenha uma experiência de compra totalmente diferente.
        </p>
      </div>
      <nuxt-img format="webp" src="/img/services/present.jpg" />
    </div>
    <div class="services_service">
      <div>
        <iconsTool />
        <h3>Carros com certificados de qualidade</h3>
        <p> Todos os nossos carros passam por uma inspeção de até 240 itens para garantir sua qualidade. Além de terem
          Vistoria cautelar.</p>
      </div>
      <nuxt-img format="webp" src="/img/services/check.jpg" />
    </div>
    <div class="services_service">
      <div>
        <iconsTel />
        <h3>Melhor Pós-venda</h3>
        <p>Serviço de pós-venda especializado, tenha todo o suporte ao comprar seu seminovo.</p>
      </div>
      <nuxt-img format="webp" src="/img/services/assistant.jpg" />
    </div>
  </section>
</template>

<style lang="scss">
  .services {
    display: flex;
    row-gap: 5rem;
    padding: 6rem 1.5rem;
    flex-direction: column;

    @include sm-up {
      gap: 4rem;
      display: grid;
      padding: 4rem 2rem;
      align-items: center;
      grid-template-columns: repeat(2, 1fr);
    }

    @include md {
      grid-template-columns: repeat(3, 1fr);
    }

    &_service {
      div {
        display: flex;
        text-align: center;
        align-items: center;
        flex-direction: column;

        svg {
          height: 6rem;
          margin-bottom: 1.5rem;
          fill: $p-500;
        }

        h3 {
          font-size: 2.5rem;
          font-weight: bold;
          color: $p-500;
        }

        p {
          font-family: $ff-s;
          font-size: 2.2rem;
          color: $gray-500;
          margin: 1rem 0 2rem 0;
        }

        @include sm-up {      
          justify-content: flex-start;

          svg {
            height: 4rem;
          }

          h3 {
            font-size: 1.6rem;
          }

          p {
            font-size: 1.6rem;
          }
        }
      }

      img {
        width: 100%;
        height: 14rem;
        object-fit: cover;
        border-bottom: solid .8rem $p-500;
        border-radius: .5rem;

        @include md {
          height: 10rem;
        }
      }
    }
  }
</style>