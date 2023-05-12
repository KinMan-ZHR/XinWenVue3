
import { createApp } from 'vue'
//将App.vue引入进来，命名为App
import App from './Index.vue'
//引入路由
import router from "./router";
//将app.vue挂载到index.html的id为app的div上
createApp(App).use(router).mount('#app')
//
