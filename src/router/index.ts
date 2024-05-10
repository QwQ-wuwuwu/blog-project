import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/WelcomeView.vue')
    },
    {
      path: '/login',
      component: () => import('@/views/LoginView.vue')
    },
    {
      path: '/index',
      component: () => import('@/views/IndexView.vue')
    },
    {
      path: '/blog',
      component: () => import('@/views/BlogView.vue')
    },
    {
      path: '/user',
      component: () => import('@/views/UserView.vue')
    }
  ]
})

export default router
