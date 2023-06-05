<template>
    <el-container class="layout-container-demo" style="height: 100%">
        <el-aside width="200px" style="border: 1px #eee">

                <el-menu :default-openeds="['1', '3']">
                    <el-menu-item index="2-1" @click="newsDisplay()">
                        <el-icon><icon-menu/></el-icon>
                        新闻展示
                    </el-menu-item>
                    <el-sub-menu index="1">
                        <template #title>
                            <el-icon><message /></el-icon>管理员
                        </template>
                        <el-menu-item index="1-1" @click="userControl()">用户管理</el-menu-item>
                        <el-menu-item index="1-2">评论管理</el-menu-item>
                        <el-menu-item index="1-3" @click="newsControl()">新闻管理</el-menu-item>
                    </el-sub-menu>
                </el-menu>
        </el-aside>
        <el-container>
            <el-header style="background-color: #FA8BFF;
background-image: linear-gradient(45deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%); background-size: 100% 100%
">
                <el-row :align="'bottom'">
                    <el-col :span="12">
                        <div class="logo">
                            <img
                                    style="width: 50px; height: 50px"
                                    src="@/assets/imgs/logo.svg"
                                    alt="logo">
<!--    显示新闻发布系统的文字，靠左，上下居中，楷体，红色-->
                            <span style="font-size: 40px; margin-left: 10px; font-family: '楷体',serif; color: red;
">新闻发布系统</span>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="toolbar" style="text-align: right; font-size: 30px">
                            <el-dropdown>
                                <el-icon style="margin-right: 8px;" size="large"
                                ><setting/></el-icon>
                                <template #dropdown>
                                    <el-dropdown-menu>
                                      <template v-if="userStore.userInfo.data">
                                        <el-dropdown-item>个人中心</el-dropdown-item>
                                        <el-dropdown-item>修改密码</el-dropdown-item>
                                        <el-dropdown-item >
                                          <el-popconfirm @confirm="logout" title="退出？" confirm-button-text="确认" cancel-button-text="取消">
                                            <template #reference>
                                              退出登录
                                            </template>
                                        </el-popconfirm>
                                      </el-dropdown-item>
                                      </template>
                                      <template v-else>
                                        <el-dropdown-item @click="login">login</el-dropdown-item>
                                      </template>
                                    </el-dropdown-menu>
                                </template>
                            </el-dropdown>
<!--                          默认显示未登录,若userStore.userInfo.data.user.username不为空则显示-->
                          <el-icon><User/></el-icon>
                          <span style="font-size: 30px; margin-right: 10px; ">{{userStore.userInfo.data?userStore.userInfo.data.user.username:'未登录'}}</span>
                        </div>
                    </el-col>
                </el-row>
            </el-header>
           <router-view></router-view>
        </el-container>
    </el-container>
</template>

<script lang="ts" setup>
import { Menu as IconMenu, Message, Setting,User} from '@element-plus/icons-vue'
    import {useRouter} from 'vue-router'
import {useUserStore} from "@/pages/news/dataStore/userdata.js"
const userStore = useUserStore()
    const router = useRouter()

    const logout = () => {
        userStore.clearUserInfo()
        router.push('/login')
    }
    const login = () => {
        router.push('/login')
    }
    const userControl = () => {
        router.push('/usersAd')
    }
    const newsControl = () => {
        router.push('/newsAd')
    }
    const newsDisplay = () => {
        router.push('/')
    }

</script>

<style scoped lang="scss">
//内容铺满不留边框
    .layout-container-demo {
        margin: 0;
      border: none;
    }

    .logo {
        display: flex;
        align-items: center;
        height: 100%;
    }
</style>
