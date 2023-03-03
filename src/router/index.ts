import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/QuizesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/quiz/:id',
      name: 'Quiz',
      component: () => import('../views/QuizView.vue')
    }
  ]
})

export default router
