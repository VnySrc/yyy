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

  buildModules: [
    '@nuxtjs/style-resources',
  ],

  modules: [
    '@nuxtjs/axios',
  ],

  axios: {
    baseURL: 'https://app.revendamais.com.br/application/index.php/apiGeneratorXml/generator/appdaloja/f8a950790397fa2961e7dd59b4860b1f5586.json'
  },

  plugins: [
    '~/plugins/axios'
  ],

  styleResources: {
    scss: ['./assets/scss/main.scss']
  }
}