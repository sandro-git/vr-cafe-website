<template>
  <div class="">
    <div v-for="game in games" :key="game.slug" class="">
      <pre> {{ game }} </pre>
      <h1>{{ game.title }}</h1>
      <img :src="game.image" :alt="game.title" />
      <p>{{ game.description }}</p>
      <iframe
        width="560"
        height="315"
        :src="game.video"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $content }) {
    const games = await $content('/', { deep: true })
      .where({ slug: params.slug })
      .fetch()
    return {
      games,
    }
  },
}
</script>

<style>
</style>