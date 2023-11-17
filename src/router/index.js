import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      props: { lang: "en" }
    },
    {
      path: '/th/',
      name: 'homeTH',
      component: HomeView,
      props: { lang: "th" }
    },
  ]
})

export default router
