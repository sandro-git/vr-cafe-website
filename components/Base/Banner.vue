<template>
  <div v-if="open" class="fixed bottom-0 inset-x-0 pb-2 sm:pb-5 z-30">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="p-2 rounded-lg bg-indigo-600 shadow-lg sm:p-3">
        <div class="flex items-center justify-between flex-wrap">
          <div class="w-0 flex-1 flex items-center">
            <span class="flex p-2 rounded-lg bg-indigo-800">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fal"
                data-icon="megaphone"
                class="h-6 w-6"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="white"
                  d="M568 32h-16c-4.42 0-8 3.58-8 8v19.33L32 179.8V168c0-4.42-3.58-8-8-8H8c-4.42 0-8 3.58-8 8v176c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8v-11.8l130.58 30.72c-1.56 6.8-2.58 13.8-2.58 21.07 0 53.02 42.98 96 96 96 45.13 0 82.45-31.3 92.64-73.29L544 452.67V472c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8V40c0-4.42-3.58-8-8-8zM256 448c-35.29 0-64-28.71-64-64 0-4.75.72-9.31 1.76-13.74l124.13 29.21C310.92 427.27 285.93 448 256 448zM32 299.33v-86.66L544 92.2v327.6L32 299.33z"
                ></path>
              </svg>
            </span>
            <p class="ml-3 font-medium text-white truncate">
              <span class="md:hidden"> Nos cartes cadeaux sont là! </span>
              <span class="hidden md:inline">
                oye! oye ! Nos cartes cadeaux sont là!
              </span>
            </p>
          </div>
          <div
            class="
              order-3
              mt-2
              flex-shrink-0
              w-full
              sm:order-2 sm:mt-0 sm:w-auto
            "
          >
            <a
              href="#"
              class="
                flex
                items-center
                justify-center
                px-4
                py-2
                border border-transparent
                rounded-md
                shadow-sm
                text-sm
                font-medium
                text-indigo-600
                bg-white
                hover:bg-indigo-50
              "
            >
              Commander
            </a>
          </div>
          <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
            <button
              type="button"
              class="
                -mr-1
                flex
                p-2
                rounded-md
                hover:bg-indigo-500
                focus:outline-none focus:ring-2 focus:ring-white
              "
              @click="closeBanner"
            >
              <span class="sr-only">Commander</span>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fal"
                data-icon="times"
                class="h-6 w-6"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="white"
                  d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseBanner',
  data() {
    return {
      open: true,
    }
  },
  methods: {
    closeBanner() {
      this.open = !this.open
    },
  },
}
</script>

<style></style>
