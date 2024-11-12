<template>
  <div v-if="showLoading" class="fixed w-screen h-svh opacity-50 top-0 left-0 bg-black">
    <div class="flex items-center justify-center w-full h-full">
      <div class="px-3 py-1 text-xl font-medium leading-none text-center text-white">
        loading...
      </div>
    </div>
  </div>
  <div class="max-w-xl ">
    <button type="button" class="w-1/2 h-10 bg-blue-500 text-white" @click="goToMap()">Map</button>
    <button type="button" class="w-1/2 h-10 bg-blue-600 text-white mb-2" @click="goToMemoryPage('view')">記憶選單</button>
  </div>
  <div>
    <div class="max-w-xl">
      <div class="mx-5 pt-5">
        <div class="group">
          <div class="label">排序</div>
          <div class="btnGroup">
            <button v-for="item in condition.order" type="button" class="btn btn-outline-primary" :key="item.value"
              :class="{ active: order === item.value }" @click="onClickOrder(item.value)">
              {{ item.name }}
            </button>
          </div>
        </div>
        <div class="group">
          <div class="label">關鍵字</div>
          <div class="input-group">
            <input :value="keywords" @change="onChangeKeywords($event)" type="text" placeholder="請輸入..."
              class="form-control" />
            <button type="button" class="btn btn-danger" @click="resetKeywords()">Reset</button>
          </div>
        </div>
        <div class="group">
          <div class="label">類型</div>
          <div class="btnGroup">
            <button v-for="item in condition.kind" type="button" class="btn btn-outline-primary" :key="item.value"
              :class="{ active: kind === item.value }" @click="onClickKind(item.value)">
              {{ item.name }}
            </button>
          </div>
        </div>
        <div class="group">
          <span class="label">租金</span>
          <div class="input-group">
            <input :value="rentPrice[0]" @change="onChangeRentPrice($event, 0)" inputmode="decimal" type="number"
              placeholder="min" class="form-control" />
            <input :value="rentPrice[1]" @change="onChangeRentPrice($event, 1)" inputmode="decimal" type="number"
              placeholder="max" class="form-control" />
            <button type="button" class="btn btn-danger" @click="resetRentPrice()">Reset</button>
          </div>
        </div>
        <div class="group" v-if="kind === '1'">
          <div class="label">格局</div>
          <div class="btn-group" role="group">
            <button v-for="item in condition.multiRoom" type="button" class="btn btn-outline-primary" :key="item.value"
              :class="{ active: room.includes(item.value) }" @click="onClickRoom(item.value)">
              {{ item.name }}
            </button>
          </div>
        </div>
        <div class="group">
          <div class="label">特色</div>
          <div class="btn-group" role="group">
            <button v-for="item in condition.other" type="button" class="btn btn-outline-primary" :key="item.value"
              :class="{ active: other.includes(item.value) }" @click="onClickOther(item.value)">
              {{ item.name }}
            </button>
          </div>
        </div>
        <div class="group">
          <div class="label">型態</div>
          <div class="btn-group" role="group">
            <button v-for="item in condition.shape" type="button" class="btn btn-outline-primary" :key="item.value"
              :class="{ active: shape === item.value }" @click="onClickShape(item.value)">
              {{ item.name }}
            </button>
          </div>
        </div>
        <div class="group">
          <span class="label">坪數</span>
          <div class="input-group">
            <input :value="area[0]" @change="onChangeArea($event, 0)" inputmode="decimal" type="number"
              placeholder="min" class="form-control" />
            <input :value="area[1]" @change="onChangeArea($event, 1)" inputmode="decimal" type="number"
              placeholder="max" class="form-control" />
            <button type="button" class="btn btn-danger" @click="resetArea()">Reset</button>
          </div>
        </div>
        <div class="group">
          <div class="label">樓層</div>
          <div class="btn-group" role="group">
            <button v-for="item in condition.floor" type="button" class="btn btn-outline-primary" :key="item.value"
              :class="{ active: floor === item.value }" @click="onClickFloor(item.value)">
              {{ item.name }}
            </button>
          </div>
        </div>
        <div class="group">
          <div class="label">衛浴</div>
          <div class="btn-group" role="group">
            <button v-for="item in condition.multiToilet" type="button" class="btn btn-outline-primary"
              :key="item.value" :class="{ active: toilet.includes(item.value) }" @click="onClickToilet(item.value)">
              {{ item.name }}
            </button>
          </div>
        </div>
        <div class="group">
          <div class="label">設備</div>
          <div class="btn-group" role="group">
            <button v-for="item in condition.option" type="button" class="btn btn-outline-primary" :key="item.value"
              :class="{ active: option.includes(item.value) }" @click="onClickOption(item.value)">
              {{ item.name }}
            </button>
          </div>
        </div>
        <div class="group">
          <div class="label">裝潢</div>
          <div class="btn-group" role="group">
            <button v-for="item in condition.multiFitment" type="button" class="btn btn-outline-primary"
              :key="item.value" :class="{ active: fitment.includes(item.value) }" @click="onClickFitment(item.value)">
              {{ item.name }}
            </button>
          </div>
        </div>
        <div class="group">
          <div class="label">須知</div>
          <div class="btn-group" role="group">
            <button v-for="item in condition.multiNotice" type="button" class="btn btn-outline-primary"
              :key="item.value" :class="{ active: notice.includes(item.value) }" @click="onClickNotice(item.value)">
              {{ item.name }}
            </button>
          </div>
        </div>
      </div>
      <div class="mx-5 pt-2">
        <div class="group">
          <div class="label">地點</div>
          <div class="mb-2">
            <button v-for="item in cityList" :key="item.id" type="button" class="btn btn-outline-primary"
              :class="{ active: city === item.id }" @click="onClickCity(item.id)">
              {{ item.txt }}
            </button>
          </div>
          <div v-if="city" class="mb-2">
            <div class="btn-group" role="group">
              <button type="button" class="btn btn-outline-primary" :class="{ active: locationType === 'township' }"
                @click="onClickLocationType('township')">
                鄉鎮市區
              </button>
              <button v-if="checkHasSubway" type="button" class="btn btn-outline-primary"
                :class="{ active: locationType === 'subway' }" @click="onClickLocationType('subway')">
                捷運線
              </button>
            </div>
          </div>
          <template v-if="city">
            <div v-if="locationType === 'township'" class="mb-2">
              <button v-for="item in areaList" :key="item.value" type="button"
                class="btn btn-outline-primary text-nowrap" :class="{
                  active: township.includes(item.value),
                  max: township.length >= townshipDisabledLength && !township.includes(item.value)
                }" @click="onClickTownship(item.value)">
                {{ item.label }}
              </button>
            </div>
            <div v-if="locationType === 'subway'" class="mb-2">
              <button v-for="item in subwayRouteList" :key="item.pid" type="button"
                :class="{ active: subwayRoute === item.pid }" class="btn btn-outline-danger text-nowrap"
                @click="onClickSubwayRoute(item.pid)">
                {{ item.name }}
              </button>
            </div>
            <div v-if="locationType === 'subway' && subwayRoute" class="mb-2">
              <button v-for="item in subwayStationList" :key="item.nid" type="button" :class="{
                active: subwayStation.includes(item.nid),
                max:
                  subwayStation.length === subwayStationDisabledLength &&
                  !subwayStation.includes(item.nid)
              }" class="btn btn-outline-success text-nowrap" @click="onClickSubwayStation(item.nid)">
                {{ item.name }}
              </button>
            </div>
          </template>
        </div>
      </div>
    </div>
    <div class="flex justify-center mb-24">
      <button type="button" class="btn btn-danger submit" @click="saveCurrentOptions()">儲存</button>
      <button type="button" class="btn btn-success submit" @click="submit()">Submit</button>
    </div>
  </div>
