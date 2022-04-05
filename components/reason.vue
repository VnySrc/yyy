<template>
    <section class="razoes">
      <div class="razoes_text">
        <h3>COMPRA CERTA</h3>
        <h1>Benefícios de comprar com a Avenida veículos</h1>
        <p>Atuando no mercado automobilístico, nós da Avenida Veículos buscamos auxiliar nossos clientes afim de
          encontrar o melhor negócio, agindo como consultores, não somente como simples vendedores.</p>
      </div>
      <div class="razoes_card">
        <div>
        </div>
        <div>
        </div>
        <div>
        </div>
        <div>
        </div>
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

    &_card {
      gap: 0.5rem;
      width: 100%;
      display: flex;
      flex-wrap: wrap;

      @include sm-up {
        flex-wrap: nowrap;
      }

      div {
        flex: 1 1 auto;
        height: 20rem;
        min-width: 15rem;
        background: linear-gradient(45deg, $gray-600 0%, $gray-700 100%);
      }
    }
  }
</style>