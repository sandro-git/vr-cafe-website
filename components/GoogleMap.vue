<template>
  <div class="bg-gray-900 flex justify-center">
    <!-- <GmapMap
      :center="{ lat: 42.7070291246826, lng: 3.0186964909226233 }"
      :zoom="15"
      map-id="2dd0a1bd2ae97dc4"
      map-type-id="terrain"
      style="width: 500px; height: 300px"
    >
      <GmapMarker
        v-for="(m, index) in markers"
        :key="index"
        :position="m.position"
        :clickable="false"
        :draggable="false"
        @click="center = m.position"
      />
    </GmapMap> -->
  </div>
</template>


<script>
export default {
  data() {
    return {
      markers: [
        {
          position: { lat: 42.70712775133335, lng: 3.0186377710685335 },
        },
      ],
    }
  },
}
</script>