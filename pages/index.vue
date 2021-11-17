<template>
  <div>
    <HeaderApp />
    <img class="text-center" src="~assets/header.jpg" alt="VR headset" />
    <Prices />
    <TitleWithSubtitle subtitle="UBISOFT" title="EXPERIENCE ESCAPE GAME VR" />

    <Slider
      class="bg-gradient-to-r from-rose via-violet-fonce to-turquoise"
      :games="ubisoftGames"
    />
    <Title title="ARVI VR" :exclu="true" />
    <Slider
      class="bg-gradient-to-r from-rose via-violet-fonce to-turquoise"
      :games="arviGames"
    />
    <TitleWithSubtitle subtitle="WANADEV" title="EXPERIENCE ARCADE VR" />
    <Slider
      class="bg-gradient-to-r from-rose via-violet-fonce to-turquoise"
      :games="wanadevGames"
    />
    <Title title="SYNTHESYS" />
    <Masonry
      :games="synthGames"
      class="bg-gradient-to-r from-rose via-violet-fonce to-turquoise"
    />
    <TitleWithSubtitle subtitle="LUCID REALITY" title="EXPERIENCE CULTURE" />

    <Slider class="bg-gradient-to-r from-rose via-violet-fonce to-turquoise" />
    <Title title="PARTENAIRES" />
    <Slider class="bg-gradient-to-r from-rose via-violet-fonce to-turquoise" />

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
      return this.arcade.filter((arcade) => arcade.editeur === 'wanadev')
    },
    synthGames() {
      return this.arcade.filter((arcade) => arcade.editeur === 'synthesys')
    },
  },
}
</script>

<style scoped>
.subtile {
  @apply flex w-full justify-center items-center;
}
</style>
