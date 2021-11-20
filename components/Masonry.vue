<template>
  <vue-masonry-wall
    :items="games"
    :options="{ width: 300, padding: 6 }"
    :ssr="{ columns: 2 }"
  >
    <template #default="{ item }">
      <div class="item">
        <nuxt-link :to="item.slug">
          <img :src="item.image" alt="item.title" />
        </nuxt-link>
      </div>
    </template>
  </vue-masonry-wall>
</template>

<script>
import VueMasonryWall from 'vue-masonry-wall'

export default {
  name: 'MansonryLayout',
  components: { VueMasonryWall },
  props: {
    games: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style></style>
