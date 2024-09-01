<template>
  <div class="flex flex-wrap pb-24 justify-center">
    <template v-for="item in filterRentData" :key="item.post_id">
      <div class="m-2" style="width: 22rem">
        <ProcessImg
          :post-id="item.post_id"
          :img-url="item.photo_list[item.currentImgIndex]"
        ></ProcessImg>
        <div class="p-2">
          <p class="fs-7">
            圖{{ item.currentImgIndex + 1 }}/{{ item.photo_list.length }} ＄{{ item.price }}
            {{ item.floor_str }} {{ item.area }}坪
            <template v-if="item.count !== 1">
              <p class="text-red-500 inline">重複次數 {{ item.count }}</p>
            </template>
            <br />
            <span class="text-green-600">
              {{ item?.surrounding?.desc }}{{ item?.surrounding?.distance }}
            </span>
          </p>
          <a
            class="fs-7 text-blue-600"
            :href="`https://rent.591.com.tw/rent-detail-${item.post_id}.html`"
            target="_blank"
          >
            {{ item.location }}
          </a>
          <div class="flex justify-end">
            <CheckInsideArea :post-id="item.post_id"></CheckInsideArea>
          </div>
        </div>
      </div>
    </template>
  </div>

  <div class="fixed bottom-0 left-0 z-50 w-full h-28 pb-4 bg-slate-500 border-t border-gray-200">
    <div class="grid h-1/2 max-w-lg grid-cols-2 mx-auto font-medium">
      <button
        type="button"
        class="inline-flex flex-col items-center justify-center bg-slate-400 px-5 text-white"
        @click="research()"
      >
        重新查詢
      </button>
      <span
        class="inline-flex flex-col items-center justify-center px-5 text-white"
        @click="showRepeat = !showRepeat"
        :class="{
          'bg-blue-500': showRepeat,
          'bg-gray-500': !showRepeat
        }"
      >
        顯示重複
      </span>
    </div>

    <div class="grid h-1/2 max-w-lg grid-cols-4 mx-auto font-medium">
      <button
        type="button"
        class="inline-flex flex-col items-center justify-center px-5 group text-white"
        @click="prevPage()"
      >
        上一頁
      </button>
      <span class="flex items-center justify-center col-span-2 text-white"
        >第 {{ page + 1 }}/{{ Math.floor(+serviceStore.records / 30) }} 頁</span
      >
      <button
        type="button"
        class="inline-flex flex-col items-center justify-center px-5 group text-white"
        @click="nextPage()"
      >
        下一頁
      </button>
    </div>
  </div>
  <div v-if="showLoading" class="fixed w-screen h-svh opacity-50 top-0 left-0 bg-black z-50">
    <div class="flex items-center justify-center w-full h-full">
      <div class="px-3 py-1 text-xl font-medium leading-none text-center text-white">
        loading...
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useServiceStore } from '@/stores/service.js'
import { useRouter } from 'vue-router'
import ProcessImg from '@/components/ProcessImg.vue'
import CheckInsideArea from '@/components/CheckInsideArea.vue'

const router = useRouter()
const serviceStore = useServiceStore()
const { setData, setRentUrlParams, getRentDataEvent } = serviceStore
const page = ref(0)
const showLoading = ref(false)
const showRepeat = ref(false)

const filterRentData = computed(() => {
  return serviceStore.rentData.reduce((acc, obj) => {
    let existingObj = acc.find((item) => item.location === obj.location)
    if (existingObj && !showRepeat.value) {
      existingObj.count++
    } else {
      acc.push({ ...obj, count: 1 })
    }
    return acc
  }, [])
})

function prevPage() {
  if (page.value > 0) {
    page.value--
    const pageUrlParams = getPageUrlParams(page.value)
    showLoading.value = true
    getRentDataEvent(`${serviceStore.rentUrlParams}${pageUrlParams}`)
      .then(({ data }) => {
        setData(data.rentList)
        window.scrollTo(0, 0)
      })
      .finally(() => {
        showLoading.value = false
      })
  }
}

function nextPage() {
  const pageLength = Math.floor(+serviceStore.records / 30)
  if (page.value < pageLength - 1) {
    page.value++
    const pageUrlParams = getPageUrlParams(page.value)
    showLoading.value = true
    getRentDataEvent(`${serviceStore.rentUrlParams}${pageUrlParams}`)
      .then(({ data }) => {
        setData(data.rentList)
        window.scrollTo(0, 0)
      })
      .finally(() => {
        showLoading.value = false
      })
  }
}

const getPageUrlParams = (num) => {
  const i = num * 30
  return num ? `&firstRow=${i}` : ''
}

function research() {
  setRentUrlParams('')
  router.push({ name: 'home' })
}
</script>
