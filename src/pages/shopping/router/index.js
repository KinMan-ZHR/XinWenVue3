import {createRouter, createWebHashHistory} from 'vue-router'
const home=()=>import('../views/home.vue')
const login=()=>import('../views/login.vue')
const register=()=>import('../views/register.vue')
const routes = [{
    path:'/home',
    name:'home',
    component:home
},{
    path:'/',
    redirect:'/home'
},{
    path:'/:pathMatch(.*)*',
    name:'404',
    component:()=>import('../../../components/404.vue')

}
,{
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
