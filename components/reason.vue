<template>
    <section class="razoes">
      <div class="razoes_text">
        <h3>COMPRA CERTA</h3>
        <h1>Benefícios de comprar com a Avenida veículos</h1>
        <p>Atuando no mercado automobilístico, nós da Avenida Veículos buscamos auxiliar nossos clientes afim de
          encontrar o melhor negócio, agindo como consultores, não somente como simples vendedores.</p>
      </div>
      <div class="razoes_cards">
        <nuxt-link to="/serviços" class="razoes_cards_card imageFilter">
          <nuxt-img format="webp" src="/img/services/warranty.jpg" />
          <div>
            <iconsShield />
            <h3>Garantia de até 1 ano inédita entre as lojas de seminovos no Brasil</h3>
          </div>
        </nuxt-link>
        <nuxt-link to="/serviços" class="razoes_cards_card imageFilter">
          <nuxt-img format="webp" src="/img/services/finance.jpg" />
          <div>
            <iconsDeal />
            <h3>Financiamento rápido que cabe no seu bolso sem burocracia</h3>
          </div>
        </nuxt-link>
        <nuxt-link to="/serviços" class="razoes_cards_card imageFilter">
          <nuxt-img format="webp" src="/img/services/present.jpg" />
          <div>
            <iconsGift />
            <h3>Compre e receba em casa como presente</h3>
          </div>
        </nuxt-link>
        <nuxt-link to="/serviços" class="razoes_cards_card imageFilter">
          <nuxt-img format="webp" src="/img/services/check.jpg" />
          <div>
            <iconsTool />
            <h3>Carros com certificados de qualidade</h3>
          </div>
        </nuxt-link>
      </div>
    </section>
</template>

<style lang="scss">
  .razoes {
    display: flex;
    flex-direction: column;
    padding: 2rem 1.4rem;
    margin-top: 4rem;

    @include sm-up {
      padding: 2rem;
    }

    &_text {
      text-align: right;
      margin-bottom: 2rem;

      @include lg {
        padding-left: 26rem;
      }

      h1 {
          color: $p-500;
          line-height: 1;
          margin: 1rem 0;
          font-weight: 700;
          font-size: 3rem;
          word-spacing: -0.5rem;
      }

      p {
          font-size: 2.4rem;
          font-family: $ff-s;
          color: $gray-500;
      }

      h3 {
          font-size: 1.8rem;
          font-weight: 700;
          color: $s-400;
      }
    }

    &_cards {
      gap: 0.5rem;
      width: 100%;
      display: flex;
      flex-wrap: wrap;

      @include sm-up {
        flex-wrap: nowrap;
      }

      &_card {
        flex: 1 1 auto;
        height: 20rem;
        min-width: 15rem;
        position: relative;
        overflow: hidden;
        border-bottom: solid .5rem $p-500;

        div {
          width: 100%;
          height: 100%;
          display: flex;
          padding: 1rem;
          position: absolute;
          align-items: center;
          flex-direction: column;
          justify-content: space-between;
          text-shadow: .1rem .1rem 1rem $p-800;

          svg {
            width: 4rem;
            height: 4rem;
            fill: $gray-100;
            align-self: flex-end;
            filter: drop-shadow(0 0 0.75rem $p-800);
          }

          h3 {
            font-size: 1.6rem;
            font-weight: 800;
            line-height: 1;
            text-align: left;
            color: $gray-100;
          }
        }

        img {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: -1;
            object-fit: cover;
        }
      }
    }
  }
</style>