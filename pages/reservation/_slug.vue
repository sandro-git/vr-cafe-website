<template>
  <div class="">
    <product-details-widget
      styles-template-id="product-catalog-widget-styles"
      customer-code="VR58"
      :product="193370"
      locale="fr_FR"
    ></product-details-widget>
    <pre>
        {{ productId }}
    </pre>
  </div>
</template>

<script>
export default {
  name: 'BaseReservation',
  data() {
    return {
      productIds: [
        { '2021-11-02-the-lost-pyramide': 193370 },
        { '2021-11-03-beyonds-medusa-gate': 192876 },
      ],
    }
  },
}
</script>

<style></style>
