const xml2js = require('xml2js'),
      parser = new xml2js.Parser({explicitRoot: false, explicitArray: false});

export default {
    async fetchXml({ commit }) {
        const xml = await $axios.$get()
        parser.parseStringPromise(xml)
        .then(function (res) {
            commit('setCars', res.data);
        })
    }
}