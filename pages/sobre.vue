<template>
  <section class="sobre">
    <div class="sobre_empresa">
      <nuxt-img format="webp" src="/img/avenida.jpg" />
      <p>Atuando no mercado automobilístico, nós da Avenida Veículos buscamos auxiliar nossos clientes afim de encontrar o melhor negócio, agindo como consultores, não somente como simples vendedores.</p>
      <p>Nossa Missão é ver a satisfação total dos nossos clientes, realizando nossas transações sempre de forma ágil, transparente e com o melhor custo benefício. Respeito e seriedade na negociação de seu veículo é realmente nosso lema, pois sabemos os transtornos causados por negociações mal orientadas, confusas ou nebulosas.</p>
      <p> E é trabalhando exatamente desta forma que nós da Avenida Veículos continuamos fidelizando clientes para toda a vida. Esperamos sua visita.</p>
    </div>
    <div class="sobre_info">
      <div class="sobre_info_vision">
        <div>
          <IconsEye />
          <h4>Visão</h4>
        </div>
        <p>Criar vínculos fortes e duradouros com os clientes, fornecendo-lhes as melhores experiências em compra e venda de veículos.</p>
      </div>
      <div class="sobre_info_mission">
        <div>
          <IconsTarget />
          <h4>Missão</h4>
        </div>
        <p> Ser a loja de seminovos que melhor entende e satisfaz as necessidades do cliente, entregando produtos de qualidade e fornecendo confiança.</p>
      </div>
      <div class="sobre_info_value">
        <div>
          <IconsHeart />
          <h4>Valores</h4>
        </div>
        <div>
          <h5>Transparência</h5>
          <p>Nos expressamos de forma sincera e somos íntegros em nossa maneira de atender o publico.</p>
        </div>
        <div>
          <h5>Perseverança</h5>
          <p>Nos esforçamos e dedicamos a ajudar superar obstáculos.</p>
        </div>
        <div>
          <h5>Responsabilidade</h5>
          <p>Temos vocação para agir e honrar nossos compromissos com quem nos comunicamos.</p>
        </div>
        <div>
          <h5>Qualidade</h5>
          <p>Consideramos que não há limites para atingir o mais alto padrão de qualidade e satisfação em nossas atitudes.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">

.sobre {
  padding: 4rem 2rem;

  &_empresa {

    p {
      font-family: $ff-s;
      font-size: 2rem;
      color: $gray-500;
      margin: 1rem 0;
    }

    img {
      width: 100%;
      height: 20rem;
      object-fit: cover;
      margin: 0 0 1rem 0;
      border-bottom: solid $p-500 .8rem;
    }
  }

  &_info {
    padding: 1rem 0;

    p {
      color: $gray-500;
      text-align: center;
      font-size: 1.6rem;
      font-family: $ff-s;
    }

    &_vision, &_mission, &_value {
      padding: 2rem 0;

      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 2rem 0;
      }

      svg {
        fill: $p-600;
        height: 4rem;
        margin-bottom: 1rem;
      }

      h4 {
        font-size: 2rem;
        text-align: center;
        color: $p-500;
      }
    }

    &_value {
      h5 {
        font-size: 1.6rem;
        color: $p-400;
        margin: 1rem 0;
        text-align: left;
      }
    }
  }
}

</style>