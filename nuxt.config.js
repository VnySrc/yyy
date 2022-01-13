export default {
    head: {
      title: 'Avenida Automóveis',
      titleTemplate: 'Veículos seminovos em Indaiatuba - SP | %s',
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
    styleResources: {
      scss: ['./assets/scss/main.scss']
    }
  }