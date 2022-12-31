import { createRouter, createWebHistory } from 'vue-router'

import MuhibRoute from './muhib.js'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: []
})

const modules = {
  muhib: MuhibRoute,
}

Object.keys(modules).map((key) => {
  modules[key].map((route) => {
    router.addRoute(route)
  })
})

export default router
