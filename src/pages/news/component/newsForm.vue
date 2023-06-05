<script setup lang="ts">
import {reactive,ref} from "vue";
import {addNewsAPI, updateNewsAPI} from "@/pages/news/apis/NewsListHandler.js";
import {now, timestamp} from "@vueuse/core";
const formLabelWidth = '140px'
//reactive 用于将对象转化为响应式对象,在vue3中,ref只能用于基本类型,reactive可以用于对象
//欲要暴露form及其属性,需要使用reactive，并在setup中暴露出去
const form = reactive({
  id: Number(0),
  title: String('default'),
  url: String('default'),
  updateTime: timestamp(),
})
const dialogFormVisible = ref(false)
const dialogTitle = ref(''); //弹窗标题
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
const setTitle = (title) => {
  dialogFormVisible.value = true
  dialogTitle.value = title
}
const dataEcho = (data) => {
  form.id = data.id
  form.title = data.title
  form.url = data.url
  form.updateTime = data.updateTime
}
const submit = () => {
  form.updateTime = timestamp()
  if (dialogTitle.value === '新增新闻') {
    console.log('新增')
    add()
  } else {
    edit()
  }
}
//     todo 编辑,更新新闻对象
const edit = async () => {
  const res = await updateNewsAPI(form)
  console.log(res)
  await emit("getNewsList")
}
// todo 新增新闻有问题
const add = async () => {
  const res = await addNewsAPI(form)
  console.log(res)
  await emit("getNewsList")
}
//暴露给外部的属性和方法
defineExpose({
  form,
  dataEcho,
  setTitle,
  dialogFormVisible,
  dialogTitle,
})
//定义可调用的外部方法,emit用于触发事件,emit("事件名",参数),事件名的定义在父组件中
const emit= defineEmits(['getNewsList'])

</script>

<template>
  <!--  对话框部分,展示标题-->
  <el-dialog v-model="dialogFormVisible" :title=dialogTitle >
    <!--    表单部分,绑定表单对象以及规则对象-->
    <el-form :model="form" :rules="rules">
      <el-form-item prop="title" label="新闻标题" :label-width="formLabelWidth">
        <el-input v-model="form.title" autocomplete="off"/>
      </el-form-item>
      <el-form-item prop="url" label="新闻地址(URL)" :label-width="formLabelWidth">
        <el-input v-model="form.url" autocomplete="off"/>
      </el-form-item>
    </el-form>
    <template #footer>
                <span class="dialog-footer">
                  <el-button @click="dialogFormVisible = false">Cancel</el-button>
                  <el-button type="primary" @click="submit();dialogFormVisible= false">Confirm</el-button>
                </span>
    </template>
  </el-dialog>
</template>

<style scoped lang="scss">

</style>