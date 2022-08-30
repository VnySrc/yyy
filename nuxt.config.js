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
      { name: 'dev' , content: '@VnySrc'},
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name:"facebook-domain-verification", content:"n2p890nsirhpvwm80jfag4cjwwlpkq"},
    ]
  },
  hooks: {
    'render:route': (_url, result) => {
      result.html = result.html
        .replace(/ data-n-head=".*?"/gi, '')
    }
  },
  script:[      
    //{src:'pixel.js', type: 'text/javascript'}
    {src: "https://www.googletagmanager.com/gtag/js?id=AW-723781736"}
  ],
  plugins: [
    { src: '~/plugins/vue-fb-customer-chat.js', ssr: false },
    { src: '~/plugins/facebook-events.js' },
    { src: '~/plugins/google-analytcs.js'},
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