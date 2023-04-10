import { createRouter,createWebHashHistory , createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PortfolioFileVue from '@/views/PortfolioFileView.vue'
import CompetencesView from '@/views/CompetencesView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_UR),
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
    },
    {
      path: '/competences',
      name: 'competences',
      component: CompetencesView
    }

  ]
})

export default router
