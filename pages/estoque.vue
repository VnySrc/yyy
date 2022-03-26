<template>
<div>

</div>
</template>

<script>
  export default {
    created() {
      this.$axios.$get(`/vehicles`)
      .then((Response) => {
        console.table(Response);
      })
    }
  }
</script>