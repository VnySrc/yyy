<template>
  <div class="estoque">
    <div class="estoque_filter">
      <select v-model="sortBrand" @change="orderBrand($event)">
        <option value="">Marca</option>
        <option v-for="(value, index) in getBrand" :key="index" :value="value">
          {{ value }}
        </option>
      </select>
      <select v-model="sortModel" @change="orderModel($event)">
        <option value="">Modelo</option>
        <option v-for="(value, index) in getModel" :key="index" :value="value">
          {{ value }}
        </option>
      </select>
      <select v-model="sortType" :change="sortItem">
        <option value="">A - Z</option>
        <option value="yearUp">Mais novo</option>
        <option value="yearDown">Mais velho</option>
        <option value="priceUp">Maior preço</option>
        <option value="priceDown">Menor preço</option>
      </select>
    </div>
    <div class="estoque_cards">
      <nuxt-link
        :to="`/estoque/${value.id}`"
        v-for="value in cars"
        :key="value.id"
        class="estoque_cards_card"
      >
        <div class="estoque_cards_card_info">
          <img :src="value.fotos.imagem[0]" />
          <div class="estoque_cards_card_info_stats">
            <h2>{{ value.marca_descricao }} {{ value.modelo_descricao }}</h2>
            <h3>{{ value.valor_final | price }}</h3>
            <div>
              <span>{{ value.ano_fabricacao_descricao }}</span>
              <span>-</span>
              <span>{{ value.combustivel_descricao | gas }}</span>
              <span>-</span>
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
    },
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
  padding: 0 1.5rem 2rem 1.5rem;

  @include sm-up {
    padding: 0 2rem 4rem 2rem;
  }

  @include md {
    padding: 2rem 2rem 6rem 2rem;
  }

  &_filter {
    display: flex;
    margin: 4rem 0;
    justify-content: center;

    @include md {
      justify-content: flex-start;
    }

    select {
      width: 100%;
      border: none;
      color: $gray-400;
      padding: 1rem;
      font-weight: bold;
      background-color: transparent;
      text-align: center;
      cursor: pointer;
      border: solid 0.2rem $gray-100;
      max-width: 20rem;

      &:hover {
        color: $p-500;
        border: solid 0.2rem $p-500;
      }

      &:nth-child(2) {
        margin: 0 1rem;
      }
    }

    button {
      font-size: 2rem;
      background-color: $gray-300;
      height: 10rem;
      width: 10rem;
    }
  }

  &_cards {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @include sm-up {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

    @include md {
      grid-template-columns: repeat(3, 1fr);
      gap: 3rem 2rem;
    }

    &_card {
      flex: 1 1 auto;
      min-width: 15rem;
      flex-wrap: nowrap;

      &_info {
        overflow: hidden;
        display: flex;
        flex-direction: column;
        position: relative;
        box-shadow: 0.2rem 0.2rem 2rem rgba(0, 0, 0, 0.2);

        img {
          width: 100%;
          height: 28rem;
          object-fit: cover;
          object-position: center;
        }

        &_stats {
          width: 100%;
          padding: 1rem;
          background: linear-gradient(10deg, $gray-100 0%, $white 100%);
          text-align: center;

          h2 {
            font-size: 1.5rem;
            color: $gray-500;
          }

          h3 {
            margin: 0.5rem 0;
            font-size: 2rem;
            color: $p-600;
          }

          div {
            display: flex;
            justify-content: space-around;
            padding: 0.8rem 0 0 0;
            border-top: solid 0.1rem $gray-300;

            span {
              padding-left: 0.8rem;
              font-weight: bold;
              font-size: 1.2rem;
              color: $gray-500;
            }
          }
        }
      }

      &:hover {
        h5 {
          border-left: solid 0.8rem $p-500;
          color: $p-500;
        }

        .estoque_cards_card_info {
          outline: solid 0.4rem $p-500;
        }
      }
    }
  }
}
</style>