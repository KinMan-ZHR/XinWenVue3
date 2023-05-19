<template>
<!--  父组件向子组件传入自己数据中的查询条件，交给box更新,box更新后返回数据-->
<inquire-box :inquire-box-info=data.inquireBoxInfo @returnInfo="getData"></inquire-box>
</template>
<script lang="ts" setup>
//创建使用数据 label：条件查询名称 ，key：值，名称 ，value：值，数据，其他可以自行添加或者修改
import {defineComponent, reactive} from "vue";
import InquireBox from "@/components/inquireBox.vue";

const getData = (data: any) => {
  //获取查询条件
data.inqureInfo = data;
console.log(data.inqureInfo);
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
  inquireInfo:{}
})
data.inquireBoxInfo = [
{
label: "查询用户姓名",
value: "",
key:"username",
options:[],
type:'input'

},
{
label: "查询用户手机号",
value: "",
key:"userIPhone",
options:[],
type:'input'
},
{
label: "分类",
value: "",
key:"userType",
options:[{
value:1,
label:'吃吃'
},{
value:2,
label:'喝喝'
},{
value:3,
label:'玩玩'
}],
type:'select'
},
{
label: "查询时间",
value: "",
key:"userDate",
options:[],
type:'date'
},
];

</script>