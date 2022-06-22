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
        <h1>{{ value.marca_descricao }} {{ value.modelo_descricao }}</h1>
        <div class="estoque_cards_card_info">
          <div class="estoque_cards_card_info_img">
            <img :src="value.fotos.imagem[0]" />
            <h2>{{ value.valor_final | price }}</h2>
          </div>
          <div class="estoque_cards_card_info_stats">
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
  padding: 0 1.5rem 2rem 1.5rem;

  @include sm-up {
    padding: 0 2rem 4rem 2rem;
  }

  @include md {
    padding: 2rem 2rem 6rem 2rem;
  }

  &_filter {
    margin: 4rem 0;

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
        width: 100%;
        border: none;
        color: $gray-500;
        padding: 1rem;
        font-weight: bold;
        background-color: transparent;
        text-align: center;
        cursor: pointer;
        border: solid 0.2rem $gray-400;
        max-width: 20rem;

        @include md {
          width: 30rem;
        }
  
        &:hover {
          color: $gray-700;
          border: solid 0.2rem $gray-700;
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
      gap: 3rem;
    }

    &_card {
      flex: 1 1 auto;
      min-width: 15rem;
      flex-wrap: nowrap;

      h1 {
        font-size: 2.4rem;
        margin: 0 0 1rem 0;
        color: $gray-700;
        border-left: solid $gray-400 .6rem;
        padding: 0 0 0 1rem;
      }

      &_info {
        overflow: hidden;
        display: flex;
        flex-direction: column;
        position: relative;
        box-shadow: 0.2rem 0.2rem 2rem rgba(0, 0, 0, 0.2);

        &_img {
          position: relative;

          img {
            width: 100%;
            height: 28rem;
            object-fit: cover;
            object-position: center;
          }

          h2 {
            color: $white;
            position: absolute;
            bottom: 0;
            font-size: 1.8rem;
            width: 100%;
            padding: 1rem 1rem 0 1rem;
            text-align: center;
            background-color: $gray-700;
          }
        }


        &_stats {
          width: 100%;
          padding: .5rem 1rem 1rem 1rem;
          background-color: $gray-700;
          text-align: center;

          div {
            display: flex;
            justify-content: space-around;
            padding: 0.5rem 0 0 0;
            border-top: solid 0.1rem $gray-500;

            span {
              padding-left: 0.8rem;
              font-weight: bold;
              font-size: 1.2rem;
              color: $gray-400;
            }
          }

          h3 {
            padding: 0 0 1rem 0;
            text-align: center;
            font-size: 1.8rem;
            color: $gray-600;
          }
        }

      }

      &:hover {
        .estoque_cards_card_info {
          outline: solid 0.4rem $gray-700;
        }
      }
    }
  }
}
</style>