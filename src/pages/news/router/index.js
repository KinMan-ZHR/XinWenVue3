// 用于配置新闻模块的路由规则
import {createRouter, createWebHashHistory} from 'vue-router'

const newsAd = () => import('../views/layOut/administer/news.vue')
const login = () => import('../views/login/login.vue')
const register = () => import('../views/login/register.vue')
const layOut = () => import('../views/layOut/layOut.vue')
const display = () => import('../views/layOut/customer/display.vue')
const usersAd = () => import('../views/layOut/administer/users.vue')

function singleDisplay() {
    return import('../component/newsSingle.vue')
}

const routes = [ {
    path: '/layOut',
    username: 'home',
    component: layOut,
    children: [
        // 内容页子路由
        {
        path: '/newsAd',
        username: 'newsAd',
        component: newsAd
        },
        {
            path: '/newsDisplay',
            username: 'singleDisplay',
            component: singleDisplay
        },
        {
            path:'',
            username: 'display',
            component: display
        },
        {
            path: '/usersAd',
            username: 'usersAd',
            component: usersAd

        }]
},
    {
    path: '/',
    redirect: '/layOut'
}, {
    path: '/:pathMatch(.*)*',
    username: '404',
    component: () => import('../../../components/404.vue')

}, {
    path: '/login',
    username: 'login',
    component: login
},
    {
        path: '/register',
        username: 'register',
        component: register
    }]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router
