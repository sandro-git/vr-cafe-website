<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <header class="bg-gray-900 lg:h-40 fixed w-full z-20">
    <nav class="max-w-7xl mx-auto lg:flex" aria-label="Top">
      <div
        class="
          py-6
          grid grid-cols-2 grid-rows-2
          lg:grid lg:grid-cols-3 lg:grid-rows-1
          items-center
          justify-between
          border-b border-indigo-500
          lg:border-none
          bg-gray-900
        "
      >
        <!-- logo -->
        <a href="#" class="flex justify-center h-20">
          <span class="sr-only">Workflow</span>
          <img class="h-30" src="~assets/VRCAFE_LOGO_OK.png" alt="" />
        </a>
        <!-- navigation ordi -->
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
        <!-- bouton réserver -->
        <div class="flex justify-center">
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
        <!-- navigation mobile -->
        <div class="col-span-2 flex flex-col items-center">
          <div class="mb-4 py-4 flex space-x-6 lg:hidden">
            <!-- acceuil -->
            <a
              key="Solutions"
              href="#"
              class="text-base font-medium text-white hover:text-indigo-50"
            >
              Acceuil
            </a>
            <!-- tarifs -->
            <a
              key="Pricing"
              href="#"
              class="text-base font-medium text-white hover:text-indigo-50"
            >
              Tarifs
            </a>
            <!-- arcade -->
            <a
              key="Docs"
              href="#"
              class="text-base font-medium text-white hover:text-indigo-50"
            >
              Arcade
            </a>
            <!-- escape -->
            <a
              key="Company"
              href="#"
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