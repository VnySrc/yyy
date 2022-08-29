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
      { name:"facebook-domain-verification", content:"n2p890nsirhpvwm80jfag4cjwwlpkq"},
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Vamos juntos achar um veículo perfeito para você | Avenida Veículos'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Atuando no mercado automobilístico, nós da Avenida Veículos buscamos auxiliar nossos clientes afim de encontrar o melhor negócio, agindo como consultores, não somente como simples vendedores.'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://iili.io/4XWtDu.jpg'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://avenidaveiculosindaiatuba.com.br/'
      },
      {
        property: 'og:locale',
        content: 'pt-br'
      }
    ]
  },
  hooks: {
    'render:route': (_url, result) => {
      result.html = result.html
        .replace(/ data-n-head=".*?"/gi, '')
    }
  },
  plugins: [
    { src: '~/plugins/vue-fb-customer-chat.js', ssr: false }
  ],
  axios: {
    baseURL: 'https://integreauto.com.br/anuncios/listaAnunciosParceiros/17/1931.xml',
    https: true
  },

  buildModules: [
    '@nuxtjs/style-resources',
    '@nuxt/image'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxt/content'
  ],

  styleResources: {
    scss: ['./assets/scss/main.scss']
  }
}