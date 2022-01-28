<template>
<div>
  <header class="header">
    <div class="header_text">
      <h3>INDAIATUBA - SP</h3>
      <h1>Semi-novos em Indaiatuba</h1>
      <p>Semi-novos em Indaiatuba</p>
    </div>
    <div class="header_card"></div>
    <div class="header_card"></div>
  </header>
  <section class="razoes">
    <div class="razoes_text">
      <h3>COMPRA CERTA</h3>
      <h1>Benefícios de comprar com a Avenida veículos</h1>
      <p>Atuando no mercado automobilístico, nós da Avenida Veículos buscamos auxiliar nossos clientes afim de encontrar o melhor negócio, agindo como consultores, não somente como simples vendedores.</p>
    </div>
    <div class="razoes_cards">
      <div class="razoes_cards_card"></div>
      <div class="razoes_cards_card"></div>
      <div class="razoes_cards_card"></div>
    </div>
  </section>
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
  justify-content: space-between;
  gap: 2rem;

  &_text {
    font-family: $ff-primary;
    
    h1 {
      font-size: 4rem;
      font-weight: 700;
      color: $gray-600;
    }

    p {
      font-size: 2.4rem;
      font-weight: 300;
      color: $gray-500;
      padding-top: 1rem;
    }

    h3 {
      font-size: 1.5rem;
      font-weight: 600;
      color: $red-500;
    }
  }

  &_card {
    background-color: $primary;
    border-radius: 2rem;
    height: 30rem;

  }
}

.razoes {
  display: flex;
  flex-direction: column;

  &_text {
    font-family: $ff-primary;
    text-align: right;
    margin: 4rem 0;
    
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
      font-weight: 600;
      color: $red-500;
    }
  }

  &_cards {
    display: flex;
    flex-direction: column;
    gap: 2rem;
 
    &_card {
      background-color: $primary;
      border-radius: 2rem;
      height: 40rem;
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