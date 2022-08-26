<template>
  <section class="sobre">
    <div class="sobre_empresa">
      <div class="sobre_empresa_galeria">
        <div id="modal-id" class="invisible" onclick="this.setAttribute('class', 'invisible')">
          <div class="modal-img">
              <img id="modal-img-id" src= "/office/office2.jpg"/>
          </div>
        </div>
          <swiper
          :options="swiperOptionTop"
          ref="swiperTop"
          >
              <swiper-slide v-for="value in office" :key="value.id" class="sobre_empresa_galeria_img">
                  <img onclick="document.getElementById('modal-id').setAttribute('class', 'modal'), document.getElementById('modal-img-id').setAttribute('src', this.src)" :src="value" placeholder />
              </swiper-slide>
              <div
                  class="swiper-button-next swiper-button-white"
                  slot="button-next"
              ></div>
              <div
                  class="swiper-button-prev swiper-button-white"
                  slot="button-prev"
              ></div>
          </swiper>
          <swiper
          class="sobre_empresa_galeria_thumbs"
          :options="swiperOptionThumbs"
          ref="swiperThumbs"
          >
              <swiper-slide v-for="value in office" :key="value.id">
                  <img class="slides" :src="value" placeholder />
              </swiper-slide>
          </swiper>
      </div>
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

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

    export default {
      head: {
          title: 'Avenida Veículos',
          titleTemplate: 'Conheça nossa história de sucesso | %s'
      },
      data() {
        return {
           office: [
              "https://iili.io/4CVpj9.jpg",
              "https://iili.io/4CVmT7.md.jpg",
              "https://iili.io/4CVyQe.md.jpg",
              "https://iili.io/4CWHCu.md.jpg",
              "https://iili.io/4CWJEb.jpg",
              "https://iili.io/4CWd4j.jpg",
              "https://iili.io/4CW33x.jpg",
              "https://iili.io/4CWFYQ.md.jpg",
              "https://iili.io/4CWfyB.md.jpg",
              "https://iili.io/4CWKvV.jpg",
              "https://iili.io/4CWBTP.jpg",
              "https://iili.io/4CWCj1.md.jpg",
              "https://iili.io/4CWxCg.jpg",
              "https://iili.io/4CWzGa.md.jpg",
              "https://iili.io/4CWu3v.jpg",
              "https://iili.io/4CWI6J.md.jpg",
              "https://iili.io/4CWAaR.jpg",
              "https://iili.io/4CWRvp.jpg",
              "https://iili.io/4CW5yN.md.jpg",
              "https://iili.io/4CWYuI.jpg",
              "https://iili.io/4CWajt.md.jpg",
        ],

          swiperOptionTop: {
              loop: true,
              loopedSlides: 5, // looped slides should be the same
              spaceBetween: 5,
              navigation: {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
              },
          },
          swiperOptionThumbs: {
              loop: true,
              loopedSlides: 5, // looped slides should be the same
              spaceBetween: 5,
              slidesPerView: "auto",
              slideToClickedSlide: true
          }
        }
      },
      mounted() {
          this.$nextTick(() => {
          const swiperTop = this.$refs.swiperTop.$swiper;
          const swiperThumbs = this.$refs.swiperThumbs.$swiper;
          swiperTop.controller.control = swiperThumbs;
          swiperThumbs.controller.control = swiperTop;
          });
      },
      components: {
          Swiper,
          SwiperSlide,
      },
       methods: {
    teste(e) {
      console.log(this)
    }
  },
    }
</script>

<style lang="scss">
.modal{
   position: fixed;
            z-index: 100;
            width: 300px;
            height: 200px;
            padding: 20px;
            //background-color: rgba(0,0,0,0.7);
            
            /* Center the dialog */
            top: 50%;
            left: 50%;
            transform: translate(-37%, -50%);
            width: 80%;
            height: 80%;
}
.modal-img{ 
   
}
.modal-img img { 
 width: 70%;
height: 70%;
  
}

.invisible {
  display: none;
}


.sobre {
  padding: 4rem 2rem;

  &_empresa {
    @include md {
      display: flex;
      gap: 4rem;
    }

    &_texto {
      p {
        font-family: $ff-s;
        font-size: 2.2rem;
        color: $gray-600;
        margin: 0 0 1.5rem 0;
      }
    }

    &_galeria {
      margin: 0 0 2rem 0;

      @include md {
        max-width: 50%;
      }

      &_img {
        height: 30rem;

        @include sm-up {
          height: 40rem;
        }

        img {
          width: 100%;
          height: 100%;
          border-radius: .5rem;
          object-fit: cover;
        }
      }

      &_thumbs {
          width: 100%;
          margin: .5rem 0 0 0;
          box-sizing: border-box;
          height: 8rem;

          .swiper-slide {
              width: 25%;
              height: 100%;
              opacity: 0.6;
          }

          .swiper-slide-active {
              opacity: 1;
          }

          img {
            width: 100%;
            height: 100%;
            border-radius: .5rem;
            object-fit: cover;
          }
      }
    }
  }

  &_info {
    margin: 1rem 0 0 0;

    p {
      color: $gray-600;
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
          fill: $p-700;
          height: 4rem;
        }

        h4 {
          font-size: 2rem;
          text-align: center;
          color: $p-600;
          padding: 1rem;
          border-bottom: solid .5rem $gray-400;
        }
      }
    }


    &_value {
      @include sm-up {
        margin: 8rem 0 0 0;
      }

      &_icon {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 2rem 0;

        svg {
          fill: $p-700;
          height: 4rem;
          margin-bottom: 1rem;
        }

        h4 {
          font-size: 2rem;
          color: $p-600;
          padding: 1rem;
          border-bottom: solid .5rem $gray-400;
        }
      }
      
      &_sub {
        border-left: solid .5rem $gray-400;
        padding-left: 1rem;
        margin: 3rem 0 0 0;

        @include md {
          margin: 6rem 8rem;
        }

        p {
          color: $gray-600;
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
          border-right: solid .5rem $gray-400;
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