<template>
  <div class="bg-gradient-to-r from-rose via-violet-fonce to-turquoise">
    <HeaderGames :link="$route.params.slug" />
    <div
      v-for="game in games"
      :key="game.slug"
      class="grid grid-cols-1 auto-rows-min"
    >
      <h1 class="text-4xl lg:text-6xl text-center p-8 text-white">
        {{ game.title }}
      </h1>
      <div
        class="
          flex
          mx-auto
          items-center
          justify-center
          text-white
          bg-blue-fonce
          px-4
          py-2
          rounded-xl
        "
      >
        <p
          v-for="joueur in game.nbrDeJoueur"
          :key="joueur.id"
          class="text-2xl mx-2"
        >
          {{ joueur }}
        </p>
        <img class="h-6 mx-2" src="~assets/users-light.svg" alt="user icon" />
        <p class="uppercase">{{ game.difficulte }}</p>
      </div>
      <div class="aspect-w-16 aspect-h-6 mx-auto w-2/3 my-12 border">
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
      <p class="text-lg lg:w-2/3 mx-auto text-center p-8">
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

<style></style>
