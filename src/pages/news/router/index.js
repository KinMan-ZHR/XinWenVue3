// 用于配置新闻模块的路由规则
import {createRouter, createWebHashHistory} from 'vue-router'

const newsAd = () => import('../views/layOut/administer/news.vue')
const login = () => import('../views/login.vue')
const register = () => import('../views/register.vue')
const layOut = () => import('../views/layOut/layOut.vue')
const display = () => import('../views/layOut/customer/display.vue')
const usersAd = () => import('../views/layOut/administer/users.vue')
const routes = [{}, {
    path: '/layOut',
    name: 'home',
    component: layOut,
    children: [{
        path: '/newsAd',
        name: 'newsAd',
        component: newsAd
        },
        {
            path: '',
            name: 'display',
            component: display
        },
        {
            path: '/usersAd',
            name: 'usersAd',
            component: usersAd

        }]
}, {
    path: '/',
    redirect: '/layOut'
}, {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('../../../components/404.vue')

}, {
    path: '/login',
    name: 'login',
    component: login
},
    {
        path: '/register',
        name: 'register',
        component: register
    }]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router
