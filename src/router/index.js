import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useLoginStore } from '@/stores/login.service.js'
import MemoryPage from '../views/MemoryPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/result',
      name: 'result',
      component: () => import('../views/ResultView.vue')
    },
    {
      path: '/map',
      name: 'map',
      component: () => import('../views/MapView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/memory/:mode',
      name: 'MemoryPage',
      component: MemoryPage
    }
  ]
})

router.beforeEach((to, from, next) => {
  const loginStore = useLoginStore()
  if (
    to.name !== 'login' &&
    !loginStore.isAuthenticated &&
    import.meta.env.MODE !== 'development'
  ) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
