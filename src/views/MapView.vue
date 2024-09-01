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
// import markerRed from '@/assets/images/marker-red.svg'

const router = useRouter()

const latitude = ref(25.033)
const longitude = ref(121.5654)
let map
// const markers = ref([])
const drawnItems = ref(new L.FeatureGroup())

const saveDrawnItemsToLocal = () => {
  const drawnItemsData = []
  drawnItems.value.eachLayer((layer) => {
    if (layer instanceof L.Polygon || layer instanceof L.Rectangle) {
      drawnItemsData.push(layer.toGeoJSON())
    }
  })
  localStorage.setItem('drawnItems', JSON.stringify(drawnItemsData))
}

const loadDrawnItemsFromLocal = () => {
  const drawnItemsData = JSON.parse(localStorage.getItem('drawnItems'))
  if (drawnItemsData) {
    drawnItemsData.forEach((geoJson) => {
      const layer = L.geoJSON(geoJson).getLayers()[0]
      drawnItems.value.addLayer(layer)
    })
  }
}

// const setMapView = () => {
//   map.setView([latitude.value, longitude.value], 13)
//   const newMarker = L.marker([latitude.value, longitude.value])
//   if (isMarkerInsideDrawnItems(latitude.value, longitude.value)) {
//     newMarker.setIcon(
//       L.icon({
//         iconUrl: markerRed,
//         iconSize: [25, 41],
//         iconAnchor: [12, 41],
//         popupAnchor: [1, -34],
//         shadowSize: [41, 41]
//       })
//     )
//   }
//   newMarker.addTo(map)
//   markers.value.push(newMarker)
// }

// const isMarkerInsideDrawnItems = (latitude, longitude) => {
//   const latLng = {
//     lat: latitude,
//     lng: longitude
//   }
//   let isInside = false
//   drawnItems.value.eachLayer((layer) => {
//     if (layer instanceof L.Polygon || layer instanceof L.Rectangle) {
//       if (layer.getBounds().contains(latLng)) {
//         isInside = true
//       }
//     }
//   })
//   return isInside
// }

onMounted(() => {
  map = L.map('map').setView([latitude.value, longitude.value], 13)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map)

  map.addLayer(drawnItems.value)

  map.pm.addControls({
    position: 'topleft',
    drawPolygon: true,
    drawRectangle: true,
    drawCircle: false,
    drawMarker: false,
    drawPolyline: false,
    editMode: true,
    dragMode: true,
    cutPolygon: false,
    removalMode: true
  })

  map.on('pm:create', (event) => {
    const layer = event.layer
    drawnItems.value.addLayer(layer)
    saveDrawnItemsToLocal()
  })

  map.on('pm:edit', (event) => {
    const layer = event.layer
    drawnItems.value.removeLayer(layer)
    drawnItems.value.addLayer(layer)
    saveDrawnItemsToLocal()
  })

  map.on('pm:remove', (event) => {
    const layer = event.layer
    drawnItems.value.removeLayer(layer)
    saveDrawnItemsToLocal()
  })

  loadDrawnItemsFromLocal()
})

function goToHome() {
  router.push('/')
}
</script>
