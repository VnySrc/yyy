<template>
<div>
  <header class="header">
    <div class="header_text">
      <h3>INDAIATUBA - SP</h3>
      <h1>Semi-novos em Indaiatuba</h1>
      <p>Semi-novos em Indaiatuba</p>
    </div>
    <cardHeader />
  </header>
  <section class="razoes">
    <div class="razoes_text">
      <h3>COMPRA CERTA</h3>
      <h1>Benefícios de comprar com a Avenida veículos</h1>
      <p>Atuando no mercado automobilístico, nós da Avenida Veículos buscamos auxiliar nossos clientes afim de encontrar o melhor negócio, agindo como consultores, não somente como simples vendedores.</p>
    </div>
  </section>
  <cardReason />
  <section class="feedback">
    <div class="feedback_card"></div>
    <div class="feedback_card"></div>
    <div class="feedback_card"></div>
  </section>
</div>
</template>

<style lang="scss">

.header {
  display: flex;
  flex-direction: column;
  margin-top: 6rem;

  @include md {
    flex-direction: row;
  }

  &_text {
    font-family: $ff-primary;
    padding-left: 2rem;

    @include md {
      padding: 2rem 0 0 6rem;
    }

    @include lg-up {
      padding: 2rem 0 0 16rem;
    }

    
    h1 {
      font-size: 4rem;
      font-weight: 700;
      color: $gray-600;
      margin: 0.5rem 0;
    }

    p {
      font-size: 2.4rem;
      font-weight: 300;
      color: $gray-500;
    }

    h3 {
      font-size: 1.5rem;
      font-weight: 700;
      color: $red-500;
    }
  }
}

.razoes {
  display: flex;
  flex-direction: column;
  margin-top: 4rem;

  &_text {
    font-family: $ff-primary;
    padding-right: 2rem;
    text-align: right;

    @include md {
      padding: 0 2rem 2rem 16rem;
    }

    @include lg-up {
      padding: 0 16rem 2rem 60rem;
    }
    
    h1 {
      font-size: 3rem;
      font-weight: 700;
      color: $gray-600;
    }

    p {
      font-size: 2rem;
      font-weight: 300;
      color: $gray-500;
      padding-top: 1rem;
    }

    h3 {
      font-size: 1.5rem;
      font-weight: 700;
      color: $red-500;
    }
  }
}

.feedback {
  display: none;
  flex-direction: column;
  gap: 2rem;

  &_card {
    background-color: $primary;
    border-radius: 100%;
    height: 35rem;
  }
}
</style>