import {defineStore} from "pinia";
import {ref} from "vue";
import {loginAPI} from "@/pages/news/apis/usersHandler"; // 1️⃣ import defineStore
export const useUserStore = defineStore("user", ()=>{ // 2️⃣ define a store
    const userInfo=ref({})// 3️⃣ add some state
    // 4️⃣ 定义一些actions
    const getUserInfo=async ({username,password})=>{
        userInfo.value=await loginAPI({username, password})
    }
    const clearUserInfo=()=>{
        userInfo.value={}
    }
    // 5️⃣ return the state and the actions
    return {
        userInfo,
        getUserInfo,
        clearUserInfo
    }
},{
    persist: true,
});
