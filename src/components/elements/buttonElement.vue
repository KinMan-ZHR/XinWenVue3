<template>
  <!--  button按钮-->
  <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </el-row>
  <!--表格按钮-->
  <el-table
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName"
  >
    <el-table-column prop="date" label="Date" width="180"/>
    <el-table-column prop="name" label="Name" width="180"/>
    <el-table-column prop="address" label="Address"/>
  </el-table>

  <el-pagination background layout="  sizes, prev, pager, next, jumper,total" :total="100" @size-change="handleSizeChange"
                 @current-change="handleCurrentChange"/>
</template>

<!--控制表格行为的的脚本,使用setup可以使得其在页面加载前就得以运行-->
<script lang="ts" setup>
import axios from "axios";
import {onMounted} from "vue";
interface User {
  date: string
  name: string
  address: string
}

const tableRowClassName = ({
                             row,
                             rowIndex,
                           }: {
  row: User
  rowIndex: number
}) => {
  if (rowIndex === 1) {
    return 'warning-row'
  } else if (rowIndex === 3) {
    return 'success-row'
  }
  return ''
}

const tableData: User[] = [
  {
    date: '2016-05-03',
    username: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    username: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    username: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    username: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
const handleSizeChange = (val: number) => {
  alert(`每页 ${val} 条`)
}
const handleCurrentChange = (val: number) => {
  alert(`current page: ${val}`)
}
// 页面加载前就运行,获取用户信息
onMounted(() => {
  axios.get('http://localhost:8080/api/user').then((res) => {
    console.log(res.data)
  })
})
</script>
<style scoped>
.el-table .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning-light-8);
}

.el-table .success-row {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}
</style>