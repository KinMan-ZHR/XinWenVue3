<template>
  <!--第一行-->
  <el-main style="margin-top:0; ">
    <el-row :gutter="20" style="margin-top: 0" align="top">
      <!--轮播图-->
      <el-col :span="16">
        <el-carousel :interval="4000"  height="450px">
          <el-carousel-item v-for="item in data.bannerList" :key="item">
            <el-image :src="item.img" fit="fill" style="width: 100%;height:100%" />
          </el-carousel-item>
        </el-carousel>
      </el-col>
      <!--热点新闻列表-->
      <el-col :span="8">
        <table style="height: 450px;" >
          <tr>
            <th>最近热点新闻</th>
          </tr>
          <tr v-for="(news, index) in data.newsList" :key="index">
            <td>
              <a :href="news.url">·  {{ news.title }}</a>
            </td>
          </tr>
        </table>
      </el-col>
    </el-row>
    <!--    第二行，卡片之家，四个卡片横向排列，居中，占据一行高度为360-->
    <el-row style="margin-top: 30px">
      <el-col :span="24" >
        <div style="display: flex; flex-wrap: wrap;">
          <a v-for="(card, index) in data.cardList" :key="index" :href="card.url" style="flex: 1;">
            <img :src="card.image" width="290" height="200" :alt="card.image" :class="'card' + (index + 1)" />
            <div :class="'word' + (index + 1)">
              {{ card.title }}
            </div>
          </a>
        </div>
      </el-col>
    </el-row>
    <!--国内与国外新闻交错-->
    <el-row :gutter="20">
      <el-col :span="24">
        <div style="display: flex; flex-wrap: wrap;">
          <el-card  shadow="hover" style="width: 400px; height: 400px; margin-top: 30px;margin-left: 200px;">
            <template #header>
              <div style="font-size: 20px; font-weight: bold; text-align: center">国际新闻</div>
            </template>
            <div v-for="(news, index) in data.internationalNewsList" :key="index" style="margin-bottom: 5px;text-align: center">
              <a :href="news.url">{{ news.title }}</a>
            </div>
          </el-card>
          <el-card  shadow="hover" style="width: 400px; height: 400px; position: relative; margin-top: 80px; margin-left: -20px;">
            <template #header>
              <div style="font-size: 20px; font-weight: bold; text-align: center">国内新闻</div>
            </template>
            <div v-for="(news, index) in data.domesticNewsList" :key="index" style="margin-bottom: 5px;text-align: center">
              <a :href="news.url">{{ news.title }}</a>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </el-main>
</template>

<script setup>
//将下列写法改为vue3组合式写法
import {onMounted, reactive} from 'vue';
import {getNewsByConditionAPI} from '@/pages/news/apis/NewsListHandler.js'
import {now} from "@vueuse/core";
const data = reactive({
  bannerList: [
    { img: "src/pages/news/assets/image/1.jpg" },
    { img: "src/pages/news/assets/image/2.jpg" },
    { img: "src/pages/news/assets/image/3.jpg" },
    { img: "src/pages/news/assets/image/4.jpg" },
  ],
  newsList: [],
  cardList: [],
  internationalNewsList: [],
  domesticNewsList: [],
  currentIndex: 0,
  timer: null,
  //定义数据接口
  query: {
    url: '',
    title: '',
    time: '',
    image: '',
    category: null,
    page: 1,
    pageSize: 10
  }
});

const methods = {
  dataProcess(res){
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
  },
    async filteredList(query) {
      //todo 1:根据url搜索 2:根据title搜索 3:根据时间搜索
      //直接向后端发送请求,调用getNewsListAPI(),传入参数,
      const res = await getNewsByConditionAPI(query)
      console.log(res.data)
      await methods.dataProcess(res.data.rows)
      return res.data.rows
    },
  //获取新闻列表
  async getHitList() {
    //获取当前时间一周前的时间
    data.query.image='';
    data.query.pageSize = 10;
    data.query.page = 1;
    data.query.time = now()-1000*60*60*24*7
    data.query.category= null;
    await methods.filteredList(data.query).then((res) => {
      data.newsList = res;
    });
  },
  //获取卡片列表
 async getCardList() {
    data.query.pageSize = 4;
    data.query.page = 1;
    //image项不为空
    data.query.image='src' ;
    await methods.filteredList(data.query).then((res) => {
      data.cardList = res;
    });
  },
  //获取国际新闻列表
 async getInternationalNewsList() {
    data.query.category = true;
    data.query.image='';
    data.query.pageSize = 10;
    data.query.page = 1;
   await methods.filteredList(data.query).then((res) => {
      data.internationalNewsList = res;
    });
  },
  //获取国内新闻列表
  async getDomesticNewsList() {
    data.query.category = false;
    data.query.image='';
    data.query.pageSize = 10;
    data.query.page = 1;
    await methods.filteredList(data.query).then((res) => {
      data.domesticNewsList = res;
    });
  },
};
onMounted(() => {
  methods.getHitList();
  methods.getCardList();
  methods.getInternationalNewsList();
  methods.getDomesticNewsList();
});



</script>


<style scoped lang="scss">
.el-main {
  padding: 0 !important;
  border: none !important;
  background-image: url('../../../assets/image/grey.png');
  background-size: 100% 100%;
}
.el-card{
  background-image: url('../../../assets/image/卡片白.jpg');
  background-size: 100% 100%;
}
/* 新闻列表 */
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
/* 轮播图 */

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
a,
.green {
  font-size: 16px;
  text-decoration: none;
  color: hsl(162, 59%, 9%);
  transition: 0.4s;
}
@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 99%, 36%, 0.2);
  }
}
</style>