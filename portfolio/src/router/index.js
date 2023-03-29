import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PortfolioFileVue from '../views/PortfolioFileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/portfolio/:id',
      props: true,
      name: 'portfolio',
      component: PortfolioFileVue
    }

  ]
})

export default router
