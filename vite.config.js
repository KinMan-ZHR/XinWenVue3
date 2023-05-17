import { fileURLToPath, URL } from 'node:url'
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'
//多页面配置
export default defineConfig({
  // ...
  plugins: [
    // 这是vue3的插件
    vue(),
    // 这是自动导入element-plus的插件(按需导入)
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      //配置element-plus的插件采用sass的方式配色系统
      resolvers: [ElementPlusResolver({importStyle: 'sass'})],
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '' +
            '@use "src/pages/shopping/styles/element/index.scss" as *;\n' +
            '@use "src/pages/shopping/styles/var.scss" as *;'
      },
    },
  },
  build: {
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, 'index.html'),
        news: path.resolve(__dirname, 'news.html'),
        shopping: path.resolve(__dirname, 'shopping.html'),
      }, output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: "static/js/[name]-[hash].js",
        assetFileNames: "static/[ext]/name-[hash].[ext]"
      }
    },
  },
  //前后端分离，跨域配置,后端服务器地址为http://localhost:8080
  //想要访问http://localhost:8080/news来获取新闻数据，那么就需要配置路由重写
    // 重写规则如下：
    // 1. 以/api开头的请求，都会被代理到target配置
    // 2. 重写后的地址为：target(去掉/api) + /api(去掉/api)
    // 3. 例如：/api/news 重写后就是 http://localhost:8080 + /news
    // 4. 最终得到 http://localhost:8080/news
    // 5. 重写后的地址就会被代理到target配置
    server: {
        proxy: {
            '/local': {
                target: 'http://localhost:8080',
                rewrite: (path) => path.replace(/^\/local/, '')
            }
        }
    },


  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

