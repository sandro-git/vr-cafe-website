<template>
  <div
    class="swiper w-full h-full overflow-hidden relative bg-cover"
    :style="{ backgroundImage: `url(${backgroundUrl})` }"
  >
    <div class="swiper-wrapper flex h-60 my-8">
      <div
        v-for="game in games"
        :key="game.slug"
        class="
          swiper-slide
          border border-gray-900
          bg-white
          rounded-lg
          space-y-4
          p-4
        "
      >
        <div class="swiper-content aspect-w-3 aspect-h-2 overflow-hidden">
          <img
            class="object-cover shadow-lg h-64 rounded-lg w-full"
            :src="game.image"
            :alt="game.title"
          />
        </div>
        <div class="text-lg">
          <p class="text-gray-500 my-8 h-40 hidden lg:block overflow-hidden">
            {{ game.description }}.
          </p>
        </div>
        <Button />
      </div>
    </div>
    <!-- If pagination is needed -->
    <div class="swiper-pagination"></div>

    <!-- If navigation buttons are needed -->
    <!-- <div class="swiper-button-prev swiper-button-hidden text-gray-900"></div>
    <div class="swiper-button-next swiper-button-hidden"></div> -->
  </div>
</template>

<script>
// import Swiper JS
// add or remove unused modules
import { Swiper, Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'

export default {
  props: {
    backgroundUrl: {
      type: String,
      default: '',
    },
    games: {
      type: Array,
      default: () => [],
    },
  },
  mounted() {
    // configure Swiper to use modules. The modules were tested with SwiperJS v6.8.4 with NuxtJS v2.15.7
    // previously it was before export default. Moved here for performance issues. Move back in case of problems.
    // add or remove unused modules
    Swiper.use([Navigation, Pagination, Autoplay])

    // init Swiper:
    /* eslint-disable no-unused-vars */
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      slidesPerView: 1,
      keyboard: true,
      grabCursor: true,
      spaceBetween: 20,

      // @see https://swiperjs.com/swiper-api#parameters
      direction: 'horizontal',
      loop: true,
      // remove unused modules if needed
      modules: [Navigation, Pagination, Autoplay],

      // Pagination if needed
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      // Autoplay if needed
      autoplay: {
        delay: 3000,
      },
      // Navigation arrows if needed
      navigation: {
        hiddenClass: '.swiper-button-hidden',
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // Configure other options. Not tested
      breakpoints: {
        429: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    })
  },
}
</script>

<style scoped>
.swiper-button-prev::after,
.swiper-button-next::after {
  @apply text-black;
}
.slide--1 {
  background-color: #f1c40f;
}

.slide--2 {
  background-color: #e67e22;
}

.slide--3 {
  background-color: #e74c3c;
}

.slide--4 {
  background-color: #9b59b6;
}

.slide--5 {
  background-color: #3498db;
}

.slide--6 {
  background-color: #2ecc71;
}
</style>