<template>
    <section class="razoes">
      <div class="razoes_text">
        <h3>COMPRA CERTA</h3>
        <h1>Benefícios de comprar com a Avenida veículos</h1>
        <p>Atuando no mercado automobilístico, nós da Avenida Veículos buscamos auxiliar nossos clientes afim de
          encontrar o melhor negócio, agindo como consultores, não somente como simples vendedores.</p>
      </div>
      <div class="razoes_cards">
        <nuxt-link to="/serviços" class="razoes_cards_card">
          <div>
            <iconsShield />
            <h3>Garantia de até um ano</h3>
          </div>
        </nuxt-link>
        <nuxt-link to="/serviços" class="razoes_cards_card">
          <div>
            <iconsDeal />
            <h3>Financiamento rápido que cabe no seu bolso</h3>
          </div>
        </nuxt-link>
        <nuxt-link to="/serviços" class="razoes_cards_card">
          <div>
            <iconsGift />
            <h3>Compre e receba em casa como presente</h3>
          </div>
        </nuxt-link>
        <nuxt-link to="/serviços" class="razoes_cards_card">
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
      gap: 1rem;
      width: 100%;
      display: flex;
      flex-wrap: wrap;

      @include sm-up {
        flex-wrap: nowrap;
      }

      &_card {
        width: 15rem;
        flex: 1 1 auto;

        div {
          display: flex;
          height: 20rem;
          padding: 2rem 1rem;
          align-items: center;
          justify-content: center;
          border: solid $p-500 .1rem;
          border-radius: 1rem;
          flex-direction: column;


          svg {
            width: 4rem;
            height: 4rem;
            margin-bottom: 1.5rem;
            fill: $p-500;
          }

          h3 {
            font-size: 1.8rem;
            font-weight: bold;
            text-align: center;
            color: $gray-400;
          }
        }
      }
    }
  }
</style>