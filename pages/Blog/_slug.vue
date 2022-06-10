<template>
  <div class="post">
    <img :src="blog.banner" alt="">
    <h1>{{ blog.titulo }}</h1>
    <h2>{{ blog.tag }}</h2>
    <nuxt-content :document="blog" />
  </div>
</template>

<style lang="scss">
.post {
    background-color: $gray-100;
    height: 40rem;

    h1 {
        font-size: 3rem;
        color: $p-500;
    }

    h2 {
        font-size: 2rem;
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