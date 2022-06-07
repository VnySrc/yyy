<template>
  <section class="sobre">
    <div class="sobre_empresa">
      <nuxt-img format="webp" src="/img/avenida.jpg" />
      <div class="sobre_empresa_texto">
        <p>Atuando no mercado automobilístico, nós da Avenida Veículos buscamos auxiliar nossos clientes afim de encontrar o melhor negócio, agindo como consultores, não somente como simples vendedores.</p>
        <p>Nossa Missão é ver a satisfação total dos nossos clientes, realizando nossas transações sempre de forma ágil, transparente e com o melhor custo benefício. Respeito e seriedade na negociação de seu veículo é realmente nosso lema, pois sabemos os transtornos causados por negociações mal orientadas, confusas ou nebulosas.</p>
        <p> E é trabalhando exatamente desta forma que nós da Avenida Veículos continuamos fidelizando clientes para toda a vida. Esperamos sua visita.</p>
      </div>
    </div>
    <div class="sobre_info">
      <div class="sobre_info_vm">
        <div class="sobre_info_vm_vision">
          <div>
            <IconsEye />
            <h4>Visão</h4>
          </div>
          <p>Criar vínculos fortes e duradouros com os clientes, fornecendo-lhes as melhores experiências em compra e venda de veículos.</p>
        </div>
        <div class="sobre_info_vm_mission">
          <div>
            <IconsTarget />
            <h4>Missão</h4>
          </div>
          <p> Ser a loja de seminovos que melhor entende e satisfaz as necessidades do cliente, entregando produtos de qualidade e fornecendo confiança.</p>
        </div>
      </div>
      <div class="sobre_info_value">
        <div class="sobre_info_value_icon">
          <IconsHeart />
          <h4>Valores</h4>
        </div>
        <div class="sobre_info_value_sub">
          <h5>Transparência</h5>
          <p>Nos expressamos de forma sincera e somos íntegros em nossa maneira de atender o publico.</p>
        </div>
        <div class="sobre_info_value_sub">
          <h5>Perseverança</h5>
          <p>Nos esforçamos e dedicamos a ajudar superar obstáculos.</p>
        </div>
        <div class="sobre_info_value_sub">
          <h5>Responsabilidade</h5>
          <p>Temos vocação para agir e honrar nossos compromissos com quem nos comunicamos.</p>
        </div>
        <div class="sobre_info_value_sub">
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
    @include md {
      display: flex;
      gap: 2rem;
    }

    &_texto {
      @include md {
        width: 90rem;
      }

      p {
        font-family: $ff-s;
        font-size: 2rem;
        color: $gray-500;
        margin: 0 0 1.5rem 0;
      }
    }

    img {
      width: 100%;
      height: 25rem;
      object-fit: cover;
      margin: 0 0 1rem 0;
      border-bottom: solid $p-600 .8rem;

      @include md {
        max-width: 60rem;
        height: 38rem;
      }
    }
  }

  &_info {
    margin: 1rem 0 0 0;

    @include md {
      padding: 0 8rem 0 8rem;
    }

    p {
      color: $gray-500;
      text-align: center;
      font-size: 1.8rem;
      font-family: $ff-s;
    }

    &_vm {
      @include sm-up {
        display: flex;
        gap: 4rem;
      }

      &_vision, &_mission {
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
          color: $p-600;
          padding: 1rem;
          border-bottom: solid .5rem $p-600;
        }
      }
    }


    &_value {
      &_icon {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 2rem 0;

        svg {
          fill: $p-600;
          height: 4rem;
          margin-bottom: 1rem;
        }

        h4 {
          font-size: 2rem;
          color: $p-600;
          padding: 1rem;
          border-bottom: solid .5rem $p-600;
        }
      }
      
      &_sub {
        border-left: solid .5rem $s-400;
        padding-left: 1rem;
        margin: 3rem 0 0 0;

        @include md {
          margin: 6rem 8rem;
        }

        p {
          color: $gray-500;
          text-align: left;
          font-size: 1.8rem;
          font-family: $ff-s;
        }
        
        h5 {
          font-size: 2rem;
          color: $s-400;
          margin: 1rem 0;
        }

        &:nth-child(odd) {
          border-right: solid .5rem $s-400;
          padding-right: 1rem;
          border-left: none;
          padding-left: 0;

          p, h5 {
            text-align: right;
          }
          
        }
      }

    }
  }
}

</style>