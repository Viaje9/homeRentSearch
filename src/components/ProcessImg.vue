<template>
  <div class="relative">
    <div class="prev" @click="prevImg(postId)"><p class="arrow">&lt;</p></div>
    <div class="next" @click="nextImg(postId)"><p class="arrow">&gt;</p></div>
    <canvas class="max-w-full" ref="canvas"></canvas>
    <div v-if="showLoading" class="absolute w-full h-full opacity-50 top-0 left-0 bg-black">
      <div class="flex items-center justify-center w-full h-full">
        <div class="px-3 py-1 text-xl font-medium leading-none text-center text-white">
          loading...
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useServiceStore } from '@/stores/service.js'
import { watch, ref } from 'vue'
const serviceStore = useServiceStore()
const { prevImg, nextImg } = serviceStore

const props = defineProps({
  postId: {
    type: Number
  },
  imgUrl: {
    default: '',
    type: String
  }
})

const canvas = ref(null)
const keepImgList = ref([])
const showLoading = ref(false)

watch(
  () => props.imgUrl,
  (newValue, oldValue) => {
    if (newValue !== oldValue) {
      processImg(newValue)
    }
  },
  { immediate: true }
)

function processImg(url) {
  showLoading.value = true
  if (keepImgList.value.some((item) => item.id === url)) {
    const img = keepImgList.value.find((item) => item.id === url).canvasRef
    canvas.value.width = img.width
    canvas.value.height = img.height
    canvas.value.getContext('2d').drawImage(img, 0, 0)
    showLoading.value = false
    return
  }

  const img = new Image()
  img.src = url
  img.onload = () => {
    canvas.value.width = img?.width
    canvas.value.height = img?.height
    canvas.value.getContext('2d').drawImage(img, 0, 0)
    keepImgList.value.push({
      id: url,
      canvasRef: img
    })
    showLoading.value = false
  }
  img.onerror = () => {
    showLoading.value = false
  }
}
</script>
<style scoped>
.prev {
  display: flex;
  align-items: center;
  justify-content: start;
  width: 50%;
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
}

.next {
  display: flex;
  align-items: center;
  justify-content: end;
  width: 50%;
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
}

.arrow {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  font-size: 42px;
  border-radius: 50%;
  background-color: #fff;
}
</style>
