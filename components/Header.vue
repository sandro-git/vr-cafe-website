<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <header class="bg-gray-900 lg:h-40 fixed w-full z-20 h-48">
    <nav class="max-w-7xl mx-auto h-40 lg:flex" aria-label="Top">
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
        <div class="pl-8 items-center hidden lg:block">
          <div class="hidden ml-2 space-x-8 lg:block">
            <a
              key="Solutions"
              href="#"
              class="text-base font-medium text-white hover:text-indigo-50"
            >
              Acceuil
            </a>

            <a
              key="Pricing"
              href="#tarifs"
              class="text-base font-medium text-white hover:text-indigo-50"
            >
              Tarifs
            </a>

            <a
              key="Docs"
              href="#"
              class="text-base font-medium text-white hover:text-indigo-50"
            >
              Arcade
            </a>

            <a
              key="Company"
              href="#"
              class="text-base font-medium text-white hover:text-indigo-50"
            >
              Escape
            </a>
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
          Acceuil
        </a>

        <a
          key="Pricing"
          href="#"
          class="text-base font-medium text-white hover:text-indigo-50"
        >
          Tarifs
        </a>

        <a
          key="Docs"
          href="#"
          class="text-base font-medium text-white hover:text-indigo-50"
        >
          Arcade
        </a>

        <a
          key="Company"
          href="#"
          class="text-base font-medium text-white hover:text-indigo-50"
        >
          Escape
        </a>
      </div>
    </nav>
  </header>
</template>

<script>
export default {}
</script>

<style>
</style>