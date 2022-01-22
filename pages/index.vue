<template>
<div>
  <header class="header">
    <div class="header_text">
      <h3>INDAIATUBA - SP</h3>
      <h1>Semi-novos em Indaiatuba</h1>
      <h2>Semi-novos em Indaiatuba</h2>
    </div>
    <div class="header_card"></div>
    <div class="header_card"></div>
  </header>
  <section class="razoes">
    <div class="razoes_text">
      <h3>COMPRA CERTA</h3>
      <h1>Benefícios de comprar com a Avenida veículos</h1>
      <h2>Atuando no mercado automobilístico, nós da Avenida Veículos buscamos auxiliar nossos clientes afim de encontrar o melhor negócio, agindo como consultores, não somente como simples vendedores.</h2>
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
  justify-content: space-between;
  padding: 6rem 12rem;
  gap: 2rem;

  &_text {
    font-family: $ff-primary;
    
    h1 {
      font-size: 4rem;
      font-weight: bolder;
      color: $gray-600;
    }

    h2 {
      font-size: 2rem;
      font-weight: lighter;
      color: $gray-500;
      padding-top: 1rem;
    }

    h3 {
      font-size: 1.6rem;
      font-weight: bolder;
      color: $red-500;
    }
  }

  &_card {
    background-color: $primary;
    border-radius: 2rem;
    height: 40rem;
    width: 40rem;

  }
}

.razoes {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 6rem 12rem;
  gap: 2rem;

  &_text {
    font-family: $ff-primary;
    text-align: right;
    margin: 4rem 0;
    padding-left: 25rem;
    
    h1 {
      font-size: 4rem;
      font-weight: bolder;
      color: $gray-600;
    }

    h2 {
      font-size: 2rem;
      font-weight: lighter;
      color: $gray-500;
      padding-top: 1rem;
    }

    h3 {
      font-size: 1.6rem;
      font-weight: bolder;
      color: $red-500;
    }
  }

  &_cards {
    display: flex;
    gap: 2rem;
 
    &_card {
      background-color: $primary;
      border-radius: 2rem;
      height: 40rem;
      width: 35rem;
    }
  }
}

.feedback {
  display: flex;
  justify-content: space-between;
  margin: 6rem 0;
  padding: 6rem 20rem;
  gap: 2rem;

  &_card {
    background-color: $primary;
    border-radius: 100%;
    height: 20rem;
    width: 20rem;
  }
}
</style>