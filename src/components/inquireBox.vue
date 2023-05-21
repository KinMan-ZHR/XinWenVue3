<script setup lang="ts">
//用于接收父组件传递的参数，props是一个对象，里面包含了父组件传递的参数，required表示必传参数,默认值为false
//父组件定义了inquireBox呈现的查询条件，通过props接收
const props = defineProps({
  inquireBoxInfo: {
    type: Object,
    required: true, // 必须传参
  },
});
const emits = defineEmits(["returnInfo"]);
const onSubmit = (data:string) => {
  //定义一个对象，用于存储查询条件
  let info = {};
  //如果data为reset，则重置查询条件
  if(data === 'reset'){
    props.inquireBoxInfo.forEach( (item:any) => item.value = '')
    return;
  }

  //遍历查询条件，将查询条件存储到info对象中，reduce方法用于遍历数组，将数组转换为对象,any表示任意类型
  //list表示返回的对象，item表示遍历的数组元素
  info = props.inquireBoxInfo.reduce((list: any, item: any) => {
    //如果查询条件有值，则将查询条件存储到info对象中
    if (item.value) {
      list[item.key] = item.value;
    }
    return list;
  },
  //初始值为空对象,reduce方法的第二个参数表示初始值
      {});
  //将查询条件传递给父组件
  emits("returnInfo", info);
};


</script>

<template>
  <el-card class="box-card">
<!--    渲染父组件传递的查询信息-->
    <el-form :inline="true" :model="props.inquireBoxInfo" class="demo-form-inline">
      <el-form-item
          :label="item.label"
          v-for="item in props.inquireBoxInfo"
          :key="item.name"
      >
        <el-input
            v-if="item.type === 'input'"
            v-model="item.value"
            :placeholder="item.label"
        />
<!--        选择器存在条件为inquireBoxInfo有相关select组件-->
        <el-select
            v-else-if="item.type == 'select'"
            v-model="item.value"
            placeholder="Select"
        >
          <el-option
              v-for="data in item.options"
              :key="data.value"
              :label="data.label"
              :value="data.value"
          />
        </el-select>
        <el-date-picker
            v-else-if="item.type == 'date'"
            v-model="item.value"
            type="datetime"
            placeholder="Select date and time"
            format="YYYY-MM-DD hh:mm:ss"
            value-format="YYYY-MM-DD hh:mm:ss"
        />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button type="primary" @click="onSubmit('reset')">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>


</template>

<style scoped lang="scss">

</style>
<!--使用方法，在父组件中-->
<!--<template>-->
<!--  &lt;!&ndash;  父组件向子组件传入自己数据中的查询条件，交给box更新,box更新后返回数据&ndash;&gt;-->
<!--  <inquire-box :inquire-box-info=data.inquireBoxInfo @returnInfo="getData"></inquire-box>-->
<!--</template>-->
<!--<script lang="ts" setup>-->
<!--//创建使用数据 label：条件查询名称 ，key：值，名称 ，value：值，数据，其他可以自行添加或者修改-->
<!--import {defineComponent, reactive} from "vue";-->
<!--import InquireBox from "@/components/inquireBox.vue";-->

<!--const getData = (data: any) => {-->
<!--  //获取查询条件-->
<!--  data.inqureInfo = data;-->
<!--  console.log(data.inqureInfo);-->
<!--}-->
<!--//定义查询条件的数据结构-->
<!--interface InquireBoxInfo {-->
<!--  label: string;-->
<!--  key: string;-->
<!--  value: string;-->
<!--  options: any[];-->
<!--  type: string;-->

<!--}-->
<!--const data = reactive({-->
<!--  inquireBoxInfo: [] as InquireBoxInfo[],-->
<!--  inquireInfo:{}-->
<!--})-->
<!--data.inquireBoxInfo = [-->
<!--  {-->
<!--    label: "查询用户姓名",-->
<!--    value: "",-->
<!--    key:"username",-->
<!--    options:[],-->
<!--    type:'input'-->

<!--  },-->
<!--  {-->
<!--    label: "查询用户手机号",-->
<!--    value: "",-->
<!--    key:"userIPhone",-->
<!--    options:[],-->
<!--    type:'input'-->
<!--  },-->
<!--  {-->
<!--    label: "分类",-->
<!--    value: "",-->
<!--    key:"userType",-->
<!--    options:[{-->
<!--      value:1,-->
<!--      label:'吃吃'-->
<!--    },{-->
<!--      value:2,-->
<!--      label:'喝喝'-->
<!--    },{-->
<!--      value:3,-->
<!--      label:'玩玩'-->
<!--    }],-->
<!--    type:'select'-->
<!--  },-->
<!--  {-->
<!--    label: "查询时间",-->
<!--    value: "",-->
<!--    key:"userDate",-->
<!--    options:[],-->
<!--    type:'date'-->
<!--  },-->
<!--];-->

<!--</script>-->