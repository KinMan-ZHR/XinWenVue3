<template>
  <div class="users">
    <div class="users-inquire" style="display: none">
      <InquireBox :inquireBoxInfo="data.inquireBoxInfo" @getData="getData"></InquireBox>
    </div>
    <div class="users-table">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="username" label="姓名" width="180"/>
        <el-table-column prop="image" label="头像" width="180" />
        <el-table-column prop="identity" label="权限" width="100">
          <template #default="{row}">
            <el-tag v-if="row.identity === true">管理员</el-tag>
            <el-tag v-else>普通用户</el-tag>
          </template>
        </el-table-column>
        <el-table-column width="180" >
          <template #header >
            <el-tooltip class="item" effect="dark" content="操作" placement="top">
              <div style="text-align: center">
                <el-icon size="25" >
                  <Operation/>
                </el-icon>
              </div>
            </el-tooltip>
          </template>
          <template #default="{row}">
            <div style="text-align: center;flex-flow: row">
              <el-icon @click="editUser(row.id)" size="20" color="orange"><Edit /></el-icon>
              <el-icon @click="deleteUser(row.id)" size="20" color="red"><Delete /></el-icon>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {defineComponent, onMounted, reactive, ref} from "vue";
import {Edit,Operation,Delete} from "@element-plus/icons-vue";
import InquireBox from "@/components/inquireBox.vue";
import {deleteUserAPI, getUserListAPI} from "@/pages/news/apis/usersHandler.js";
const getData = (data: any) => {
  //获取查询条件
  data.inqureInfo = data;
  console.log(data.inqureInfo);
};
const tableData=ref([])
onMounted(
  () => {
    getUseData()
  }
)
const getUseData=async ()=>{
  //获取用户数据
  const res=await  getUserListAPI()
  console.log(res);
  tableData.value=res.data.rows
}
//todo:编辑用户信息
const editUser=async (id)=>{
  console.log("编辑用户信息");

}
//todo:删除用户信息
const deleteUser=async (id) => {
  console.log("删除用户信息");
  const res = await deleteUserAPI(id)
  console.log(res);
  if (res.code === 1) {
    await getUseData()
  }
}
//定义查询条件的数据结构
interface InquireBoxInfo {
  label: string;
  key: string;
  value: string;
  options: any[];
  type: string;
}
const data = reactive({
  inquireBoxInfo: [] as InquireBoxInfo[],
  inquireInfo: {},
})

</script>