</template>

<script setup>
import { condition } from '@/assets/constant/rent.js'
import { ref, computed } from 'vue'
import { useServiceStore } from '@/stores/service.js'
import { useRouter } from 'vue-router'
import cityList from '@/assets/constant/city.js'
import areaCascade from '@/assets/constant/areaCascade'
import { subwayRoutes, subwayStations } from '@/assets/constant/subway.js'

const router = useRouter()

const checkHasSubway = computed(() => {
  return cityList.some((item) => {
    if (item.id === city.value) {
      return !!item.subway
    }
    return false
  })
})

const areaList = computed(() => {
  return areaCascade.find((item) => item.value === city.value).children
})

const subwayRouteList = computed(() => {
  const subwayIndex = cityList.find((item) => item.id === city.value).subway
  return subwayRoutes[subwayIndex]
})

const subwayStationList = computed(() => {
  return subwayStations[subwayRoute.value]
})

const order = ref(localStorage.getItem('order'))
function onClickOrder(value) {
  if (order.value === value) {
    order.value = ''
  } else {
    order.value = value
  }

  localStorage.setItem('order', order.value)
}

const keywords = ref(localStorage.getItem('keywords') || '')
function onChangeKeywords(event) {
  keywords.value = event.target.value
  localStorage.setItem('keywords', keywords.value)
}
function resetKeywords() {
  keywords.value = ''
  localStorage.setItem('keywords', keywords.value)
}

