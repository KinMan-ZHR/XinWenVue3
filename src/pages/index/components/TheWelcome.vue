<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
<!-- 用template去填对应的表单-->
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>News</template>
<!-- 点击click here 跳转到news.html-->
<!--    使用相对路径的方式-->
    <p>Click <a href="../../../../news.html">here</a> to go to the home page.</p>
    provides you with all information you need to get.
<!--    多页面vue应用中使用相对路径跳转十分的麻烦，更好跳转到news.html的方式如下-->
<!--    <p>Click <router-link to="/news">here</router-link> to go to the home page.</p>-->
  </WelcomeItem>
<!-- 工具-->
  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>shopping</template>
    this project is a shopping website. Click <a href="../../../../shopping.html">here</a> to go to the shopping page.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Ecosystem</template>

    Get official tools and libraries for your project:
    <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>,
    <a href="https://router.vuejs.org/" target="_blank" rel="noopener">Vue Router</a>,
    <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener">Vue Test Utils</a>, and
    <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener">Vue Dev Tools</a>. If
    you need more resources, we suggest paying
    <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">Awesome Vue</a>
    a visit.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Community</template>

    Got stuck? Ask your question on
    <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Vue Land</a>, our official
    Discord server, or
    <a href="https://stackoverflow.com/questions/tagged/vue.js" target="_blank" rel="noopener"
      >StackOverflow</a
    >. You should also subscribe to
    <a href="https://news.vuejs.org" target="_blank" rel="noopener">our mailing list</a> and follow
    the official
    <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">@vuejs</a>
    twitter account for latest news in the Vue world.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support me</template>

    As an independent project, I am learning many skills, sometimes feel a sense of incapability. You can help
    me by
    <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener">giving me some supports</a>.
  </WelcomeItem>
</template>
