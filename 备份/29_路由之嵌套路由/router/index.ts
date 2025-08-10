//创建一个路由器，并暴露出去


//第一步：引入createRouter
import { createRouter ,createWebHistory,createWebHashHistory} from "vue-router";
//引入一个一个可能要呈现的组件
import About from "@/pages/About.vue";
import Home from "@/pages/Home.vue";
import News from "@/pages/News.vue";   
import Detail from "@/pages/Detail.vue";
//第二步 ：创建路由器   history 模式，访问地址不带#  但是上线的时候，需要后端进行地址路径的配置，如果使用hash模式访问路径含有#号，上线不需要进行配置，但是seo的优化方面相对较差
const router=createRouter({
    history:createWebHistory(), //路由器的工作模式（下一级讲解）（如果用了createWebHashHistory 则页面无法展示）
 routes:[{
    name:"zhuye",
    path:'/home',
    component:Home
 },
 {
    name:"xinwen",
    path:'/news',
    component:News,
    children:[
      {
         path:'detail',
         component:Detail
      }
    ]
 },
 {
    name:'guanyu',
    path:'/about',
    component:About
 }
]
})

//暴露出去router
export default router