const kind = ref(localStorage.getItem('kind') || '')
function onClickKind(value) {
  if (kind.value === value) {
    kind.value = ''
  } else {
    kind.value = value
  }

  room.value = []
  localStorage.setItem('room', JSON.stringify(room.value))
  localStorage.setItem('kind', kind.value)
}

const rentPrice = ref(JSON.parse(localStorage.getItem('rentPrice')) || ['', ''])
function onChangeRentPrice(event, index) {
  rentPrice.value[index] = event.target.value
  localStorage.setItem('rentPrice', JSON.stringify(rentPrice.value))
}
function resetRentPrice() {
  rentPrice.value = ['', '']
  localStorage.setItem('rentPrice', JSON.stringify(rentPrice.value))
}

const room = ref(JSON.parse(localStorage.getItem('room')) || [])
function onClickRoom(value) {
  if (room.value.includes(value)) {
    room.value = room.value.filter((item) => item !== value)
  } else {
    room.value.push(value)
  }
  localStorage.setItem('room', JSON.stringify(room.value))
}

const other = ref(JSON.parse(localStorage.getItem('other')) || [])
function onClickOther(value) {
  if (other.value.includes(value)) {
    other.value = other.value.filter((item) => item !== value)
  } else {
    other.value.push(value)
  }
  localStorage.setItem('other', JSON.stringify(other.value))
}

const shape = ref(JSON.parse(localStorage.getItem('shape')) || '')
function onClickShape(value) {
  if (shape.value === value) {
    shape.value = ''
  } else {
    shape.value = value
  }
  localStorage.setItem('shape', JSON.stringify(shape.value))
}

const area = ref(JSON.parse(localStorage.getItem('area')) || ['', ''])
function onChangeArea(event, index) {
  area.value[index] = event.target.value
  localStorage.setItem('area', JSON.stringify(area.value))
}
function resetArea() {
  area.value = ['', '']
  localStorage.setItem('area', JSON.stringify(area.value))
}

const floor = ref(JSON.parse(localStorage.getItem('floor')) || '')
function onClickFloor(value) {
  if (floor.value === value) {
    floor.value = ''
  } else {
    floor.value = value
  }
  localStorage.setItem('floor', JSON.stringify(floor.value))
}

const toilet = ref(JSON.parse(localStorage.getItem('toilet')) || [])
function onClickToilet(value) {
  if (toilet.value.includes(value)) {
    toilet.value = toilet.value.filter((item) => item !== value)
  } else {
    toilet.value.push(value)
  }
  localStorage.setItem('toilet', JSON.stringify(toilet.value))
}

const option = ref(JSON.parse(localStorage.getItem('option')) || [])
function onClickOption(value) {
  if (option.value.includes(value)) {
    option.value = option.value.filter((item) => item !== value)
  } else {
    option.value.push(value)
  }
  localStorage.setItem('option', JSON.stringify(option.value))
}

const fitment = ref(JSON.parse(localStorage.getItem('fitment')) || [])
function onClickFitment(value) {
  if (fitment.value.includes(value)) {
    fitment.value = fitment.value.filter((item) => item !== value)
  } else {
    fitment.value.push(value)
  }
  localStorage.setItem('fitment', JSON.stringify(fitment.value))
}

const notice = ref(JSON.parse(localStorage.getItem('notice')) || [])
function onClickNotice(value) {
  if (notice.value.includes(value)) {
    notice.value = notice.value.filter((item) => item !== value)
  } else {
    notice.value.push(value)
  }
  localStorage.setItem('notice', JSON.stringify(notice.value))
}

const city = ref(localStorage.getItem('city') || '1')
function onClickCity(value) {
  if (city.value === value) {
    city.value = ''
  } else {
    city.value = value
  }
  locationType.value = 'township'
  township.value = []
  subwayRoute.value = ''
  subwayStation.value = []

  localStorage.setItem('city', city.value)
  localStorage.setItem('locationType', locationType.value)
  localStorage.setItem('township', JSON.stringify(township.value))
  localStorage.setItem('subwayRoute', subwayRoute.value)
  localStorage.setItem('subwayStation', JSON.stringify(subwayStation.value))
}

const locationType = ref(localStorage.getItem('locationType') || 'township')
function onClickLocationType(value) {
  locationType.value = value
  township.value = []
  subwayRoute.value = ''
  subwayStation.value = []
  localStorage.setItem('locationType', locationType.value)
  localStorage.setItem('township', JSON.stringify(township.value))
  localStorage.setItem('subwayRoute', subwayRoute.value)
  localStorage.setItem('subwayStation', JSON.stringify(subwayStation.value))

  if (subwayRouteList.value?.length === 1) {
    const pid = subwayRouteList.value[0].pid
    onClickSubwayRoute(pid)
  }
}

