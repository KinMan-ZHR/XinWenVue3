// 用于配置新闻模块的路由规则
import {createRouter, createWebHashHistory} from 'vue-router'
const a1=()=>import('../views/display.vue')
const a2=()=>import('../views/02.vue')
const login=()=>import('../views/login.vue')
const register=()=>import('../views/register.vue')
const routes = [{
    path:'/a1',
    name:'a1',
    component:a1
},{
    path:'/a2',
    name:'a2',
    component:a2
},{
    path:'/',
    redirect:'/a1'
},{
    path:'/:pathMatch(.*)*',
    name:'404',
    component:()=>import('../../../components/404.vue')

},{
    path:'/login',
    name:'login',
    component:login
},
{
    path:'/register',
    name:'register',
    component:register
}]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router
