<template>
  <div>
    <HeaderApp />
    <img class="text-center" src="~assets/header.jpg" alt="VR headset" />
    <Prices />
    <div class="bg-gray-900 py-12">
      <h2
        id="escape"
        class="
          sm:text-4xl
          lg:text-5xl
          text-3xl
          font-extrabold
          bg-gray-900
          text-white text-center
          px-4
          pb-8
        "
      >
        EXPERIENCE ESCAPE GAME VIRTUEL
      </h2>
      <div id="escape" class="subtile">
        <p class="px-4 lg:w-1/2 text-center text-xl text-gray-300 sm:text-2xl">
          EXCLUSIVITÉ ESCAPE GAME EN RÉALITE VIRTUELLE UBISOFT “IMMERSION
          TOTALE”
        </p>
      </div>
    </div>
    <Slider
      class="bg-gradient-to-r from-rose via-violet-fonce to-turquoise"
      :games="ubisoftGames"
    />
    <div class="bg-gray-900 py-12">
      <div class="subtile pb-8">
        <p class="lg:w-1/2 text-center text-xl text-gray-300 sm:text-2xl">
          EXCLUSIVITÉ ESCAPE GAME EN RÉALITE VIRTUELLE UBISOFT “IMMERSION
          TOTALE”
        </p>
      </div>
      <div class="subtile">
        <p class="lg:w-1/2 text-center text-xl text-gray-300 sm:text-2xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
          numquam eligendi quos odit doloribus molestiae voluptatum.
        </p>
      </div>
    </div>
    <Slider
      class="bg-gradient-to-r from-rose via-violet-fonce to-turquoise"
      :games="arviGames"
    />
    <div class="bg-gray-900 py-12">
      <h2
        class="
          sm:text-4xl
          lg:text-5xl
          text-3xl
          font-extrabold
          text-white text-center
          pb-8
          px-4
        "
      >
        EXPERIENCE ARCADE VR
      </h2>
      <div id="arcade" class="subtile">
        <p class="lg:w-1/2 text-center text-xl text-gray-300 sm:text-2xl">
          EXCLUSIVITÉ WANADEV
        </p>
      </div>
    </div>
    <Slider
      class="bg-gradient-to-r from-rose via-violet-fonce to-turquoise"
      :games="wanadevGames"
    />
    <div class="subtile bg-gray-900 py-12">
      <p class="lg:w-1/2 text-center text-xl text-gray-300 sm:text-2xl">
        SYNTHESIS VR
      </p>
    </div>
    <Masonry :games="synthGames" />
    <pre> {{ synthGames }} </pre>
    <Footer />
  </div>
</template>

<script>
import ubisoft from '~/assets/ubisoft-logo.jpeg'
import arvi from '~/assets/ARVI.jpeg'
import wanadev from '~/assets/wanadev.jpeg'

export default {
  name: 'App',
  async asyncData({ $content }) {
    const games = await $content('games').fetch()
    const arcade = await $content('arcade').fetch()
    return {
      games,
      arcade,
    }
  },
  data() {
    return { ubisoft, arvi, wanadev }
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
    }
  },
  computed: {
    ubisoftGames() {
      return this.games.filter((game) => game.editeur === 'ubisoft')
    },
    arviGames() {
      return this.games.filter((game) => game.editeur === 'arvi')
    },
    wanadevGames() {
      return this.games.filter((arcade) => arcade.editeur === 'wanadev')
    },
    synthGames() {
      return this.games.filter((arcade) => arcade.editeur === 'synthesys')
    },
  },
}
</script>

<style scoped>
.subtile {
  @apply flex w-full justify-center items-center;
}
</style>
