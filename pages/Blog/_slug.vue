<template>
  <div class="post">
    <h2>{{ blog.tag }}</h2>
    <h1>{{ blog.titulo }}</h1>
    <nuxt-content :document="blog" />
  </div>
</template>

<style lang="scss">
.post {
    padding: 4rem 1.5rem;

    @include sm-up {
      padding: 4rem 2rem;
    }

    @include md {
      padding: 6rem 12rem;
    }

    h1 {
      font-size: 3rem;
      color: $p-600;
      margin: 0 0 2rem 0;
    }

    h2 {
      font-size: 2rem;
      color: $gray-600;
      margin: 0 0 1rem 0;
      padding: 0 0 0 .5rem;
      border-left: solid $gray-500 .5rem;
    }

    h3, h4, h5, h6 {
      font-size: 2rem;
      margin: 2rem 0;
      border-left: solid $gray-500 .5rem;
      padding: 0 0 0 .5rem;
      color: $gray-600;
    }

    p {
      margin: 1rem 0;
      font-size: 2rem;
      color: $gray-500;
      font-family: $ff-s;
    }

    a {
      color: $p-600;
    }
}

.nuxt-content {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
}
</style>

<script>
export default {
  async asyncData({ $content, params }) {
    const blog = await $content("blog", params.slug).fetch();

    return {
      message: '',  
      blog,
    };
  }
};
</script>