<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <header class="bg-gray-900 w-full z-20">
    <nav
      class="
        w-full
        py-6
        grid grid-cols-2 grid-rows-2
        lg:grid-rows-1 lg:grid lg:grid-cols-3
        items-center
        justify-between
        lg:border-none
        bg-gray-900
      "
      aria-label="Top"
    >
      <!-- logo -->
      <a
        href="/"
        class="flex justify-center h-14 lg:h-24 col-span-2 lg:col-span-1"
      >
        <span class="sr-only">Workflow</span>
        <img
          class=""
          src="~assets/VRCAFE_LOGO_OK.webp"
          alt="logo vr café"
          width="150px"
          height="96px"
        />
      </a>
      <!-- bouton réserver -->
      <div class="flex justify-center lg:col-start-2 col-start-2 my-4">
        <a
          :href="$route.params.slug + '.html'"
          class="
            inline-block
            bg-white
            py-2
            px-4
            border border-transparent
            rounded-md
            text-base
            lg:text-2xl
            font-medium
            text-indigo-600
            hover:bg-indigo-50
          "
          >Réserver</a
        >
      </div>
      <!-- Retour -->
      <div
        class="
          flex
          justify-center
          lg:col-start-3
          col-start-1
          row-start-2
          lg:row-start-1
          my-4
        "
      >
        <nuxt-link
          key="Solutions"
          to="/"
          class="
            inline-block
            bg-white
            py-2
            px-4
            border border-transparent
            rounded-md
            text-base
            lg:text-2xl
            font-medium
            text-indigo-600
            hover:bg-indigo-50
          "
        >
          retour
        </nuxt-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: '',
    },
  },
  computed: {},
}
</script>

<style></style>
