<template>
  <div class="login-container">
    <h1>請輸入密碼</h1>
    <form @submit.prevent="login">
      <div class="form-group">
        <input autocomplete="no" type="password" v-model="password" id="password" required />
      </div>
      <button type="submit">登入</button>
    </form>
    <p v-if="loginStore.errorMessage" class="error-message">{{ loginStore.errorMessage }}</p>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useLoginStore } from '@/stores/login.service.js'

const password = ref('')
const loginStore = useLoginStore()
const onSubmitStatus = ref(false)

const login = () => {
  onSubmitStatus.value = true
  loginStore.login(password.value)
}

// 監聽 errorMessage 和 onSubmitStatus，若兩者都變化則清空密碼
watch([() => loginStore.errorMessage, () => onSubmitStatus.value], ([newErrorMessage, newOnSubmitStatus]) => {
  if (newErrorMessage && newOnSubmitStatus) {
    password.value = ''
  }
  onSubmitStatus.value = false
})

</script>

<style scoped>
.login-container {
  max-width: 400px;
  width: 80%;
  margin: auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  background-color: #f9f9f9;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 0.75rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

.error-message {
  color: red;
  margin-top: 1rem;
  font-weight: bold;
}
</style>
