export default {
  target: 'static',
  components: true,

  head: {
    title: 'Avenida Veículos',
    titleTemplate: 'Vamos juntos achar um veículo perfeito para você | %s',
    htmlAttrs: {
      lang: 'pt-br',
      amp: true
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'avenida',
        name: 'description',
        content: 'Seminovos em Indaiatuba - São Paulo'
      }
    ],
  },

  axios: {
    baseURL: 'https://integreauto.com.br/anuncios/listaAnunciosParceiros/17/1931.xml',
    https: true
  },

  buildModules: [
    '@nuxtjs/style-resources',
    '@nuxt/image'
  ],

  modules: [
    '@nuxtjs/axios'
  ],

  styleResources: {
    scss: ['./assets/scss/main.scss']
  }
}