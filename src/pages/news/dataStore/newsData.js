import {ref} from "vue";
import {defineStore} from "pinia";
import {getNewsListAPI} from "../apis/NewsListHandler";
export const useNewsStore = defineStore('news', () => {
    const newsList = ref([])
    // action 获取新闻列表数据的方法, 通过调用接口获取数据, 并将数据赋值给newsList, 供页面使用
    const getNewsList = async() => {
        console.log('执行了方法')
        const res = await getNewsListAPI()
        newsList.value = res.data.data

    }
    // 将newsList和getNewsList暴露出去, 供页面使用
    return {
        newsList,
        getNewsList
    }
},{
   //  persist: true // 将数据持久化, 防止页面刷新数据丢失
    }
)