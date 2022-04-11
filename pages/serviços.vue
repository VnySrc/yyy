<template>
  <section class="services">
    <div class="services_service">
      <div>
        <nuxt-img format="webp" src="/img/warranty.jpg" />
      </div>
      <h3>Garantia de até 1 ano inédita entre as lojas de seminovos no Brasil</h3>
      <p>Carros seminovos ou usados com garantia de até 1 ano.</p>
    </div>
    <div class="services_service">
      <div>
        <nuxt-img format="webp" src="/img/finance.jpg" />
      </div>
      <h3>Financiamento rápido que cabe no seu bolso sem burocracia</h3>
      <p>Diversas opções de financiamento para você comprar seu seminovo com total segurança e rapidez.</p>
    </div>
    <div class="services_service">
      <div>
        <nuxt-img format="webp" src="/img/present.jpg" />
      </div>
      <h3>Compre e receba em casa como presente</h3>
      <p>Compre e receba em casa experimente a entrega domiciliar, tenha uma experiência de compra totalmente diferente.</p>
    </div>
    <div class="services_service">
      <div>
        <nuxt-img format="webp" src="/img/check.jpg" />
      </div>
      <h3>Carros com certificados de qualidade</h3>
      <p> Todos os nossos carros passam por uma inspeção de até 240 itens para garantir sua qualidade. Além de terem Vistoria cautelar.</p>
    </div>
    <div class="services_service"><div>
        <nuxt-img format="webp" src="/img/assistant.jpg" />
      </div>
      <h3>Melhor Pós-venda</h3>
      <p>Serviço de pós-venda especializado, tenha todo o suporte ao comprar seu seminovo.</p></div>
  </section>
</template>

<style lang="scss">

.services {
  display: flex;
  flex-direction: column;
  gap: 5rem;
  padding: 4rem 2rem;

  &_service {

    h3 {
      font-size: 3rem;
      font-weight: bold;
      color: $p-500;
      margin: 1rem 0;
    }

    p {
      font-size: 2rem;
      color: $gray-500;
    }

    div {
      position: relative;
      height: 20rem;

      img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}

</style>