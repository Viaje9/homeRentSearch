<template>
  <div>
    <div class="max-w-xl">
      <button type="button" class="w-full h-10 bg-blue-500 text-white" @click="goToHome()">
        Home
      </button>
    </div>
    <!-- <div>
      <label for="latitude">緯度:</label>
      <input type="text" id="latitude" v-model="latitude" />
      <label for="longitude">經度:</label>
      <input type="text" id="longitude" v-model="longitude" />
      <button @click="setMapView">設定座標</button>
    </div> -->
    <div id="map" style="height: 90vh"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import '@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css'
import '@geoman-io/leaflet-geoman-free'

const router = useRouter()

const latitude = ref(25.033)
const longitude = ref(121.5654)
let map

const loadDrawnItemsFromLocal = () => {
  const drawnItemsData = JSON.parse(localStorage.getItem('drawnItems'))
  const drawnItems = new L.FeatureGroup()
  if (drawnItemsData) {
    drawnItemsData.forEach((geoJson) => {
      const layer = L.geoJSON(geoJson).getLayers()[0]
      layer.on('pm:edit', () => {
        saveDrawnItemsToLocal()
      })
      drawnItems.addLayer(layer)
    })
  }
  return drawnItems
}

const saveDrawnItemsToLocal = () => {
  const geoJson = map.pm.getGeomanLayers().map((layer) => {
    return layer.toGeoJSON()
  })
  localStorage.setItem('drawnItems', JSON.stringify(geoJson))
}

onMounted(() => {
  map = L.map('map').setView([latitude.value, longitude.value], 13)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map)

  map.addLayer(loadDrawnItemsFromLocal())

  map.pm.addControls({
    position: 'topleft',
    drawPolygon: true,
    drawRectangle: true,
    drawCircle: false,
    drawMarker: false,
    drawPolyline: false,
    drawText: false,
    editMode: true,
    dragMode: true,
    cutPolygon: false,
    removalMode: true
  })

  map.on('pm:create', () => {
    saveDrawnItemsToLocal()
  })

  map.on('pm:remove', () => {
    saveDrawnItemsToLocal()
  })
})

function goToHome() {
  router.push('/')
}
</script>
