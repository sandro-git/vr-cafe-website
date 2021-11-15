<template>
  <div class="bg-gray-500">
    <HeaderGames />
    <div
      v-for="game in games"
      :key="game.slug"
      class="grid grid-cols-1 auto-rows-min"
    >
      <h1 class="text-8xl text-center p-8">{{ game.title }}</h1>

      <div class="aspect-w-16 aspect-h-6 mx-auto w-2/3 my-12">
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
      <p class="text-base w-2/3 mx-auto text-center p-8">
        {{ game.description }}
      </p>
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