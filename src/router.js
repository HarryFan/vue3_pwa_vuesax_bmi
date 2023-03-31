import { createRouter, createWebHistory } from 'vue-router'

import BmiCalculator from '@/components/BmiCalculator.vue'

const routes = [

  {
    path: '/bmi',
    name: 'BmiCalculator',
    component: BmiCalculator,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
