const xml2js = require('xml2js'),
      parser = new xml2js.Parser({explicitRoot: false, explicitArray: false});

export default {
    async fetchXml({ commit }) {
        const xml = await $axios.$get('https://integreauto.com.br/anuncios/listaAnunciosParceiros/17/1931.xml')
        parser.parseStringPromise(xml)
        .then(function (res) {
            commit('setCars', res.data);
        })
    }
}