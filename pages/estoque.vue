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
          <option value="price40">Até 40 mil</option>
          <option value="price50">Até 50 mil</option>
          <option value="price60">Até 60 mil</option>
        </select>
      </div>
      <button v-show="sortType = sortType" @click="cleanFilter">Limpar filtro</button>
    </div>
    <div class="estoque_cards">
      <nuxt-link
        :to="`/estoque/${value.id}`"
        v-for="value in cars"
        :key="value.id"
        class="estoque_cards_card"
      >
        <div class="estoque_cards_card_info">
          <div class="estoque_cards_card_info_img">
            <img :src="value.fotos.imagem[0]" />
          </div>
          <div class="estoque_cards_card_info_stats">
            <h1>{{ value.marca_descricao }} {{ value.modelo_descricao }}</h1>
            <h2>{{ value.versao_descricao }}</h2>
            <h3>{{ value.valor_final | price }}</h3>
            <div>
              <span>{{ value.ano_fabricacao_descricao }}</span>
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
      sortType: "",
      sortModel: "",
      sortBrand: "",
    };
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
        this.cars = this.cars.sort(function (a, b) {
          var nameA = a.marca_descricao.toUpperCase();
          var nameB = b.marca_descricao.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
      }
      if (this.sortType == "priceUp") {
        this.cars = this.cars.sort(
          (prev, curr) => curr.valor_final - prev.valor_final
        );
      }
      if (this.sortType == "priceDown") {
        this.cars = this.cars.sort(
          (prev, curr) => prev.valor_final - curr.valor_final
        );
      }
      if (this.sortType == "yearUp") {
        this.cars = this.cars.sort(
          (prev, curr) =>
            curr.ano_fabricacao_descricao - prev.ano_fabricacao_descricao
        );
      }
      if (this.sortType == "yearDown") {
        this.cars = this.cars.sort(
          (prev, curr) =>
            prev.ano_fabricacao_descricao - curr.ano_fabricacao_descricao
        );
      }
      if (this.sortType == "price40") {
        this.cars = this.cars.filter((el) => el.valor_final <= 40000);
      }
      if (this.sortType == "price50") {
        this.cars = this.cars.filter((el) => el.valor_final <= 50000);
      }
      if (this.sortType == "price60") {
        this.cars = this.cars.filter((el) => el.valor_final <= 60000);
      }
    },
    getBrand() {
      return this.cars
        .map((el) => el.marca_descricao)
        .filter((value, index, arr) => arr.indexOf(value) === index);
    },
    getModel() {
      return this.cars
        .map((el) => el.modelo_descricao)
        .filter((value, index, arr) => arr.indexOf(value) === index);
    },
  },
  methods: {
    orderModel(event) {
      if (this.sortModel == event.target.value) {
        this.cars = this.cars.filter(
          (el) => el.modelo_descricao === event.target.value
        );
      }
    },
    orderBrand(event) {
      if (this.sortBrand == event.target.value) {
        this.cars = this.cars.filter(
          (el) => el.marca_descricao === event.target.value
        );
      }
    },
    cleanFilter() {
      window.location.reload(false);
    }
  },
  async asyncData({ $axios }) {
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
    margin: 0 0 4rem 0;

    @include md {
      display: flex;
    }

    div {
      display: flex;
      justify-content: center;
  
      @include md {
        justify-content: flex-start;
      }
  
      select {
        color: $gray-100;
        border: none;
        padding: 1rem;
        font-weight: bold;
        background-color: transparent;
        text-align: center;
        cursor: pointer;
        border-bottom: solid 0.2rem $gray-100;
        max-width: 20rem;

        @include md {
          width: 30rem;
        }
  
        &:hover {
          color: $gray-400;
          border-bottom: solid 0.2rem $gray-400;
        }
  
        &:nth-child(2) {
          margin: 0 1rem;
        }
      }
    }

    button {
      font-size: 1.4rem;
      font-weight: bold;
      color: $gray-400;
      background: transparent;
      margin: 2rem 0 0 0;
      cursor: pointer;
      text-align: center;
      width: 100%;

      @include md {
        margin: 0 2rem;
        width: auto;
        text-align: left;
      }

      &:hover {
        color: $p-500;
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
      gap: 4rem;
    }

    @include bg {
      grid-template-columns: repeat(4, 1fr);
    }

    &_card {
      min-width: 15rem;
      max-width: 40rem;
      flex-wrap: nowrap;

      &_info {
        border-radius: .5rem;
        background: linear-gradient(45deg, $gray-100 0%, $gray-200 100%);
        box-shadow: .1rem .1rem 1rem rgba(0, 0, 0, 0.1);
        padding: 1rem;
        overflow: hidden;

        &_img {
          position: relative;
          overflow: hidden;
          border-radius: .5rem;
          height: 22rem;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: absolute;
            object-position: center;
          }
        }

        &_stats {
          width: 100%;
          padding: 1rem 0 0 0;
          text-align: left;

          h1 {
            font-size: 2.4rem;
            color: $gray-600;
          }

          h2 {
            color: $gray-500;
            font-size: 1rem;
            margin: 1rem 0;
            flex-wrap: nowrap;
          }

          h3 {
            margin: 3rem 0 0 0;
            font-size: 2rem;
            color: $gray-500;
          }

          div {
            display: flex;
            justify-content: space-between;

            span {
              font-size: 1.6rem;
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

        h2 {
          color: $gray-600;
        }
      }
    }
  }
}
</style>