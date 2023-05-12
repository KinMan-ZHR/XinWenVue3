<script setup>
//defineProps用于定义组件的属性,这里定义了一个msg属性,类型为String,必须传入,传入的值为Welcome to Your Vue.js + Vite App
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>
<!--html的元素部分-->
<template>
  <div class="greetings">
    <h1 class="yellow">{{ msg }}</h1>
    <h3>
      You’ve successfully met the best free and open source
      <a href="https://blog.csdn.net/zhr2376494700" target="_blank" rel="noopener">CSDN blog</a> +
      <a href="https://kinman-zhr.github.io" target="_blank" rel="noopener">web sites</a>.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
