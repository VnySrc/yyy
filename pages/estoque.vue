<template>
  <div class="estoque">
    <div class="estoque_filter">
      <div>
        <select v-model="sortBrand" @change="orderBrand($event)">
          <option value="" @click="cleanFilter">Marca</option>
          <option v-for="(value, index) in getBrand" :key="index" :value="value">
            {{ value }}
          </option>
        </select>
        <select v-model="sortModel" @change="orderModel($event)">
          <option value="" @click="cleanFilter">Modelo</option>
          <option v-for="(value, index) in getModel" :key="index" :value="value">
            {{ value }}
          </option>
        </select>
        <select v-model="sortType" :change="sortItem">
          <option value="" @click="cleanFilter">A - Z</option>
          <option value="yearUp">Mais novo</option>
          <option value="yearDown">Mais velho</option>
          <option value="priceUp">Maior preço</option>
          <option value="priceDown">Menor preço</option>
          <option value="kmDown">Menor Km</option>
          <option value="price40">Até 40 mil</option>
          <option value="price50">Até 50 mil</option>
          <option value="price60">Até 60 mil</option>
        </select>
        <span @click="cleanAllFilters" @change="orderModel($event)">
          Limpar Filtros
        </span>
      </div>
    </div>
    <!--?img=${value.fotos.imagem[0]} -->
    <div class="estoque_cards">
      <nuxt-link 
        :to="`/estoque/${value.id}`"
        v-for="value in cars"
        :key="value.id"
        class="estoque_cards_card"
      >
        <div class="estoque_cards_card_info">
          <div class="estoque_cards_card_info_img">
            <img :src="value.fotos.imagem[0]" loading="lazy"/> <!-- onclick="localStorage? localStorage.imgUrl = this.src : return" -->
          </div>
          <div class="estoque_cards_card_info_title">
            <h1>{{ value.marca_descricao }} {{ value.modelo_descricao }}</h1>
            <h2>{{ value.versao_descricao }}</h2>
          </div>
          <div class="estoque_cards_card_info_price">
            <h3>{{ value.valor_final | price }}</h3>
            <div>
              <span>{{ value.ano_fabricacao_descricao }} / {{ value.ano_modelo_descricao }}</span>
              <span>{{ value.combustivel_descricao | gas }}</span>
              <span>{{ value.kilometragem | km }}</span>
            </div>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
const xml2js = require("xml2js"),
  parser = new xml2js.Parser({ explicitRoot: false, explicitArray: false });
  