const townshipDisabledLength = 4
const township = ref(JSON.parse(localStorage.getItem('township')) || [])
function onClickTownship(value) {
  if (township.value.length >= townshipDisabledLength && !township.value.includes(value)) {
    township.value[township.value.length - 1] = value
  } else {
    if (township.value.includes(value)) {
      township.value = township.value.filter((item) => item !== value)
    } else {
      township.value.push(value)
    }
  }

  localStorage.setItem('township', JSON.stringify(township.value))
}

const subwayRoute = ref(localStorage.getItem('subwayRoute') || '')
function onClickSubwayRoute(value) {
  subwayRoute.value = value
  subwayStation.value = []
  localStorage.setItem('subwayRoute', value)
  localStorage.setItem('subwayStation', JSON.stringify(subwayStation.value))
}

const subwayStationDisabledLength = 5
const subwayStation = ref(JSON.parse(localStorage.getItem('subwayStation')) || [])
function onClickSubwayStation(value) {
  if (
    subwayStation.value.length >= subwayStationDisabledLength &&
    !subwayStation.value.includes(value)
  ) {
    subwayStation.value[subwayStation.value.length - 1] = value
  } else {
    if (subwayStation.value.includes(value)) {
      subwayStation.value = subwayStation.value.filter((item) => item !== value)
    } else {
      subwayStation.value.push(value)
    }
  }
  localStorage.setItem('subwayStation', JSON.stringify(subwayStation.value))
}

const serviceStore = useServiceStore()
const { setData, setRecords, setRentUrlParams, getRentDataEventV2 } = serviceStore
// console.log(serviceStore)


const showLoading = ref(false)

const getOrderParams = () => {
  switch (order.value) {
    case '1':
      return {}
    case '2':
      return { order: 'posttime', orderType: 'desc' }
    case '3':
      return { order: 'money', orderType: 'desc' }
    case '4':
      return { order: 'money', orderType: 'asc' }
    case '5':
      return { order: 'area', orderType: 'desc' }
    case '6':
      return { order: 'area', orderType: 'asc' }
    default:
      return {}
  }
}

const getKeywordParams = () => {
  const cityText = cityList.find((item) => item.id === city.value).txt
  return keywords.value ? keywords.value : cityText
}

function submit() {
  showLoading.value = true

  const urlParams = {
    regionid: city.value,
    ...getOrderParams(),
    keywords: getKeywordParams(),
    kind: kind.value,
    rentprice: rentPrice.value[0] && rentPrice.value[1] ? `${rentPrice.value[0]},${rentPrice.value[1]}` : '',
    multiRoom: room.value.length ? room.value.join(',') : '',
    other: other.value.length ? other.value.join(',') : '',
    shape: shape.value,
    area: area.value[0] && area.value[1] ? `${area.value[0]},${area.value[1]}` : '',
    floor: floor.value,
    multiToilet: toilet.value.length ? toilet.value.join(',') : '',
    option: option.value.length ? option.value.join(',') : '',
    multiFitment: fitment.value.length ? fitment.value.join(',') : '',
    multiNotice: notice.value.length ? notice.value.join(',') : '',
    searchtype: locationType.value === 'township' ? 1 : locationType.value === 'subway' ? 4 : '',
    sectionid: township.value.length ? township.value.join(',') : '',
    mrtline: subwayRoute.value,
    mrtcoods: subwayStation.value.length ? subwayStation.value.join(',') : '',
  }

  getRentDataEventV2(urlParams).then((res) => {
    if (res.status === 200) {
      const { data } = res

      setRentUrlParams({
        ...urlParams,
        version: data.version,
        timestamp: data.timestamp
      })
      setData(data.rentList)
      setRecords(data.records)
      router.push({ name: 'result' })
    } else {
      alert(res.errorMsg)
    }
  }).finally(() => {
    showLoading.value = false
  })
}

function goToMap() {
  router.push({ name: 'map' })
}

function goToMemoryPage(mode) {
  router.push({ name: 'MemoryPage', params: { mode } }); // 傳遞模式參數
}

function saveCurrentOptions() {
  const currentOptions = {
    order: order.value,
    keywords: keywords.value,
    kind: kind.value,
    rentPrice: rentPrice.value,
    room: room.value,
    other: other.value,
    shape: shape.value,
    area: area.value,
    floor: floor.value,
    toilet: toilet.value,
    option: option.value,
    fitment: fitment.value,
    notice: notice.value,
    city: city.value,
    locationType: locationType.value,
    township: township.value,
    subwayRoute: subwayRoute.value,
    subwayStation: subwayStation.value,
  };

  localStorage.setItem('currentOptions', JSON.stringify(currentOptions));
  goToMemoryPage('add')
}
</script>

<style scoped></style>
