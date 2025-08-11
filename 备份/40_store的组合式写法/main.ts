//引入createAoo用于创建应用
import { createApp } from  'vue'
//引入App组件
import App from './App.vue'
//引入路由器
// import router from './router'

//引入pinia 
import { createPinia } from 'pinia'

//创建一个应用
const app=createApp(App)

//创建一个pinia
const pinia =createPinia()
//使用路由器
// app.use(router)
//挂载整个应用，到app容器中
app.use(pinia)
app.mount('#app')