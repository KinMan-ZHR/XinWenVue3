<template>
    <el-container class="layout-container-demo" style="height: 750px; border: 1px solid #eee">

        <el-aside width="200px" style="border: 1px #eee">
            <el-scrollbar>
                <el-menu :default-openeds="['1', '3']">
                    <el-menu-item index="2-1">
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
            </el-scrollbar>
        </el-aside>

        <el-container>
            <el-header style="background-color: #FA8BFF;
background-image: linear-gradient(45deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%);
">
                <el-row>
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
                                <el-icon style="margin-right: 8px; margin-top: 5px" size="large"
                                ><setting/></el-icon>
                                <template #dropdown>
                                    <el-dropdown-menu>
                                        <el-dropdown-item><router-link to="/login">login
                                        </router-link>
                                        </el-dropdown-item>
                                        <el-dropdown-item>
                                            <button @click="logout">logOut</button>
                                        </el-dropdown-item>
                                    </el-dropdown-menu>
                                </template>
                            </el-dropdown>
                            <span >Tom</span>
                        </div>
                    </el-col>
                </el-row>
            </el-header>

           <router-view></router-view>

            <el-footer style="text-align: center; font-size: 30px; color: #ccc; margin-top: 10px">
                新闻发布系统
            </el-footer>
        </el-container>
    </el-container>
</template>

<script lang="ts" setup>

import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'
    import {useRouter} from 'vue-router'

    const router = useRouter()

    const logout = () => {
        router.push('/login')
    }
    const userControl = () => {
        router.push('/usersAd')
    }
    const newsControl = () => {
        router.push('/newsAd')
    }
</script>

<style scoped>

</style>
