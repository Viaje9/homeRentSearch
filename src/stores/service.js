import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getRentData } from '@/apis/rent.js'

export const useServiceStore = defineStore('service', () => {
  const rentData = ref([])
  const records = ref(null)
  const rentUrlParams = ref('')
  const keepAliveDataList = ref([])

  function setData(val) {
    rentData.value = val
      .map((item) => {
        return {
          ...item,
          currentImgIndex: 0
        }
      })
      .filter((item) => item.photo_list?.length > 0)
      .reduce((acc, obj) => {
        let existingObj = acc.find((item) => item.location === obj.location)
        if (existingObj) {
          existingObj.count++
        } else {
          acc.push({ ...obj, count: 1 })
        }
        return acc
      }, [])
  }

  function setRecords(val) {
    if (typeof val === 'string') {
      records.value = val.replace(/,/g, '')
    } else {
      records.value = '0'
    }
  }

  function setRentUrlParams(val) {
    if (!val) {
      keepAliveDataList.value = []
    }
    rentUrlParams.value = val
  }

  function prevImg(id) {
    const index = rentData.value.findIndex((item) => item.post_id === id)
    const item = rentData.value[index]
    if (item.currentImgIndex > 0) {
      item.currentImgIndex--
    } else {
      item.currentImgIndex = item.photo_list.length - 1
    }
  }

  function nextImg(id) {
    const index = rentData.value.findIndex((item) => item.post_id === id)
    const item = rentData.value[index]

    if (item.currentImgIndex < item.photo_list.length - 1) {
      item.currentImgIndex++
    } else {
      item.currentImgIndex = 0
    }
  }

  function getRentDataEvent(urlParams) {
    const item = keepAliveDataList.value.find((item) => item.urlParams === urlParams)
    if (item) {
      return new Promise((resolve) => resolve(item.result))
    }

    return getRentData(urlParams ? `&${urlParams}` : ' ').then((result) => {
      keepAliveDataList.value.push({
        urlParams,
        result
      })
      return result
    })
  }

  return {
    rentData,
    setData,
    records,
    setRecords,
    rentUrlParams,
    setRentUrlParams,
    prevImg,
    nextImg,
    getRentDataEvent
  }
})
