import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import { loginUser } from '../apis/login' // 引入 loginUser 函數

export const useLoginStore = defineStore('login', {
  state: () => ({
    isAuthenticated: false,
    errorMessage: '',
    router: useRouter()
  }),
  actions: {
    async login(credentials) {
      try {
        const res = await loginUser(credentials)
        if (res.status === 200) {
          // 假設 API 返回的數據中有 success 字段
          this.isAuthenticated = true
          this.router.push({ name: 'home' })
        } else {
          this.errorMessage = res.errorMsg || '登入過程中發生錯誤。'
        }
      } catch (error) {
        this.errorMessage = '登入過程中發生錯誤。'
      }
    },
    logout() {
      this.isAuthenticated = false
    }
  }
})
