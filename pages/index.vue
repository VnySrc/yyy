<template>
<div>
  <header>
  </header>
  <section class="razoes">
    <div class="razoes_card"></div>
    <div class="razoes_card"></div>
    <div class="razoes_card"></div>
  </section>
  <section class="feedback">
    <div class="feedback_card"></div>
    <div class="feedback_card"></div>
    <div class="feedback_card"></div>
  </section>
</div>
</template>

<style lang="scss">

header {
  height: 70rem;
}

.razoes {
  display: flex;
  justify-content: space-between;
  padding: 6rem 12rem;
  gap: 2rem;

  &_card {
    background-color: $primary;
    height: 40rem;
    width: 35rem;
  }
}

.feedback {
  display: flex;
  justify-content: space-between;
  margin: 6rem 0;
  padding: 6rem 20rem;
  gap: 2rem;

  &_card {
    background-color: $primary;
    border-radius: 100%;
    height: 20rem;
    width: 20rem;
  }
}
</style>