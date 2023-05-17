// history模式
import {
    createRouter,
    createWebHashHistory,
} from 'vue-router'
import Home from "@/pages/index/Index.vue";
const routes = [
// 路由的默认路径
    {
        path:'/',
        redirect:"/home"
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/news',
        name: 'news',
        component: () => import('../../../../news.html')
    },
    {
        path: '/shopping',
        name: 'shopping',
        component: () => import('../../../../shopping.html')
    }
]

// 创建路由对象
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router;
