<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>
<!--模版部分,用于定义视图部分-->
<template>
    <header>
      <img alt="Vue logo" class="logo" src="../../assets/imgs/logo.svg" width="125" height="125" />

      <div class="wrapper">
        <HelloWorld msg="Wow,you find me!" />
      </div>
    </header>

    <main>
      <TheWelcome />
    </main>

</template>
<!--样式部分-->
<!--仅在当前页面下引入main.css文件-->
<style src="./assets/main.css" >
</style>
<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
