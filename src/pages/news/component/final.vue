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
          <img :src="card.img" width="290" height="200" :alt="card.img" :class="'card' + (index + 1)" />
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
            <div style="font-size: 20px; font-weight: bold; text-align: center">国际新闻</div>
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
import { reactive } from 'vue';
// const data = reactive({
//   bannerList: [],
//   newsList: [],
//   cardList: [],
//   internationalNewsList: [],
//   domesticNewsList: [],
//   currentIndex: 0,
//   timer: null,
//   clueImg: require('../assets/image/980.jfif'),
//   cardImg: require('../assets/image/菜单.png'),
//   brownImg: require('../assets/image/brown.jfif'),
//   yellowImg: require('../assets/image/yellow.png'),
//   whiteImg: require('../assets/image/white.png'),
//});
// const methods = {
//   async getBannerList() {
//     const res = await getBannerList();
//     data.bannerList = res.data;
//   },
//   async getNewsList() {
//     const res = await getNewsList();
//     data.newsList = res.data;
//   },
//   async getCardList() {
//     const res = await getCardList();
//     data.cardList = res.data;
//   },
//   async getCardStyleList() {
//     const res = await getCardStyleList();
//     data.cardStyleList = res.data;
//   },
//   async getInternationalNewsList() {
//     const res = await getInternationalNewsList();
//     data.internationalNewsList = res.data;
//   },
//   async getDomesticNewsList() {
//     const res = await getDomesticNewsList();
//     data.domesticNewsList = res.data;
//   },
// };
  const data =reactive({
      currentIndex: 0,
      timer: null,
      cardBackground: "src/pages/news/assets/image/卡片白.png",
      newsList: [
        {
          title: "六一临近儿童产品走俏",
          url:
              "https://jingji.cctv.com/2023/05/28/ARTItuOCGnczaceJtB4tCdzD230528.shtml?spm=C87458.PkhSNZp4Nx48.EwOcaQtoQb8b.3",
        },
        {
          title: "多地加大产业招商引资",
          url:
              "https://news.cctv.com/2023/05/29/ARTIittBsevNyjERgXdAIP4H230529.shtml?spm=C94212.PBZrLs0D62ld.Ewq6JXbGyuuh.4",
        },
        {
          title: "神舟十六号载人飞船发射窗口确定",
          url: "https://news.cctv.com/2023/05/29/ARTIzgwf6T7vFcN8n8F8fsQH230529.shtml?spm=C94212.PBZrLs0D62ld.EKoevbmLqVHC.101",
        },
        {
          title: "土耳其初步结果显示埃尔多安赢得总统选举",
          url: "https://news.cctv.com/2023/05/29/ARTIOexzEZkbZToD9ppwQiMs230529.shtml?spm=C94212.PBi4fu284lJm.EloxPVaffFMg.3",
        },
        {
          title: "我国载人登月火箭主力发动机再创新纪录",
          url: "https://news.cctv.com/2023/06/03/ARTI59f1VwkNGM7Pfo2S84dw230603.shtml?spm=C94212.PBZrLs0D62ld.Ewq6JXbGyuuh.4",
        },
        {
          title: "世界自然遗产可可西里卓乃湖告别“通信盲区”",
          url: "https://news.cctv.com/2023/06/03/ARTI4YECi0Wt6NU8LvhgffGZ230603.shtml?spm=C94212.P4YnMod9m2uD.E7v7lEZZ0WEM.18",
        },
        {
          title: "印度列车脱轨相撞事故死亡人数升至233人",
          url: "https://news.cctv.com/2023/06/03/ARTInTLPqtB693ySi5veSb6I230603.shtml?spm=C94212.PBi4fu284lJm.EqrnPf7WDfbU.15",
        },
        {
          title: "成都大运会会徽、吉祥物、火炬、奖牌集中亮相",
          url: "https://news.cctv.com/2023/06/03/ARTI8LMnNPmSohwCrG2tCvRj230603.shtml?spm=C94212.PBZrLs0D62ld.EKoevbmLqVHC.123",
        },
      ],
      bannerList: [
        { img: "src/pages/news/assets/image/1.jpg" },
        { img: "src/pages/news/assets/image/2.jpg" },
        { img: "src/pages/news/assets/image/3.jpg" },
        { img: "src/pages/news/assets/image/4.jpg" },
      ],
      cardList: [
        {
          url: "https://photo.cctv.com/2023/06/03/PHOA3nKor55kHfbz0sJR4dgp230603.shtml?spm=C94212.P4YnMod9m2uD.ENPMkWvfnaiV.34#jBjKXH2tIbBz230603_1",
          img: "src/pages/news/assets/image/2023060315575384200.jpg",
          title: "青岛：胶州湾畔晨景如画",
        },
        {
          url: "https://pic.people.com.cn/n1/2023/0602/c426981-40005274.html",
          img: "src/pages/news/assets/image/MAIN1685761652458XCNERJ8IGH.jpg",
          title: "习近平出席文化传承发展座谈会",
        },
        {
          url:
              "https://news.cctv.com/2023/06/03/ARTI3xR90eYBgzQydGxqSP7O230603.shtml?spm=C94212.PBi4fu284lJm.EqrnPf7WDfbU.165",
          img: "src/pages/news/assets/image/2023060301065085143.jpg",
          title: "美国总统拜登发声明呼吁控枪",
        },
        {
          url: "https://news.sina.com.cn/c/2023-06-02/doc-imyvxhuy8276608.shtml",
          img: "src/pages/news/assets/image/6a4d8c855d7b47118307778c32657545~tplv-tt-poster-sc-center_1125_780.png",
          title: "中美防长“香会”晚宴上握手",
        },
      ],
      internationalNewsList: [
        {
          title: "美国总统拜登签署债务上限法案",
          url: "https://news.cctv.com/2023/06/04/ARTIFz21FvqbfastcJSWtoGp230604.shtml?spm=C94212.PBi4fu284lJm.EloxPVaffFMg.4",
        },
        {
          title: "独家现场：美否认拿乌克兰当试验场却被事实打脸",
          url: "https://news.cctv.com/2023/06/03/ARTIGWTV1Qb8sljC18NNsHOX230603.shtml?spm=C94212.PBi4fu284lJm.EqrnPf7WDfbU.158",
        },
        {
          title: "中国与阿根廷签署共建“一带一路”合作规划",
          url: "https://www.news.cn/world/2023-06/03/c_1129667874.htm",
        },
        {
          title: "法国议会通过“网红”行业监管法案",
          url: "https://www.news.cn/world/2023-06/04/c_1129668378.htm",
        },
        {
          title: "厄瓜多尔总统宣布不参加今年8月总统选举",
          url: "https://www.news.cn/world/2023-06/03/c_1129666910.htm",
        },
        {
          title: "日本总和生育率创新低，政府“每月补贴1万日元”能否催生？",
          url: "https://news.cctv.com/2023/06/04/ARTI4lKOnLPbaAZZDUFGoJSS230604.shtml?spm=C94212.PBi4fu284lJm.EqrnPf7WDfbU.4",
        },
        {
          title: "塞尔维亚总统与科索沃当局领导人短暂会面",
          url: "https://www.news.cn/world/2023-06/02/c_1212195030.htm",
        },
        {
          title: "香格里拉对话会开幕在即 中国全球安全倡议成热词",
          url: "https://www.news.cn/world/2023-06/01/c_1129663617.htm",
        },
        {
          title: "韩国最大在野党集会反对日本核污染水排海计划",
          url: "https://www.news.cn/world/2023-06/03/c_1129667863.htm",
        },
      ],
      domesticNewsList: [
        {
          title: "神舟十五号载人飞船返回舱成功着陆",
          url: "https://www.news.cn/politics/2023-06/04/c_1129667984.htm",
        },
        {
          title: "中国女排战胜荷兰队 世界女排联赛获三连胜",
          url: "https://www.news.cn/sports/2023-06/03/c_1129667783.htm",
        },
        {
          title: "国道109新线高速公路首个长大隧道全幅贯通",
          url: "https://www.news.cn/fortune/2023-06/03/c_1129667671.htm",
        },
        {
          title: "丁薛祥:确保高考安全平稳顺利",
          url: "https://politics.people.com.cn/n1/2023/0604/c1024-40005616.html",
        },
        {
          title: "安徽扎实推进宜居宜业和美乡村建设",
          url: "https://finance.people.com.cn/n1/2023/0604/c1004-40005626.html",
        },
        {
          title: "玉树少年沉浸式感受民族文化艺术：拉近“心”距离",
          url: "https://society.people.com.cn/n1/2023/0604/c1008-40005725.html",
        },
        {
          title: "教育部发布2023年高考预警信息",
          url: "https://edu.people.com.cn/n1/2023/0604/c1053-40005776.html",
        },
        {
          title: "呼伦贝尔1.5亿亩天然牧草陆续返青",
          url: "https://society.people.com.cn/n1/2023/0604/c1008-40005709.html",
        },
      ]
    })

</script>


<style scoped lang="scss">
.el-main {
  padding: 0 !important;
  border: none !important;
  background-image: url('../assets/image/grey.png');
  background-size: 100% 100%;
}
.el-card{
  background-image: url('../assets/image/卡片白.jpg');
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