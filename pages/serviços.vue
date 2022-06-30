<template>
  <section class="services">
    <div class="services_service">
      <div>
        <iconsShield />
        <h3>Garantia de até 1 ano inédita entre as lojas de seminovos no Brasil</h3>
        <p>Carros seminovos ou usados com garantia de até 1 ano.</p>
      </div>
      <div class="services_service_img">
        <nuxt-img format="webp" src="/services/warranty.jpg" />
      </div>
    </div>
    <div class="services_service">
      <div>
        <iconsDeal />
        <h3>Financiamento rápido que cabe no seu bolso sem burocracia</h3>
        <p>Diversas opções de financiamento para você comprar seu seminovo com total segurança e rapidez.</p>
      </div>
      <div class="services_service_img">
        <nuxt-img format="webp" src="/services/finance.jpg" />
      </div>
    </div>
    <div class="services_service">
      <div>
        <iconsGift />
        <h3>Compre e receba em casa como presente</h3>
        <p>Compre e receba em casa experimente a entrega domiciliar, tenha uma experiência de compra totalmente diferente.
        </p>
      </div>
      <div class="services_service_img">
        <nuxt-img format="webp" src="/services/present.jpg" />
      </div>
    </div>
    <div class="services_service">
      <div>
        <iconsTool />
        <h3>Carros com certificados de qualidade</h3>
        <p> Todos os nossos carros passam por uma inspeção de até 240 itens para garantir sua qualidade. Além de terem
          Vistoria cautelar.</p>
      </div>
      <div class="services_service_img">
        <nuxt-img format="webp" src="/services/check.jpg" />
      </div>
    </div>
    <div class="services_service">
      <div>
        <iconsTel />
        <h3>Melhor Pós-venda</h3>
        <p>Serviço de pós-venda especializado, tenha todo o suporte ao comprar seu seminovo.</p>
      </div>
      <div class="services_service_img">
        <nuxt-img format="webp" src="/services/assistant.jpg" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  .services {
    display: flex;
    row-gap: 8rem;
    flex-direction: column;
    justify-content: center;

    @include sm-up {
      gap: 8rem 4rem;
      flex-wrap: wrap;
      flex-direction: row;
    }

    &_service {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      &:hover {
        svg {
          fill: $gray-700;
        }

        h3 {
          color: $gray-700;
        }

        img {
          animation: scaling 1s both;
        }
      }

      @include sm-up {
        max-width: 30rem;
      }

      div {
        display: flex;
        text-align: center;
        flex-direction: column;
        align-items: center;

        svg {
          fill: $gray-600;
        }

        h3 {
          color: $gray-600;
          font-size: 2.5rem;
          margin: 3rem 0 1rem 0;
        }

        p {
          font-family: $ff-s;
          font-size: 2.2rem;
          color: $gray-600;
          margin: 1rem 0 2rem 0;
        }

        @include sm-up {      
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

      &_img {
        overflow: hidden;
        height: 12rem;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          box-shadow: .5rem .5rem 1rem rgba(0, 0, 0, 0.1);
        }
      }
    }
  }
</style>