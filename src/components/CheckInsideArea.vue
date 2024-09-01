<template>
  <div>
    <div v-if="loading" class="flex items-center justify-center w-full h-full">
      <div class="px-3 py-1 text-xl font-medium leading-none text-center text-black">
        loading...
      </div>
    </div>
    <template v-if="isInside === undefined && !loading">
      <button
        type="button"
        class="flex items-center justify-center px-5 py-2 mt-2 text-white bg-blue-500 rounded"
        @click="checkInsideArea()"
      >
        檢查
      </button>
    </template>
    <template v-else-if="isInside === true && !loading">
      <span class="text-red-500">
        {{ isInside ? '紅區' : '' }}
      </span>
    </template>
    <template v-else-if="isInside === false && !loading">
      <span class="text-green-500">
        {{ !isInside ? '通過' : '' }}
      </span>
    </template>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { getPosition } from '@/apis/rent.js'
import L from 'leaflet'

const props = defineProps({
  postId: {
    type: Number
  }
})

const isInside = ref(undefined)
const loading = ref(false)

function checkInsideArea() {
  loading.value = true
  getPosition(props.postId)
    .then((res) => {
      console.log(res)
      if (!res.data.lat || !res.data.lng) {
        isInside.value = true
        return false
      }
      const latLng = {
        lat: res.data.lat,
        lng: res.data.lng
      }
      const drawnItemsData = JSON.parse(localStorage.getItem('drawnItems'))
      if (drawnItemsData) {
        isInside.value = drawnItemsData.some((geoJson) => {
          const layer = L.geoJSON(geoJson).getLayers()[0]
          if (layer.getBounds().contains(latLng)) {
            return true
          } else {
            return false
          }
        })
      }
    })
    .finally(() => {
      loading.value = false
    })
}
</script>
