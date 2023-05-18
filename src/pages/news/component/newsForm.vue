<script setup lang="ts">
import {reactive} from "vue";
import {addNewsAPI} from "@/pages/news/apis/NewsListHandler.js";
const formLabelWidth = '140px'
//reactive 用于将对象转化为响应式对象,在vue3中,ref只能用于基本类型,reactive可以用于对象
//欲要暴露form及其属性,需要使用reactive，并在setup中暴露出去
const form = reactive({
  id: Number(2),
  title: '',
  url: '',
  updateTime: '',
})
const rules={
  title: [
    { required: true, message: '请输入新闻标题', trigger: 'blur' },
    { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
  ],
  url: [
    { required: true, message: '请输入新闻地址', trigger: 'blur' },
    { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
  ],
}
const dataEcho = (data) => {
  form.id = data.id
  form.title = data.title
  form.url = data.url
  form.updateTime = data.updateTime
}
// todo 新增新闻
const add = async (news) => {
  const res = await addNewsAPI(news)
  console.log(res)
}
defineExpose({
  form,
  dataEcho,
})
</script>

<template>
    <el-form :model="form" :rules="rules">
      <el-form-item label="新闻标题" :label-width="formLabelWidth">
        <el-input v-model="form.title" autocomplete="off"/>
      </el-form-item>
      <el-form-item label="新闻地址(URL)" :label-width="formLabelWidth">
        <el-input v-model="form.url" autocomplete="off"/>
      </el-form-item>
    </el-form>
</template>

<style scoped lang="scss">

</style>