export default {
  data() {
    return {
      cars: [],
      defaultcars: [],
      sortType: "",
      sortModel: "",
      sortBrand: "",
    };
  },
  head: {
      title: 'Avenida Veículos',
      titleTemplate: 'Confira nosso estoque | %s'
  },
  filters: {
    gas(value) {
      if (value === `Gasolina e álcool`) {
        return `Flex`;
      } else {
        return value;
      }
    },
    price(value) {
      return Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(value);
    },
    km(value) {
      return Intl.NumberFormat("pt-BR", {
        style: "unit",
        unit: "kilometer",
      }).format(value);
    }
  },
  computed: {
    sortItem() {
      if (this.sortType == "") {
         // this.setFiltersToDefaultValueByBrand
         //this.cars = this.cars.sort((carroA, carroB) => carroA.marca_descricao > carroB.marca_descricao ? -1 : true);
      }
      if (this.sortType == "priceUp") {
        this.setFiltersToDefaultValueByBrand
        this.cars = this.cars.sort(
          (prev, curr) => curr.valor_final - prev.valor_final
        );
        const urlParams = new URLSearchParams(window.location.search);
            urlParams.delete("year")
            urlParams.delete("price")
            urlParams.delete("km")
            urlParams.set("price", "up")
          let state = history.state;
	        let title = document.title;
	        let url = window.location.origin + window.location.pathname +"?"+ encodeURI(urlParams);
          history.pushState(state, title, url);
      }
      if (this.sortType == "priceDown") {
        this.setFiltersToDefaultValueByBrand
        this.cars = this.cars.sort(
          (prev, curr) => prev.valor_final - curr.valor_final
        );
        const urlParams = new URLSearchParams(window.location.search);
            urlParams.delete("year")
            urlParams.delete("price")
            urlParams.delete("km")
            urlParams.set("price", "down")
          let state = history.state;
	        let title = document.title;
	        let url = window.location.origin + window.location.pathname +"?"+ encodeURI(urlParams);
          history.pushState(state, title, url);
      }
      if (this.sortType == "yearUp") {
        this.setFiltersToDefaultValueByBrand
        this.cars = this.cars.sort(
          (prev, curr) =>
            curr.ano_fabricacao_descricao - prev.ano_fabricacao_descricao
        );
        const urlParams = new URLSearchParams(window.location.search);
            urlParams.delete("year")
            urlParams.delete("price")
            urlParams.delete("km")
            urlParams.set("year", "up")
          let state = history.state;
	        let title = document.title;
	        let url = window.location.origin + window.location.pathname +"?"+ encodeURI(urlParams);
          history.pushState(state, title, url);

      }
      if (this.sortType == "yearDown") {
        this.setFiltersToDefaultValueByBrand
        this.cars = this.cars.sort(
          (prev, curr) =>
            prev.ano_fabricacao_descricao - curr.ano_fabricacao_descricao
        );
        const urlParams = new URLSearchParams(window.location.search);
            urlParams.delete("year")
            urlParams.delete("price")
            urlParams.delete("km")
            urlParams.set("year", "down")
          let state = history.state;
	        let title = document.title;
	        let url = window.location.origin + window.location.pathname +"?"+ encodeURI(urlParams);
          history.pushState(state, title, url);

      }
      if (this.sortType == "price40") {
        this.setFiltersToDefaultValueByBrand
        this.cars = this.cars.filter((el) => el.valor_final <= 40000);
        const urlParams = new URLSearchParams(window.location.search);
            urlParams.delete("year")
            urlParams.delete("price")
            urlParams.delete("km")
            urlParams.set("price", "40")
          let state = history.state;
	        let title = document.title;
	        let url = window.location.origin + window.location.pathname +"?"+ encodeURI(urlParams);
          history.pushState(state, title, url);
      }
      if (this.sortType == "price50") {
        this.setFiltersToDefaultValueByBrand
        this.cars = this.cars.filter((el) => el.valor_final <= 50000);
        const urlParams = new URLSearchParams(window.location.search);
            urlParams.delete("year")
            urlParams.delete("price")
            urlParams.delete("km")
            urlParams.set("price", "50")
          let state = history.state;
	        let title = document.title;
	        let url = window.location.origin + window.location.pathname +"?"+ encodeURI(urlParams);
          history.pushState(state, title, url);
      }
      if (this.sortType == "price60") {
        this.setFiltersToDefaultValueByBrand
        this.cars = this.cars.filter((el) => el.valor_final <= 60000);
        const urlParams = new URLSearchParams(window.location.search);
            urlParams.delete("year")
            urlParams.delete("price")
            urlParams.delete("km")
            urlParams.set("price", "50")
          let state = history.state;
	        let title = document.title;
	        let url = window.location.origin + window.location.pathname +"?"+ encodeURI(urlParams);
          history.pushState(state, title, url);
      }
      if (this.sortType == "kmDown") {
        this.setFiltersToDefaultValueByBrand
        this.cars = this.cars.sort((carA, carB) => parseInt(carA.kilometragem)  < parseInt(carB.kilometragem) ? -1 : true)

        const urlParams = new URLSearchParams(window.location.search);
            urlParams.delete("year")
            urlParams.delete("price")
            urlParams.delete("km")
            urlParams.set("km", "down")
          let state = history.state;
	        let title = document.title;
	        let url = window.location.origin + window.location.pathname +"?"+ encodeURI(urlParams);
          history.pushState(state, title, url);
      }
    },
    getBrand() {
      return this.defaultcars
        .map((el) => el.marca_descricao)
       .sort()
        .filter((value, index, arr) => arr.indexOf(value) === index);
    },
    getModel() {
      return this.cars
        .map((el) => el.modelo_descricao)
      .sort()
      .filter((value, index, arr) => arr.indexOf(value) === index)
    },
    setFiltersToDefaultValueByBrand () {
      const urlParams = new URLSearchParams(window.location.search);
      let thismarca = urlParams.get('marca');

        if (thismarca !== null && thismarca !== undefined) {
          this.cars = this.defaultcars.filter(
          (el) => el.marca_descricao.split(' ').join('') === thismarca
        );
        }
    },

    clearPriceAndYaearFiltersAndSetToSearchParam (type, value) {
     
    }
  },
  mounted () {
    const urlParams = new URLSearchParams(window.location.search);
    const marca = urlParams.get('marca');
    const modelo = urlParams.get('modelo');
    const price = urlParams.get('price');
    const year = urlParams.get('year');
    const km = urlParams.get('km');
    
    
    this.defaultcars = this.cars

    if (marca !== null) {
      this.defaultcars = this.cars
      this.cars = this.cars.filter(
          (el) => el.marca_descricao.split(' ').join('') === marca
        );
    }
   if (marca !== null && modelo !== null) {
     this.cars = this.cars.filter(
         (el) => el.modelo_descricao.split(' ').join('') === modelo
       );
   }

    if (price == "up" ) {
      this.sortType = "priceUp"
    }
    else if (price == "down") {
      this.sortType = "priceDown"
    }
    else if (price == "40") {
      this.sortType = "price40"
    }
    else if (price == "50") {
      this.sortType = "price50"
    }
    else if (price == "60") {
      this.sortType = "price60"
    }

    else if (year == "up") {
      this.sortType = "yearUp"
    }
    else if (year == "down") {
      this.sortType = "yearDown"
    }
    else if (km == "down") {
      this.sortType = "kmDown"
    }
   
    this.sortItem
  },
  methods: {
  
    cleanAllFilters () {
      this.cars = this.defaultcars
      const urlParams = new URLSearchParams(window.location.search);
      urlParams.delete('marca');
      urlParams.delete('modelo');
      urlParams.delete("year")
      urlParams.delete("price")
      urlParams.delete("km")

      let state = history.state;
	        let title = document.title;
	        let url = window.location.origin + window.location.pathname +"?"+ encodeURI(urlParams);
          history.pushState(state, title, url);
    },
    orderModel(event) {
      if (this.sortModel == event.target.value) {
        this.cars = this.defaultcars.filter(
          (el) => el.modelo_descricao === event.target.value
        );
          const urlParams = new URLSearchParams(window.location.search);
          const modelo = urlParams.get('modelo');
          if (modelo) {
            urlParams.delete("modelo")
            urlParams.set("modelo", event.target.value.split(' ').join(''))
          }else {
            urlParams.append("modelo", event.target.value.split(' ').join(''))
          }
          let state = history.state;
	        let title = document.title;
	        let url = window.location.origin + window.location.pathname +"?"+ encodeURI(urlParams);
          history.pushState(state, title, url);
       // this.cars = this.cars.sort((livroA, livroB) => livroA['modelo_descricao'] > livroB['modelo_descricao'] ? -1 : 1);
      }
    },
    orderBrand(event) {
      if (this.sortBrand == event.target.value) {
        this.cars = this.defaultcars
        this.sortModel = ""
        this.cars = this.defaultcars.filter(
          (el) => el.marca_descricao === event.target.value
        );
          const urlParams = new URLSearchParams(window.location.search);
          const marca = urlParams.get('marca');
          if (marca) {
            urlParams.delete("marca")
            urlParams.delete("modelo")
            this.cleanAllFilters
            urlParams.set("marca", event.target.value.split(' ').join(''))
          }else {
            urlParams.append("marca", event.target.value.split(' ').join(''))
          }
          let state = history.state;
	        let title = document.title;
	        let url = window.location.origin + window.location.pathname +"?"+ encodeURI(urlParams);
          history.pushState(state, title, url);
          //  this.cars = this.cars.sort((livroA, livroB) => livroA['modelo_descricao'] > livroB['modelo_descricao'] ? -1 : 1);
      }
    },
    cleanFilter() {
      window.location.reload(false);
    }
  },
  async asyncData({ $axios }) {
    setInterval(async () => {
       const xml = await $axios.$get();
    const cars = await parser.parseStringPromise(xml).then(function (res) {
      return res.veiculo;
    });
    return { cars };
    }, 60000);
     const xml = await $axios.$get();
    const cars = await parser.parseStringPromise(xml).then(function (res) {
      return res.veiculo;
    });
    return { cars };
  },
};
</script>

