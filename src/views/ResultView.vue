<template>
  <div class="flex flex-wrap pb-16 justify-center">
    <template v-for="item in list" :key="item.post_id">
      <div class="m-2" style="width: 18rem">
        <div class="relative">
          <div class="prev" @click="prev(item.post_id)"><p class="arrow">&lt;</p></div>
          <div class="next" @click="next(item.post_id)"><p class="arrow">&gt;</p></div>
          <img :src="item.photo_list[item.currentImgIndex]" />
        </div>
        <div class="p-2">
          <p class="fs-5">
            {{ item.address_img_title }} {{ item.currentImgIndex + 1 }}/{{ item.photo_list.length }}
          </p>
          <a
            class="fs-7"
            :href="`https://rent.591.com.tw/rent-detail-${item.post_id}.html`"
            target="_blank"
          >
            {{ item.location }}
          </a>
        </div>
      </div>
    </template>
  </div>

  <div class="fixed bottom-0 left-0 z-50 w-full h-16 bg-slate-500 border-t border-gray-200">
    <div class="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
      <button
        type="button"
        class="inline-flex flex-col items-center justify-center px-5 group text-white"
        @click="prevPage()"
      >
        上一頁
      </button>
      <span class="flex items-center justify-center col-span-2 text-white"
        >第 {{ page + 1 }} 頁</span
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
</template>

<script setup>
// import { condition } from '@/assets/constant/rent.js'
import data from '@/assets/json/20240422.json'
import { reactive, ref } from 'vue'
import { useServiceStore } from '@/stores/service.js'

const serviceStore = useServiceStore()
const { rentData } = serviceStore
console.log(rentData)

const page = ref(0)

const list = ref(reactive([]))

function prevPage() {
  const pageLength = data.length
  if (page.value > 0) {
    page.value--
  } else {
    page.value = pageLength - 1
  }

  changePage(page.value)
}

function nextPage() {
  const pageLength = data.length
  if (page.value < pageLength - 1) {
    page.value++
  } else {
    page.value = 0
  }
  changePage(page.value)
}
function prev(id) {
  const index = list.value.findIndex((item) => item.post_id === id)
  const item = list.value[index]

  if (item.currentImgIndex > 0) {
    item.currentImgIndex--
  } else {
    item.currentImgIndex = item.photo_list.length - 1
  }
}

function next(id) {
  const index = list.value.findIndex((item) => item.post_id === id)
  const item = list.value[index]

  if (item.currentImgIndex < item.photo_list.length - 1) {
    item.currentImgIndex++
  } else {
    item.currentImgIndex = 0
  }
}

const changePage = (page) => {
  const rawData = data[page].data.data
    .map((item) => {
      return {
        ...item,
        currentImgIndex: 0
      }
    })
    .filter((item) => item.photo_list?.length > 0)
  console.log(rawData)
  list.value = reactive(rawData)
}

changePage(page.value)
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
