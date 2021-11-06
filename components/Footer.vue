<template>
  <footer class="bg-gray-900 lg:h-40 w-full z-20 h-48 overflow-hidden">
    <div class="max-w-7xl mx-auto h-40 lg:flex" aria-label="Top">
      <div
        class="
          w-full
          py-6
          grid grid-cols-2 grid-rows-1
          lg:grid lg:grid-cols-3 lg:grid-rows-1
          items-center
          justify-between
          border-b border-indigo-500
          lg:border-none
        "
      >
        <div class="items-center hidden lg:block">
          <div class="hidden ml-2 space-x-8 lg:block">
            <a
              key="Solutions"
              href="#"
              class="text-base font-medium text-white hover:text-indigo-50"
            >
              2 rue du pilou 66140 canet en rousillon
            </a>

            <a
              key="Pricing"
              href="tel:+33678218135"
              class="text-base font-medium text-white hover:text-indigo-50"
            >
              Tél: 0671410677
            </a>
            <div class="flex justify-evenly">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <a
                key="Docs"
                href="mailto:contact@vr-cafe.fr"
                class="text-base font-medium text-white hover:text-indigo-50"
              >
                contact@vr-cafe.fr
              </a>
            </div>
          </div>
        </div>
        <a href="#" class="flex justify-center">
          <span class="sr-only">Workflow</span>
          <img class="h-20" src="~assets/VRCAFE_LOGO_OK.png" alt="" />
        </a>
        <div class="flex justify-center items-center">
          <MenuIcon />
          <div class="ml-10 space-x-4 flex justify-center">
            <a
              href="#"
              class="
                inline-block
                bg-white
                py-2
                px-4
                border border-transparent
                rounded-md
                text-base
                font-medium
                text-indigo-600
                hover:bg-indigo-50
              "
              >Réserver</a
            >
          </div>
        </div>
      </div>
      <div class="mb-4 py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
        <a
          key="Solutions"
          href="#"
          class="text-base font-medium text-white hover:text-indigo-50"
        >
          Adresse
        </a>

        <a
          key="Pricing"
          href="#"
          class="text-base font-medium text-white hover:text-indigo-50"
        >
          TElephone
        </a>

        <a
          key="Docs"
          href="#"
          class="text-base font-medium text-white hover:text-indigo-50"
        >
          mail contact
        </a>
      </div>
    </div>
    <GoogleMap />
  </footer>
</template>

<script>
import GoogleMap from './GoogleMap.vue'
export default {
  components: { GoogleMap },
}
</script>

<style>
</style>