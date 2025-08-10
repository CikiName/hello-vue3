//创建一个路由器，并暴露出去


//第一步：引入createRouter
import { createRouter ,createWebHistory} from "vue-router";
//引入一个一个可能要呈现的组件
import About from "@/components/About.vue";
import Home from "@/components/Home.vue";
import News from "@/components/News.vue";   
//第二步 ：创建路由器
const router=createRouter({
    history:createWebHistory(), //路由器的工作模式（下一级讲解）（如果用了createWebHashHistory 则页面无法展示）
 routes:[{
    path:'/home',
    component:Home
 },
 {
    path:'/news',
    component:News
 },
 {
    path:'/about',
    component:About
 }
]
})

//暴露出去router
export default router