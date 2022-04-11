<template>
  <section class="sobre">
    <div class="sobre_info">
      <div>
        <nuxt-img format="webp" src="/img/avenida.jpg" />
      </div>
      <p>Atuando no mercado automobilístico, nós da Avenida Veículos buscamos auxiliar nossos clientes afim de encontrar o melhor negócio, agindo como consultores, não somente como simples vendedores.<br>Nossa Missão é ver a satisfação total dos nossos clientes, realizando nossas transações sempre de forma ágil, transparente e com o melhor custo benefício. Respeito e Seriedade na negociação de seu veículo é realmente nosso lema, pois sabemos os transtornos causados por negociações mal orientadas, confusas ou nebulosas. E é trabalhando exatamente desta forma que nós da Avenida Veículos continuamos fidelizando clientes para toda a vida. Esperamos sua visita.</p>
    </div>
  </section>
</template>

<style lang="scss">

.sobre {
  padding: 4rem 2rem;

  &_info {

    p {
      font-family: $ff-s;
      font-size: 2rem;
      color: $gray-700;
      margin: 2rem 0;
    }

    div {
      height: 20rem;
      position: relative;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
      }
    }
  }
}

</style>