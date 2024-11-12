<template>
  <div class="p-5">
    <!-- 導航條 -->
    <div class="flex items-center mb-4">
      <button @click="goBack" class="bg-gray-300 text-gray-700 rounded px-4 py-2 mr-2">返回首頁</button>
      <h1 class="text-2xl font-bold" v-if="isAdding">設定快選名稱</h1>
      <h1 class="text-2xl font-bold" v-else>已儲存的選項</h1>
    </div>

    <div v-if="isAdding" class="mb-4">
      <input v-model="quickSelectName" placeholder="請輸入快選名稱" required
        class="border border-gray-300 rounded p-2 w-full" />
      <div class="mt-2">
        <button @click="confirmSave" class="bg-blue-500 text-white rounded px-4 py-2 mr-2">確認</button>
        <button @click="cancel" class="bg-gray-300 text-gray-700 rounded px-4 py-2">取消</button>
      </div>
    </div>

    <div v-else>
      <ul class="list-disc pl-5 mb-4">
        <li v-for="(item, index) in savedOptions" :key="index"
          class="flex justify-between items-center mb-2 border border-gray-300 rounded p-2">
          <span>{{ item.name }}</span>
          <div>
            <button @click="confirmDelete(index)" class="bg-red-500 text-white rounded px-2 py-1 mr-1">刪除</button>
            <button @click="goToHome(index)" class="bg-green-500 text-white rounded px-2 py-1">讀取</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const quickSelectName = ref('');
const savedOptions = ref(JSON.parse(localStorage.getItem('savedOptions')) || []);
const isAdding = ref(false); // 預設為新增模式

onMounted(() => {
  const mode = router.currentRoute.value.params.mode; // 獲取路由參數
  isAdding.value = mode === 'add'; // 根據參數設置模式
});

function confirmSave() {
  if (!quickSelectName.value) {
    alert('快選名稱為必填');
    return;
  }

  const currentOptions = JSON.parse(localStorage.getItem('currentOptions'));
  savedOptions.value.push({ name: quickSelectName.value, options: currentOptions });
  localStorage.setItem('savedOptions', JSON.stringify(savedOptions.value));
  quickSelectName.value = ''; // 清空輸入框
  isAdding.value = false; // 切換到查看模式
}

function cancel() {
  router.back(); // 返回前一頁
}

function confirmDelete(index) {
  if (confirm('確定刪除嗎？')) {
    savedOptions.value.splice(index, 1);
    localStorage.setItem('savedOptions', JSON.stringify(savedOptions.value));
  }
}

function goBack() {
  router.push({ name: 'home' }); // 返回首頁
}

function goToHome(index) {
  const selectedOption = savedOptions.value[index];
  // 將選項儲存到 localStorage
  setLocalStorageItems(selectedOption.options); // 呼叫自定義的 setItem 函數
  router.push({ name: 'home' }); // 返回首頁
}

// 新增的 setLocalStorageItems 函數
function setLocalStorageItems(option) {
  if (option.order) localStorage.setItem('order', option.order);
  if (option.keywords) localStorage.setItem('keywords', option.keywords);
  if (option.kind) localStorage.setItem('kind', option.kind);
  if (option.rentPrice) localStorage.setItem('rentPrice', JSON.stringify(option.rentPrice));
  if (option.room) localStorage.setItem('room', JSON.stringify(option.room));
  if (option.other) localStorage.setItem('other', JSON.stringify(option.other));
  if (option.shape) localStorage.setItem('shape', JSON.stringify(option.shape));
  if (option.area) localStorage.setItem('area', JSON.stringify(option.area));
  if (option.floor) localStorage.setItem('floor', JSON.stringify(option.floor));
  if (option.toilet) localStorage.setItem('toilet', JSON.stringify(option.toilet));
  if (option.option) localStorage.setItem('option', JSON.stringify(option.option));
  if (option.fitment) localStorage.setItem('fitment', JSON.stringify(option.fitment));
  if (option.notice) localStorage.setItem('notice', JSON.stringify(option.notice));
  if (option.city) localStorage.setItem('city', option.city);
  if (option.locationType) localStorage.setItem('locationType', option.locationType);
  if (option.township) localStorage.setItem('township', JSON.stringify(option.township));
  if (option.subwayRoute) localStorage.setItem('subwayRoute', option.subwayRoute);
  if (option.subwayStation) localStorage.setItem('subwayStation', JSON.stringify(option.subwayStation));
}
</script>

<style scoped>
/* 添加樣式 */
</style>