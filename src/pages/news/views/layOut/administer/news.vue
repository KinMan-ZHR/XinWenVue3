<script lang="ts" setup>
import NewsForm from "@/pages/news/component/newsForm.vue";
import {Plus, Search} from '@element-plus/icons-vue'
import {deleteNewsAPI, getNewsByConditionAPI} from '@/pages/news/apis/NewsListHandler.js'
import {onMounted, ref} from "vue";

console.log('亲爱的主人，欢迎来到新闻管理界面')
//获得子组件
const formInstance=ref()
//新闻数据列表
const newsList = ref([])
//分页数据
const pageInfo = ref({
  //应当根据查询回来的数据的总数来设置total
  total: 50,
  small :ref(false),
  background : ref(false),
  disabled : ref(false)

})
//     todo 弹窗表单
const setTitle = (title) => {
  formInstance.value.setTitle(title)
}
//     todo 弹窗表单,数据回显
const dataEcho = async (data) => {
  console.log(data)
  formInstance.value.dataEcho(data)
}
//     todo 数据处理将后端返回的时间格式改为年月日
const dataProcess = async (res) => {
  if(res!= null){
    res.forEach(element=>{
      //将时间格式改为年月日
      let updateTime = element.updateTime;
      updateTime = new Date(updateTime);
      const year = updateTime.getFullYear() + '年';
      const month = updateTime.getMonth() + 1 + '月';
      const date = updateTime.getDate() + '日';
      // console.log([year,month,date].join(''));
      element.updateTime=[year,month,date].join('')
    })
  }
}
//     todo 生命周期
//mounted:在页面挂载后立即执行,只执行一次
onMounted(() => {
  //getNewsList()
  filteredList()
})
//     todo 分页
const handleSizeChange = (val: number) => {
  console.log(`每页 ${val} 条`)
      query.pageSize= val
  filteredList()
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
 query.page = val
  filteredList()
}
//     todo 删除
const deleted = async (id) => {
  const res = await deleteNewsAPI(id)
  console.log(res)
  await filteredList()
}
//todo 搜索
const input1=ref()
const filter=ref()

//将查询条件封装为query对象,传入getNewsListAPI()中
const query = {
  url:  '',
  title:  '',
  time:  '',
  pageSize: 10,
  page: 1,
}
const filteredList=async ()=>{
  //todo 1:根据url搜索 2:根据title搜索 3:根据时间搜索
  //直接向后端发送请求,调用getNewsListAPI(),传入参数,
  query.url = filter.value === '1' ? input1.value : ''
  query.title = filter.value === '2' ? input1.value : ''
  query.time = filter.value === '3' ? input1.value : ''
  const res = await getNewsByConditionAPI(query)
  console.log(res.data)
  await dataProcess(res.data.rows)
  newsList.value = res.data.rows
  pageInfo.value.total = res.data.total
  //返回时报错,因为返回的是一个promise对象,而不是一个数组，所以需要在调用的地方加上.then(res=>{newsList.value=res.data.data})
  // return newsList.value

}

</script>
<template>
  <el-main>
    <el-row>
      <el-col :span="2">
        <el-icon style="margin-right: 8px; margin-top: 1px" size="large" @click="setTitle('新增新闻')" ><Plus/>
        </el-icon>
      </el-col>
      <el-col :span="8"> <el-input
          v-model="input1"
          placeholder="Please input"
          class="input-with-select"
      >
        <template #prepend>
          <el-select v-model="filter" placeholder="select" style="width: 80px">
            <el-option label="url" value="1" />
            <el-option label="title" value="2" />
            <el-option label="time" value="3" />
          </el-select >
        </template>
          <template #append>
            <el-button @click="filteredList">
              <el-icon><Search/></el-icon>
            </el-button>
          </template>

      </el-input></el-col>
      <el-col :span="8"><div class="grid-content ep-bg-purple" /></el-col>
    </el-row>

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
      <el-pagination
          v-model:current-page="query.page"
          v-model:page-size="query.pageSize"
          :page-sizes="[5, 10, 15]"
          :small="pageInfo.small"
          :disabled="pageInfo.disabled"
          :background="pageInfo.background"
          layout="total, sizes, prev, pager, next, jumper"
          :total="pageInfo.total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
      />
    </el-scrollbar>
  </el-main>

  <news-form ref="formInstance" @getNewsList="filteredList"/>

</template>


<style scoped>

</style>
