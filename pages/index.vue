<template>
  <div>
    <Header />
    <section class="razoes">
      <div class="razoes_text">
        <h3>COMPRA CERTA</h3>
        <h1>Benefícios de comprar com a Avenida veículos</h1>
        <p>Atuando no mercado automobilístico, nós da Avenida Veículos buscamos auxiliar nossos clientes afim de
          encontrar o melhor negócio, agindo como consultores, não somente como simples vendedores.</p>
      </div>
      <div class="razoes_card">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  </div>
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

      h1 {
          color: $p-700;
          line-height: 1;
          margin: 1rem 0;
          font-weight: 700;
          font-size: 3rem;
          word-spacing: -0.5rem;
      }

      p {
          font-size: 2.2rem;
          font-weight: 400;
          color: $cream-500;
      }

      h3 {
          font-size: 1.8rem;
          font-weight: 700;
          color: $s-400;
      }
    }

    &_card {
      display: flex;
      flex-direction: column;

      div {
        height: 20rem;
        width: 100%;
        margin-top: 0.5rem;
        background: linear-gradient(45deg, $p-500 0%, $p-600 100%);

      }
    }
  }
</style>