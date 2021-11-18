<template>
  <div class="">
    <product-details-widget
      styles-template-id="product-catalog-widget-styles"
      customer-code="VR58"
      :product="193370"
      locale="fr_FR"
    ></product-details-widget>
    <pre>
        {{ gameId }}
    </pre>
  </div>
</template>

<script>
export default {
  name: 'BaseReservation',
  props: {
    gameId: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      productIds: [{ '2021-11-02-the-lost-pyramide': 193370 }],
    }
  },
  computed: {
    productId() {
      return this.productIds.filter((id) => id === this.gameId)
    },
  },
}
</script>

<style>
</style>