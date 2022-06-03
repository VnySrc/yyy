<template>
  <section class="termos">
    <h2>Termos e Condições</h2>
    <p>Esta empresa não garante a exatidão e/ou veracidade das informações contidas nos anúncios, que podem conter dados inexatos, incorretos e/ou erros substanciais, tipográficos e de digitação. Todas informações do anúncio deverão ser confirmadas diretamente com a loja.</p>
  </section>
</template>

<style lang="scss">

.termos {
  padding: 4rem 2rem;

  @include sm-up {
    padding: 6.2rem 2rem;
  }

  @include md {
    padding: 10rem;
  }

  h2 {
    font-size: 2.4rem;
    font-weight: bold;
    color: $p-500;
    margin-bottom: 2rem;
    padding-left: 1rem;
    border-left: solid .8rem $p-500;
  }

  p {
    font-family: $ff-s;
    font-size: 2rem;
    color: $gray-500;
  }
}

</style>