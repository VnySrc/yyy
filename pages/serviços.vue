<template>
  <section class="services">
    <div class="services_card">
      <div>
        <iconsShield />
        <h3>Garantia de até 1 ano inédita entre as lojas de seminovos no Brasil</h3>
      </div>
      <p>Carros seminovos ou usados com garantia de até 1 ano.</p>
    </div>
    <div class="services_card">
      <div>
        <iconsDeal />
        <h3>Financiamento rápido que cabe no seu bolso sem burocracia</h3>
      </div>
      <p>Diversas opções de financiamento para você comprar seu seminovo com total segurança e rapidez.</p>
    </div>
    <div class="services_card">
      <div>
        <iconsGift />
        <h3>Compre e receba em casa como presente</h3>
      </div>
      <p>Compre e receba em casa experimente a entrega domiciliar, tenha uma experiência de compra totalmente diferente.
      </p>
    </div>
    <div class="services_card">
      <div>
        <iconsTool />
        <h3>Carros com certificados de qualidade</h3>
      </div>
      <p> Todos os nossos carros passam por uma inspeção de até 240 itens para garantir sua qualidade. Além de terem
        Vistoria cautelar.</p>
    </div>
    <div class="services_card">
      <div>
        <iconsTel />
        <h3>Melhor Pós-venda</h3>
      </div>
      <p>Serviço de pós-venda especializado, tenha todo o suporte ao comprar seu seminovo.</p>
    </div>
  </section>
</template>

<style lang="scss">
  .services {
    gap: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 100% !important;

    @include sm-up {
      flex-wrap: wrap;
      flex-direction: row;
    }

    @include bg {
        padding-top: 22rem;
    }

    &_card {
      width: 100%;
      padding: 2rem;
      font-weight: bold;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      border-radius: .5rem;
      box-shadow: .1rem .1rem 1rem rgba(0, 0, 0, 0.1);
      background: linear-gradient(45deg, $gray-100 0%, $gray-200 100%);

      @include sm-up {
        max-width: 30rem;
        aspect-ratio: 1 / 1;
      }

      div {
        svg {
          fill: $p-600;
          width: 3rem;
        }
  
        h3 {
          color: $gray-700;
          font-size: 2rem;
        }

        margin: 0 0 2rem 0;
      }


      p {
        font-size: 1.6rem;
        color: $gray-500;
      }
    }
  }
</style>