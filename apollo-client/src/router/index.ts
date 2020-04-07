import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
    },
    {
        path: '/add',
        name: 'Add Book',
        component: () => import(/* webpackChunkName: "add" */ '@/views/AddBook.vue')
    },
    {
        path: '/details/:title',
        name: 'Details',
        component: () => import(/* webpackChunkName: "about" */ '@/views/Details.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
