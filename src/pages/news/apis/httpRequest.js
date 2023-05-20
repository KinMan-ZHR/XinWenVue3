import axios from "axios";
import 'element-plus/theme-chalk/el-message.css'
import { ElMessage } from 'element-plus'
import {useUserStore}  from '@/pages/news/dataStore/userdata.js'
import router from "@/pages/news/router";
const httpRequest = axios.create({
    baseURL: "/local",
    timeout: 10000,
})

// 请求拦截器
httpRequest.interceptors.request.use(config => {
    // 1.当发送网络请求时, 在页面中添加一个loading组件, 作为动画
    // 2.某些网络请求要求用户必须登录, 判断用户是否有token, 如果没有token跳转到login页面
    // 3.对请求的参数进行序列化(看服务器是否需要序列化)
        const userStore = useUserStore()
        const token=userStore.userInfo.data?userStore.userInfo.data.token:''
    if (token) {
        config.headers['token'] = token
    }

    return config;
}, error => {
        return Promise.reject(error);
    }
)
// 响应拦截器
httpRequest.interceptors.response.use(response => {
     //   console.log(response)
    //一般而言，只需要返回data即可
    if(response.data.code === 0){
        ElMessage({
            type: 'warning',
            message: response.data.msg
        })
        if (response.data.msg === 'NOT_LOGIN') {
            const userStore = useUserStore()
            userStore.clearUserInfo()
            router.push('/login')
        }
    }
        return response.data;
}, error => {
    return Promise.reject(error);
    }
)
export default httpRequest;