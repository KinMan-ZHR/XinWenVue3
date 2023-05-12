import {createApp} from 'vue'
//建立根组件
import App from './News.vue'
//建立路由
import router  from './router'
createApp(App).use(router).mount('#app')