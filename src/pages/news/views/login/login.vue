<script lang="ts" setup>
import {reactive, ref} from "vue";
import 'element-plus/theme-chalk/el-message.css'
import { ElMessage } from 'element-plus'
import {useRouter} from "vue-router";
import {useUserStore} from "@/pages/news/dataStore/userdata.js";
const userStore = useUserStore()
//reactive 用于将对象转化为响应式对象,在vue3中,ref只能用于基本类型,reactive可以用于对象
const form = reactive({
  username: '',
  password: '',
  agree: false
})

//校验规则，校验名必须与form中的属性名一致,按照产品经理的要求，用户名和密码都是必填项
const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 4, max: 14, message: '长度在 4 到 14 个字符', trigger: 'blur' }
  ],
  agree: [
    {
      validator: (rule, value, callback) => {
        if (!value) {
          callback(new Error('请勾选协议'))
        } else {
          callback()
        }
      }
    }
  ]
}
//获取form实例
const formRef = ref(null)
//获取路由实例
const router = useRouter()
const handleLogin = () => {

  //触发表单校验
  formRef.value.validate(async (valid) => {
    if (valid) {
      //校验成功
      console.log('校验成功')
      //todo 登录逻辑
      const {username, password} = form
      await userStore.getUserInfo({username, password})
      console.log(userStore.userInfo)
      //todo 登录成功后跳转到首页
      if (userStore.userInfo.code === 1) {
        //todo 提示登录成功
        ElMessage.success("登录成功")
        //todo 保存token
        //localStorage.setItem('token', res.data.token)
        //todo 跳转到首页
         await router.replace('/')
      }
    } else {
      //校验失败
      console.log('校验失败')
    }
  })
  console.log(form)
}

</script>
<template>
<div class="background">
<!--让elcard居中透明，上下也居中，不要遮挡背景-->
  <el-card class="loginCard" shadow="hover" style="width: 400px; margin: 200px auto 0;background: rgba(7,189,255,0.3)">
          <el-form ref="formRef" :model="form" :rules="rules" label-position="right" label-width="80px" status-icon>
<!--            prop指定校验名-->
            <el-form-item prop="username" >
<!--              #号的作用是将内容放到label中-->
              <template #label>
                <span style="color: #eeff00">用户名</span>
              </template>
              <el-input v-model="form.username" />
            </el-form-item>
            <el-form-item prop="password" >
              <template #label>
                <span style="color: #eeff00">密码</span>
              </template>
              <el-input v-model="form.password" />
            </el-form-item>
            <el-form-item prop="agree" label-width="22px">
              <el-checkbox size="large" v-model="form.agree">
               <i style="color: #00ffc4"> 我已同意隐私条款和服务条款</i>
              </el-checkbox>
            </el-form-item>
          </el-form>
    <!-- 登录按钮水平居中-->
    <div style="text-align: center">
      <el-button type="primary" @click="handleLogin">登录</el-button>
    </div>
  </el-card>
</div>
</template>
<style scoped>
.background{
  width: 100%;
  height: 100%;
  background: url("../../assets/loginbg.jpg");
  background-size:100% 100%;
  position: fixed;
  top: 0;
  left: 0;
}
.loginCard{
  margin-top: 200px;
}
</style>

