<template>
  <div>
    <Header />
    <img class="text-center" src="~assets/header.jpg" alt="VR headset" />
    <Prices />
    <h2
      id="escape"
      class="
        sm:text-4xl
        lg:text-5xl
        text-3xl
        font-extrabold
        bg-gray-900
        text-white text-center
        pt-12
        pb-4
      "
    >
      EXPERIENCE ESCAPE GAME VIRTUEL
    </h2>
    <div id="escape" class="subtile">
      <p class="px-4 lg:w-1/2 text-center text-xl text-gray-300 sm:text-2xl">
        EXCLUSIVITÉ ESCAPE GAME EN RÉALITE VIRTUELLE UBISOFT “IMMERSION TOTALE”
      </p>
    </div>
    <Slider class="bg-rose" :games="ubisoftGames" />
    <div class="subtile">
      <p class="lg:w-1/2 text-center text-xl text-gray-300 sm:text-2xl">
        EXCLUSIVITÉ ESCAPE GAME EN RÉALITE VIRTUELLE UBISOFT “IMMERSION TOTALE”
      </p>
    </div>
    <div class="subtile">
      <p class="lg:w-1/2 text-center text-xl text-gray-300 sm:text-2xl">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam
        eligendi quos odit doloribus molestiae voluptatum.
      </p>
    </div>
    <Slider class="bg-turquoise" :games="arviGames" />
    <h2
      class="
        sm:text-4xl
        lg:text-5xl
        text-3xl
        font-extrabold
        bg-gray-900
        text-white text-center
        pt-12
        pb-4
      "
    >
      EXPERIENCE ARCADE VR
    </h2>
    <div id="arcade" class="subtile">
      <p class="w-1/2 text-center text-xl text-gray-300 sm:text-2xl">
        EXCLUSIVITÉ WANADEV LES STUDIOS FRANCAIS
      </p>
    </div>
    <Slider :background-url="wanadev" />
    <div class="subtile">
      <p class="w-1/2 text-center text-xl text-gray-300 sm:text-2xl">
        SYNTHESIS VR OU AUTRE CHOSE
      </p>
    </div>
    <Slider :games="arcade" />
    <Footer />
  </div>
</template>

<script>
import ubisoft from '~/assets/ubisoft-logo.jpeg'
import arvi from '~/assets/ARVI.jpeg'
import wanadev from '~/assets/wanadev.jpeg'

export default {
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
  },
}
</script>

<style>
.subtile {
  @apply flex w-full justify-center items-center py-12 bg-gray-900 h-20;
}
</style>
