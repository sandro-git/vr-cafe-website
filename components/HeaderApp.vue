<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <header class="bg-gray-900 lg:h-40 w-full z-20">
    <nav
      class="
        max-h-40
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
      <a href="/" class="flex justify-center col-span-2 lg:col-span-1 h-full">
        <span class="sr-only">Workflow</span>
        <nuxt-img
          src="VRCAFE_LOGO_OK.webp"
          alt="logo vr café"
          class="h-full"
          sizes="xs:100vw"
        />
      </a>
      <!-- bouton réserver -->
      <div class="flex justify-center lg:col-start-3">
        <a
          href="reservation.html"
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
      <!-- navigation mobile -->
      <div
        class="
          col-span-2
          lg:col-span-1 lg:col-start-2 lg:row-start-1
          flex flex-col
          items-center
        "
      >
        <div class="mb-4 py-4 flex space-x-6">
          <!-- acceuil -->
          <nuxt-link
            key="Solutions"
            to="/"
            class="
              text-base
              lg:text-2xl
              font-medium
              text-white
              hover:text-indigo-50
            "
          >
            Acceuil
          </nuxt-link>
          <!-- tarifs -->
          <nuxt-link
            key="Pricing"
            to="#price"
            class="
              text-base
              lg:text-2xl
              font-medium
              text-white
              hover:text-indigo-50
            "
          >
            Tarifs
          </nuxt-link>
          <!-- escape -->
          <nuxt-link
            key="Company"
            to="#escape"
            class="
              text-base
              lg:text-2xl
              font-medium
              text-white
              hover:text-indigo-50
            "
          >
            Escape
          </nuxt-link>
          <!-- arcade -->
          <nuxt-link
            key="Docs"
            to="#arcade"
            class="
              text-base
              lg:text-2xl
              font-medium
              text-white
              hover:text-indigo-50
            "
          >
            Arcade
          </nuxt-link>
          <!-- culture -->
          <nuxt-link
            key="Docs"
            to="#culture"
            class="
              text-base
              lg:text-2xl
              font-medium
              text-white
              hover:text-indigo-50
            "
          >
            Culture
          </nuxt-link>
        </div>
        <MenuIcon />
      </div>
    </nav>
  </header>
</template>

<script>
export default {}
</script>

<style></style>
