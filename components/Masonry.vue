<template>
  <div
    id="arcade"
    class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-2 p-2"
  >
    <nuxt-link v-for="(game, id) in games" :key="id" :to="game.slug">
      <img
        :src="game.image"
        :alt="game.title"
        class="w-full h-full rounded-lg"
      />
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'MansonryLayout',
  props: {
    games: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style></style>
