<script lang="ts" setup>
import NewsForm from "@/pages/news/component/newsForm.vue";

console.log('进来啦')
import {deleteNewsAPI, getNewsListAPI} from '@/pages/news/apis/NewsListHandler.js'
import {Plus} from '@element-plus/icons-vue'
import {onMounted, reactive, ref, unref} from "vue";
//获得子组件
const formInstance=ref()
const newsList = ref([])
//     todo 弹窗表单
const setTitle = (title) => {
  formInstance.value.setTitle(title)
}
//     todo 弹窗表单
const dataEcho = async (data) => {
  console.log(data)
  formInstance.value.dataEcho(data)
}

//     todo 获取新闻列表
const getNewsList = async () => {
  const res = await getNewsListAPI()
  newsList.value = res.data.data
}
//     todo 生命周期
//mounted:在页面挂载后立即执行,只执行一次
onMounted(() => {
  getNewsList()
})
//     todo 删除
const deleted = async (id) => {
  const res = await deleteNewsAPI(id)
  console.log(res)
  await getNewsList()
}

</script>
<template>
  <el-main>
    <el-icon style="margin-right: 8px; margin-top: 1px" size="large" @click="setTitle('新增新闻')" ><Plus/>
  </el-icon>
    <el-scrollbar>
      <!--            列表渲染-->
      <el-table :data="newsList">
        <!--                需要与后端实体类型的值相同-->
        <el-table-column prop="title" label="Name" width="200"/>
        <el-table-column prop="url" label="URL" width="300"/>
        <el-table-column prop="updateTime" label="Date" width="300"/>
        <el-table-column label="操作">
          <template #default="scope">
            <!--                    点击编辑按钮传入当前对象,打开编辑界面,并且将当前对象的值传入,编辑界面的表单应当是双向绑定的，浮于表格之上-->
            <!--                    方法为:将当前对象的值传入表单,表单的值改变时,将表单的值传入当前对象-->
            <el-button type="primary" size="small" @click="setTitle('修改新闻');dataEcho(scope.row)" >编辑</el-button>
            <!--点击删除按钮传入当前对象的id-->
            <el-button type="danger" size="small" @click="deleted(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-scrollbar>
  </el-main>

  <news-form ref="formInstance" @getNewsList="getNewsList"/>

</template>


<style scoped>

</style>
