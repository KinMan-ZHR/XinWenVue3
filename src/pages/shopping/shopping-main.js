import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
//建立根组件
import App from './Shopping.vue'
//建立路由
import router  from './router'
// 引入初始化样式文件
import '@/pages/shopping/styles/common.scss'
// 引入懒加载指令插件并且注册
import { lazyPlugin } from '@/pages/shopping/directives'
// 引入全局组件插件
import { componentPlugin } from '@/pages/shopping/components'

const app = createApp(App).use(router).use(lazyPlugin).use(componentPlugin)
// 注册持久化插件
const pinia =   createPinia().use(piniaPluginPersistedstate)
app.use(pinia).mount('#app')