<style lang="scss">
.estoque {

  @include bg {
    max-width: 100% !important;
    padding: 8rem;
  }

  &_filter {
    margin: 0 0 3rem 0;

    @include md {
      display: flex;
    }

    div {
      display: flex;
      justify-content: center;
      background-color: $white;
      border-radius: 5rem;
      padding: 1rem;

      @include sm-up {
        width: fit-content;
      }
  
      @include md {
        justify-content: flex-start;
      }
      span {
        color: $gray-600;
        border: none;
        font-weight: bold;
        font-size: 1.2rem;
        background-color: transparent;
        text-align: center;
        cursor: pointer;

        @include md {
          width: 20rem;
        }
  
        &:hover {
          color: $p-600;
        }
  
        &:nth-child(2) {
          margin: 0 1rem;
        }
      }
      select {
        color: $gray-600;
        border: none;
        font-weight: bold;
        font-size: 1.2rem;
        background-color: transparent;
        text-align: center;
        cursor: pointer;

        @include md {
          width: 20rem;
        }
  
        &:hover {
          color: $p-600;
        }
  
        &:nth-child(2) {
          margin: 0 1rem;
        }
      }
    }
  }
  

  &_cards {
    display: flex;
    flex-direction: column;
    gap: 3rem;

    @include sm-up {
      display: grid;
      gap: 2rem;
      grid-template-columns: repeat(2, 1fr);
    }

    @include md {
      grid-template-columns: repeat(3, 1fr);
      gap: 3rem;
    }

    @include bg {
      grid-template-columns: repeat(4, 1fr);
    }

    &_card {
      min-width: 15rem;

      &_info {
        height: 100%;
        padding: 1rem;
        overflow: hidden;
        border-radius: .5rem;
        background: linear-gradient(45deg, $gray-100 0%, $gray-200 100%);
        box-shadow: .1rem .1rem 1rem rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        &_img {
          position: relative;
          overflow: hidden;
          border-radius: .5rem;
          height: 22rem;
          margin: 0 0 1rem 0;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: absolute;
            object-position: center;
          }
        }

        &_title {
          h1 {
            font-size: 2.2rem;
            color: $gray-600;
          }

          h2 {
            color: $gray-500;
            font-size: 1.2rem;
            margin: .5rem 0 0 0;
            flex-wrap: nowrap;
          }
        }

        &_price {
          width: 100%;
          display: flex;
          padding: 1rem 0 0 0;
          flex-direction: column;

          h3 {
            margin: 4rem 0 0 0;
            padding: 0 0 1rem 0;
            font-size: 2rem;
            text-align: center;
            border-bottom: solid $gray-300 .2rem;
            color: $gray-700;
          }

          div {
            display: flex;
            justify-content: space-around;

            span {
              font-size: 1.4rem;
              font-weight: bold;
              margin: 1rem 0 0 0;
              color: $gray-400;
            }
          }
        }
      }

      &:hover {
        img {
          animation: scaling 1s both;
        }

        h1 {
          color: $p-500;
        }
      }
    }
  }
}
</style>