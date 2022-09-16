<template>
  <section class="contato">
    <div class="contato_media">
      <div class="contato_media_mail">
        <h2>Entre em contato</h2>
        <p>Nossa equipe está à sua disposição em diversos canais, tire suas dúvidas com nossos vendedores ou tenha todo
          o suporte ao comprar seu seminovo com o serviço de pós-venda especializado.</p>
        <div class="contato_media_mail_numbers">
          <a href="tel:+551938350800">
            <h3>Loja</h3>
            <h4>(19) 3835-0800</h4>
          </a>
          <a :href="links.vendas">
            <h3>Vendas</h3>
            <h4>(19) 99797-6865</h4>
          </a>
          <a :href="links.pos">
            <h3>Pós venda</h3>
            <h4>(19) 97822-6748</h4>
          </a>
          <a :href="links.adm">
            <h3>Administração</h3>
            <h4>(19) 99221-4727</h4>
          </a>
          <a href="mailto:avenidaveiculosindaiatuba@gmail.com">
            <h3>Email</h3>
            <h4>avenidaveiculosindaiatuba@gmail.com</h4>
          </a>
        </div>
      </div>
      <div class="contato_media_social">
        <h2>Siga nossas redes socias</h2>
        <p>Conteúdo original sobre nossos serviços e tudo que involve o mundo automobilístico</p>
        <div class="contato_media_social_icons">
          <a :href="links.vendas" target="_blank">
            <IconsWhatsapp class="contato_media_social_icons_whatsapp" /></a>
          <a :href="links.face" target="_blank">
            <IconsFacebook class="contato_media_social_icons_facebook" /></a>
          <a :href="links.insta" target="_blank">
            <IconsInstagram class="contato_media_social_icons_instagram" /></a>
          <a :href="links.tiktok" target="_blank">
            <IconsTiktok class="contato_media_social_icons_tiktok" /></a>
          <a :href="links.youtube" target="_blank">
            <IconsYoutube class="contato_media_social_icons_youtube" /></a>
        </div>
      </div>
    </div>
    <div class="contato_shop">
      <div class="contato_shop_title">
        <h2>Visite nossa loja</h2>
        <div>
          <span>Segunda à sexta 8:00 - 18:00</span>
          <span>|</span>
          <span>Sábado 08:30 - 18:30</span>
        </div>
        <a :href="links.map" target="_blank">Av. Visconde de Indaiatuba, 921 , Vila Vitòria - Indaiatuba/SP</a>
      </div>
      <div class="contato_shop_map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.161227703695!2d-47.1967446!3d-23.091193099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf4b4afcd6dc21%3A0x756a56845440c7b1!2sAvenida%20Ve%C3%ADculos%20Indaiatuba!5e0!3m2!1spt-BR!2sbr!4v1651793602801!5m2!1spt-BR!2sbr"
            style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </section>
</template>
<script>
  import {
    mapState
  } from "vuex";

  export default {
    head: {
        title: 'Avenida Veículos',
        titleTemplate: 'Entre em contato | %s'
    },
    computed: {
      ...mapState('links', ['links'])
    }
  }
</script>

<style lang="scss">
  .contato {

    h2 {
      color: $p-600;
      font-size: 2.4rem;
      margin: 0 0 1rem 0;
    }

    &_media {
      @include md {
        display: flex;
        align-content: space-evenly;
        justify-content: space-between;
        margin-bottom: 6rem;
      }

      &_social {
        margin: 6rem 0;
        text-align: right;

        h2 {
          border-right: solid $gray-400 .6rem;
          padding: .5rem 1rem;
        }

        @include md {
          margin: 0;
        }

        p {
          font-size: 1.8rem;
          font-family: $ff-s;
          color: $gray-500;
        }

        &_icons {
          margin: 3rem 0 0 0;

          svg {
            height: 2.5rem;
            fill: $gray-500;
            stroke: $gray-500;

            &:nth-child(odd) {
              margin: 0 1rem;
            }

            &:hover {
              fill: $gray-700;
              stroke: $gray-700;
            }
          }
        }
      }

      &_mail {
        p {
          font-size: 1.8rem;
          font-family: $ff-s;
          color: $gray-500;

          @include md {
            width: 70%;
          }
        }

        h2 {
          border-left: solid $gray-400 .6rem;
          padding: .5rem 1rem;
        }

        &_numbers {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem 5rem;
          margin: 2rem 0 0 0;

          @include md {
            h3 {
              font-size: 2.2rem;
            }

            h4 {
              font-size: 2rem;
            }
          }

          a {
            margin: 1rem 0;
            font-weight: bold;
            padding: 0 1rem;
            border-left: solid $s-300 .5rem;

            &:hover {
              h3 {
                color: $gray-500;
              }
            }

            h3 {
              font-size: 1.8rem;
              color: $gray-600;
              margin-bottom: .5rem;
            }

            h4 {
              font-size: 1.4rem;
              color: $s-400;
            }

            &:hover {
              color: $p-600;
            }
          }
        }
      }
    }

    &_shop {
      
      &_title {
        padding: .5rem 1rem;
        border-left: solid $gray-400 .6rem;

        div {
          margin: 0 0 .8rem 0;

          span {
            font-size: 1.2rem;
            font-weight: bold;
            color: $gray-600;

            &:nth-child(2) {
              margin: 0 .5rem;
            }
          }
        }

        a {
            font-weight: bold;
            font-family: $ff-s;
            font-size: 1.3rem;
            color: $gray-500;

            &:hover {
                color: $gray-700;
            }
        }
      }

      &_map {
        width: 100%;
        margin: 2rem 0 0 0;
        box-shadow: 0.2rem 0.2rem 2rem rgba(0, 0, 0, 0.1);

        iframe {
          width: 100%;
          height: 30rem;
        }
      }
    }
  }
</style>
