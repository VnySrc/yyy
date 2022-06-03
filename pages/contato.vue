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
        <span>Segunda à sábado / 08:30 - 18:30</span>
      </div>
      <div class="contato_shop_map">
        <nuxt-img format="webp" src="/img/office/office8.jpg" />
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.161227703695!2d-47.1967446!3d-23.091193099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf4b4afcd6dc21%3A0x756a56845440c7b1!2sAvenida%20Ve%C3%ADculos%20Indaiatuba!5e0!3m2!1spt-BR!2sbr!4v1651793602801!5m2!1spt-BR!2sbr"
            style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <p>Av. Visconde de Indaiatuba, 921 , Vila Vitòria 1 - Indaiatuba/SP</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import {
    mapState
  } from "vuex";

  export default {
    computed: {
      ...mapState('links', ['links'])
    }
  }
</script>

<style lang="scss">
  .contato {
    padding: 4rem 2rem;

    h2 {
      font-size: 2.8rem;
      color: $p-500;
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
          border-right: solid $p-500 .8rem;
          padding-right: 1rem;
        }

        @include md {
          margin: 0;
        }

        p {
          font-size: 2rem;
          font-family: $ff-s;
          color: $gray-500;
        }

        &_icons {
          margin: 2rem 0 0 0;

          svg {
            height: 4rem;

            &:hover {
              fill: $gray-300;
            }
          }

          &_whatsapp {
            fill: #0DC143;
          }

          &_facebook {
            fill: $p-500;
          }

          &_instagram {
            fill: $s-400;
          }

          &_tiktok {
            fill: $gray-800;
          }

          &_youtube {
            fill: $s-500;
          }
        }
      }

      &_mail {
        p {
          font-size: 2rem;
          font-family: $ff-s;
          color: $gray-500;

          @include md {
            width: 70%;
          }
        }

        h2 {
          border-left: solid $p-500 .8rem;
          padding-left: 1rem;
        }

        &_numbers {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          margin: 2rem 0 0 0;

          a {
            margin: 1rem 0;
            font-weight: bold;
            padding: 0 1rem;
            border-left: solid $s-400 .5rem;

            h3 {
              font-size: 2rem;
              color: $gray-600;
              margin-bottom: .5rem;
            }

            h4 {
              font-size: 1.6rem;
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
        padding: 0 1rem;
        border-left: solid $p-500 .8rem;

        span {
          font-family: $ff-s;
          font-size: 1.4rem;
          color: $gray-600;
          margin: .5rem 0;
        }
      }

      &_map {
        margin: 2rem 0 0 0;

        @include sm-up {
          display: flex;
          justify-content: space-between;
        }

        img {
          width: 100%;
          height: 20rem;
          object-fit: cover;
          border-bottom: solid $p-500 .8rem;

          @include sm-up {
            width: 50rem;
            height: 20rem;
            margin-right: 2rem;
          }
        }

        div {
          width: 100%;

          iframe {
            width: 100%;
            height: 20rem;
            margin: 2rem 0 1rem 0;

            @include sm-up {
              margin: 0 0 1rem 0;
            }
          }

          p {
            color: $s-400;
            font-size: 1.2rem;
            font-weight: bold;
            text-align: right;
          }
        }
      }
    }
  }
</style>