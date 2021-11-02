<template>
  <div
    class="swiper w-full h-full overflow-hidden relative bg-cover"
    :style="{ backgroundImage: `url(${backgroundUrl})` }"
  >
    <div class="swiper-wrapper my-8">
      <div
        v-for="game in games"
        :key="game.slug"
        class="swiper-slide border border-gray-900 rounded-lg space-y-4 p-4"
      >
        <div class="swiper-content aspect-w-3 aspect-h-2">
          <img
            class="object-cover shadow-lg rounded-lg"
            :src="game.image"
            :alt="game.title"
          />
        </div>
        <div class="text-lg">
          <p class="text-gray-500 my-8">{{ game.description }}.</p>
        </div>
        <Button />
      </div>
      <div class="swiper-slide border border-gray-900 rounded-lg space-y-4 p-4">
        <div class="swiper-content aspect-w-3 aspect-h-2">
          <img
            class="object-cover shadow-lg rounded-lg"
            src="https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
            alt=""
          />
        </div>
        <div class="text-lg">
          <p class="text-gray-500 my-8">
            Ultricies massa malesuada viverra cras lobortis. Tempor orci hac
            ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras.
            Nisl dictum.
          </p>
        </div>
        <Button />
      </div>
      <div class="swiper-slide border border-gray-900 rounded-lg space-y-4 p-4">
        <div class="swiper-content aspect-w-3 aspect-h-2">
          <img
            class="object-cover shadow-lg rounded-lg"
            src="https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
            alt=""
          />
        </div>
        <div class="text-lg">
          <p class="text-gray-500 my-8">
            Ultricies massa malesuada viverra cras lobortis. Tempor orci hac
            ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras.
            Nisl dictum.
          </p>
        </div>
        <Button />
      </div>
    </div>
    <!-- If pagination is needed -->
    <div class="swiper-pagination"></div>

    <!-- If navigation buttons are needed -->
    <div class="swiper-button-prev text-gray-900"></div>
    <div class="swiper-button-next"></div>
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
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // Configure other options. Not tested
      breakpoints: {
        321: {
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