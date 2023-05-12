<!--404页面以404图片应作为背景图，且应自适应网页大小
并在页面右上角给出返回按钮-->
  <template>

    <div class="not-found">
<!--      按钮应在右上角-->
      <div class="back">
        <router-link to="/">
          <el-button type="primary" icon="el-icon-back" circle></el-button>
        </router-link>
        点击返回主页
      </div>
    </div>
  </template>
<style>
  .not-found {
    background-image: url(../assets/imgs/404.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 100vh;
  }
  /*.back {*/
  /*  position: absolute;*/
  /*  top: 0;*/
  /*  right: 0;*/
  /*  margin: 20px;*/
  /*}*/
  </style>
