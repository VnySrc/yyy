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
    flex-direction: column;
    row-gap: 5rem;
    padding: 4rem 2rem;

    @include sm-up {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: flex-end;
      padding: 4rem 2rem;
      gap: 4rem;
    }

    @include md {
      padding: 5rem 10rem;
      gap: 5rem;
    }

    &_service {
      div {
        display: flex;
        padding: 2rem 0;
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
          margin: 1rem 0;
        }

        p {
          font-family: $ff-s;
          font-size: 2rem;
          color: $gray-500;
        }
      }

      img {
        width: 100%;
        height: 14rem;
        object-fit: cover;
        border-bottom: solid .8rem $p-500;
      }
    }
  }
</style>