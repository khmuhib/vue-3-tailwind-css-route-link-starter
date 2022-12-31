import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import ServiceView from '../views/ServiceView.vue'
import layoutOne from './../layout/layoutOne.vue'

const router = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {
            layout: layoutOne
        }
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView,
        meta: {
            layout: layoutOne
        }
    },
    {
        path: '/contact',
        name: 'contact',
        component: ContactView,
        meta: {
            layout: layoutOne
        }
    },
    {
        path: '/services',
        name: 'services',
        component: ServiceView,
        meta: {
            layout: layoutOne
        }
    },
]

export default router