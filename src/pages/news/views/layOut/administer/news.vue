<template>
    这里是新闻管理界面
    <el-main>
        <el-scrollbar>
            <el-table :data="newsList">
<!--                需要与后端实体类型的值相同-->
                <el-table-column prop="updateTime" label="Date" width="140" />
                <el-table-column prop="title" label="Name" width="120" />
                <el-table-column prop="url" label="URL" />
                <el-table-column label="操作">
                    <el-button type="primary" size="small">编辑</el-button>
                    <el-button type="danger" size="small">删除</el-button>
                </el-table-column>
            </el-table>
        </el-scrollbar>
    </el-main>
</template>
<script  setup>
console.log('进来啦')
// import {useNewsStore} from '@/pages/news/dataStore/newsData'
// const newsStore = useNewsStore()
// console.log(newsStore.newsList)
import {getNewsListAPI} from "@/pages/news/apis/getNewsList";
import {ref} from "vue";
const newsList = ref([])
getNewsListAPI().then(res => {
    newsList.value = res.data.data
    console.log(newsList.value)
})
//todo 列表渲染


const logout = () => {
  console.log('logout')
}
</script>

<style scoped>

</style>
