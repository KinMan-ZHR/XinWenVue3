import {createApp} from 'vue'
//建立根组件
import App from './News.vue'
//建立路由
import router  from './router'
import {createPinia} from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
// 注册持久化插件
const pinia =   createPinia().use(piniaPluginPersistedstate)
createApp(App).use(router).use(pinia).mount('#app')