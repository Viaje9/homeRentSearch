import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useServiceStore = defineStore('service', () => {
  const rentData = ref({})

  function setData(val) {
    rentData.value = val
  }

  return { rentData, setData }
})
