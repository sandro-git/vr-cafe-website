<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <header class="bg-gray-900 lg:h-40 w-full z-20">
    <nav class="mx-auto lg:flex lg:justify-center" aria-label="Top">
      <div
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
      >
        <!-- logo -->
        <a href="#" class="flex justify-center h-20">
          <span class="sr-only">Workflow</span>
          <img class="h-30" src="~assets/VRCAFE_LOGO_OK.png" alt="" />
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
            <a
              key="Solutions"
              href="/"
              class="text-base font-medium text-white hover:text-indigo-50"
            >
              Acceuil
            </a>
            <!-- tarifs -->
            <a
              key="Pricing"
              href="#price"
              class="text-base font-medium text-white hover:text-indigo-50"
            >
              Tarifs
            </a>
            <!-- arcade -->
            <a
              key="Docs"
              href="#arcade"
              class="text-base font-medium text-white hover:text-indigo-50"
            >
              Arcade
            </a>
            <!-- escape -->
            <a
              key="Company"
              href="#escape"
              class="text-base font-medium text-white hover:text-indigo-50"
            >
              Escape
            </a>
          </div>
          <MenuIcon />
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {}
</script>

<style>
</style>