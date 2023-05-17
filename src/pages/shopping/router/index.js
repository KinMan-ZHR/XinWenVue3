// createRouter：创建router实例对象
// createWebHistory：创建history模式的路由

import { createRouter, createWebHashHistory } from 'vue-router'
const Login = () => import('../views/Login/index.vue');
const Layout = () => import('../views/Layout/index.vue');
const Home = () => import('../views/Home/index.vue');
const Category = () => import('../views/Category/index.vue');
const SubCategory = () => import('../views/SubCategory/index.vue');
const Detail = () => import('../views/Detail/index.vue');
const CartList = () => import('../views/CartList/index.vue');
const Checkout = () => import('../views/Checkout/index.vue');
const Pay = () => import('../views/Pay/index.vue');
const PayBack = () => import('../views/Pay/PayBack.vue');
const Member = () => import('../views/Member/index.vue');
const UserInfo = () => import('../views/Member/components/UserInfo.vue');
const UserOrder = () => import('../views/Member/components/UserOrder.vue');


const router = createRouter({
  history: createWebHashHistory(),
  // path和component对应关系的位置
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: Home
        },
        {
          path: 'category/:id',
          component: Category
        },
        {
          path: 'category/sub/:id',
          component: SubCategory
        },
        {
          path: 'detail/:id',
          component: Detail
        },
        {
          path: 'cartlist',
          component: CartList
        },
        {
          path: 'checkout',
          component: Checkout
        },
        {
          path: 'pay',
          component: Pay
        },
        {
          path: 'paycallback',
          component: PayBack
        },
        {
          path: 'member',
          component: Member,
          children: [
            {
              path: '',
              component: UserInfo
            },
            {
              path: 'order',
              component: UserOrder
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      component: Login
    }
  ],
  // 路由滚动行为定制
  scrollBehavior () {
    return {
      top: 0
    }
  }
})

export default router
