<script setup lang="ts">
import {reactive, ref} from "vue";
import {updateUserAPI,addUserAPI} from "@/pages/news/apis/usersHandler.js";
import type { UploadProps } from 'element-plus'
import { ElMessage } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
const data=reactive({
  dialogVisible: Boolean(false),
  dialogTitle: ref(''),
  form: {
    id: Number(0),
    username: String('default'),
    password: String('default'),
    image: String('default'),
    identity: Boolean(false),
  },
})
const method=reactive(
  {
    submit: async () => {
      if (data.dialogTitle === '注册用户') {
        console.log('新增')
        await method.add()
      } else {
       await method.edit()
      }
     data.dialogVisible=false
    },
    edit: async () => {
      console.log("修改好耶",data.form)
      const res = await updateUserAPI(data.form)
      console.log(res)
      await emit("getUserList")
    },
    add: async () => {
      const res = await addUserAPI(data.form)
      console.log(res)
      await emit("getUserList")
    },
    dataEcho: (curr) => {
      data.form.id = curr.id
      data.form.username = curr.username
      data.form.password = curr.password
      data.form.image = curr.image
      data.form.identity = curr.identity
      console.log("dataEcho",data.form)
    },
    setDialog: (title) => {
      data.dialogVisible = true
      data.dialogTitle = title
    },
  }
)
defineExpose({
  data,
  method,
})
const emit=defineEmits(['getUserList'])
const handleAvatarSuccess: UploadProps['onSuccess'] = (
    response,
    uploadFile
) => {
  data.form.image = URL.createObjectURL(uploadFile.raw!)
}

const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  if (rawFile.type !== 'image/jpeg') {
    ElMessage.error('Avatar picture must be JPG format!')
    return false
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('Avatar picture size can not exceed 2MB!')
    return false
  }
  return true
}
</script>

<template>
  <el-dialog :title="data.dialogTitle" v-model="data.dialogVisible" width="30%" center draggable>
   <el-form>
      <el-form-item label="用户">
        <el-input v-model="data.form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="data.form.password"></el-input>
      </el-form-item>
      <el-form-item label="头像">
        <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
        >
          <img v-if="data.form.image" :src="data.form.image" class="avatar"  alt="图片"/>
          <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
        </el-upload>
      </el-form-item>
      <el-form-item label="身份">
<!--        <el-input v-model="data.form.identity"></el-input>-->
<!--       根据data.form.identity,选择一个，true 为管理员，false为普通用户-->
        <el-radio-group v-model="data.form.identity">
          <el-radio label="true">管理员</el-radio>
          <el-radio label="false">普通用户</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="method.submit">提交</el-button>
        <el-button @click="data.dialogVisible = false">取消</el-button>
      </el-form-item>
   </el-form>
  </el-dialog>
</template>

<style scoped lang="scss">

</style>