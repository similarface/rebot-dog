import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'
export const constantRoutes = [
    {
        path: '/home',
        component: Layout,
        children: [
            {
                path: 'index',
                component: () => import('@/view/home/index'),
                name: 'home',
                meta: {title: 'index'}
            }
        ]
    },
    {
        path: '/',
        component: Layout
    }
]

const createRouter = () => new Router({
    routes: constantRoutes
})

const router = createRouter()


export default router
