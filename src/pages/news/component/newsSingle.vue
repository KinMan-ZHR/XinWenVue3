<script setup lang="ts">

</script>

<template>
  <el-main>
    <!-- 头部 -->
    <header class="header">
      <div class="container">
        <!-- 导航栏 -->
        <nav class="nav">
          <a href="/">首页</a>
          <a href="/category/1">国内</a>
          <a href="/category/2">国际</a>
          <!-- 添加更多导航链接 -->
        </nav>
        <!-- 登录状态栏 -->
        <div class="user">
          <a href="#">用户名</a>
          <a href="#">退出登录</a>
        </div>
      </div>
    </header>
    <!-- 主体内容 -->
    <main class="main">
      <div class="container">
        <!-- 新闻标题 -->
        <h1 class="title">新闻标题</h1>
        <!-- 新闻信息 -->
        <div class="info">
          <span class="time">发布时间：2022-05-23 10:00</span>
          <span class="author">作者：xxx</span>
          <span class="category">分类：<a href="/category/1">国内</a></span>
        </div>
        <!-- 新闻正文 -->
        <div class="content">
          <p>正文内容</p>
          <img src="http://example.com/image.jpg" alt="新闻配图">
          <p>更多内容</p>
        </div>
        <!-- 评论区域 -->
        <div class="comment">
          <h2 class="comment-title">评论区</h2>
          <ul class="comment-list">
            <li class="comment-item">
              <div class="comment-header">
                <span class="comment-user">评论用户</span>
                <span class="comment-time">评论时间</span>
              </div>
              <div class="comment-body">
                <p class="comment-content">评论内容1</p>
              </div>
            </li>
            <li class="comment-item">
              <div class="comment-header">
                <span class="comment-user">评论用户</span>
                <span class="comment-time">评论时间</span>
              </div>
              <div class="comment-body">
                <p class="comment-content">评论内容2</p>
              </div>
            </li>
            <!-- 添加更多评论 -->
          </ul>
          <!-- 发布评论表单 -->
          <form class="comment-form" action="/comment/add" method="post">
            <label>发表评论：</label>
            <textarea name="content" rows="5"></textarea>
            <br>
            <button type="submit">提交</button>
          </form>
        </div>
      </div>
    </main>
    <!-- 底部 -->
    <footer class="footer">
      <div class="container">
        <p>版权信息</p>
      </div>
    </footer>

  </el-main>
</template>

<style scoped lang="scss">
/* 全局样式 */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

el-main {
  font-family: "微软雅黑", "Microsoft YaHei", sans-serif;
  font-size: 16px;
  line-height: 1.5;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* 页面头部样式 */
.header {
  background-color: #333;
  color: #fff;
  padding: 10px 0;
}

/* 容器样式 */
.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;
}

/* 导航栏样式 */
.nav {
  display: flex;
}
.nav a {
  color: #fff;
  padding: 10px 20px;
  text-decoration: none;
  border-right: 1px solid #666;
}
.nav a:last-child {
  border: none;
}

/* 用户登录状态栏样式 */
.user {
  text-align: right;
  margin-top: 10px;
}
.user a {
  color: #fff;
  margin-left: 20px;
}

/* 内容区域样式 */
.main {
  padding: 20px 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.title {
  font-size: 32px;
  margin-bottom: 10px;
  text-align: center;
}

.info {
  margin-bottom: 20px;
}
.info span {
  margin-right: 20px;
  color: #999;
}

.content {
  margin-bottom: 20px;
  text-align: center;
}
.content img {
  max-width: 100%;
  height: auto;
  display: block;
  margin-bottom: 10px;
}

.comment {
  margin-bottom: 20px;
}

.comment-title {
  font-size: 24px;
  margin-bottom: 10px;
}

.comment-list {
  list-style: none;
  padding-left: 0;
}

.comment-item {
  margin-top: 20px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  padding: 10px;
}

.comment-header {
  font-size: 14px;
  color: #666;
}

.comment-header span {
  margin-right: 10px;
}

.comment-content {
  font-size: 16px;
  margin-top: 10px;
}

.comment-form {
  margin-top: 20px;
}

.comment-form label {
  font-size: 16px;
  font-weight: bold;
  display: block;
  margin-bottom: 10px;
}

.comment-form textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
}

.comment-form button {
  margin-top: 10px;
  padding: 10px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.comment-form button:hover {
  background-color: #666;
}
</style>