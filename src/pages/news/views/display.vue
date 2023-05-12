<template xmlns="http://www.w3.org/1999/html">
  <el-container class="layout-container-demo" style="height: 750px; border: 1px solid #eee">

    <el-aside width="200px" style="border: 1px #eee">
      <el-scrollbar>
        <el-menu :default-openeds="['1', '3']">
          <el-menu-item index="2-1">
            <el-icon><icon-menu /></el-icon>
            新闻展示
          </el-menu-item>
          <el-sub-menu index="1">
            <template #title>
              <el-icon><message /></el-icon>管理员
            </template>
              <el-menu-item index="1-1">用户管理</el-menu-item>
              <el-menu-item index="1-2">评论管理</el-menu-item>
              <el-menu-item index="1-3">新闻管理</el-menu-item>
            </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </el-aside>

    <el-container>
      <el-header style="background-color: rgb(238, 241, 246)">
        <el-row>
          <el-col :span="12">
            <div class="logo">
            <img
                style="width: 40px; height: 40px"
                src="../../../assets/imgs/logo.svg"
                alt="logo">
            <span style="font-size: 40px; margin-left: 10px">新闻发布系统</span>
          </div>
          </el-col>
          <el-col :span="12">
            <div class="toolbar" style="text-align: right; font-size: 30px">
              <el-dropdown>
                <el-icon style="margin-right: 8px; margin-top: 5px" size="large"
                ><setting
                /></el-icon>
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

      <el-main>
        <el-scrollbar>
          <el-table :data="tableData">
            <el-table-column prop="datetime" label="Date" width="140" />
            <el-table-column prop="name" label="Name" width="120" />
            <el-table-column prop="url" label="URL" />
            <el-table-column label="操作">
              <el-button type="primary" size="small">编辑</el-button>
              <el-button type="danger" size="small">删除</el-button>
            </el-table-column>
          </el-table>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'
import axios from "axios"
//todo 列表渲染
//响应式列表数据
const tableData = ref([])
// 发送GET请求
axios.get('/api/news')
    .then(response => {
        //后端返回的数据为response.data,这里的response是axios封装过的对象
        //我们所需要的数据是response.data.data,所以这里的response.data.data是后端返回的数据
        console.log(response.data);
        tableData.value = response.data.data
    })
    .catch(error => {
        console.error(error);
    });
const logout = () => {
  console.log('logout')
}
</script>

<style scoped>

</style>
