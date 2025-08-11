<template>
<div class="news">
    <!-- 导航区 -->
 <ul>
    <li v-for="item in newsList" :key="item.id">
      <button @click="showNewsDetail(item)">查看详情</button>
     <!-- 第二种写法: -->
      <RouterLink :to="{
        name:'guang',
        query:{
          id:item.id,
          title:item.title,
          content:item.content
        }
      }">{{ item.title }}</RouterLink>
    </li>
 </ul>
<!-- 展示区 -->
<div class="news-content">
  <RouterView></RouterView>
</div>

</div>



</template>

<script lang="ts" name="News" setup>
import { reactive } from 'vue';
import { RouterView,RouterLink } from 'vue-router';
import { useRouter } from 'vue-router';
 const newsList=reactive([
    {id:'dsaadasdadn01',title:"很好的抗癌食物",content:"西蓝花"},
    {id:'dsaadasdadn02',title:"如何一夜暴富",content:"学习it"},
    {id:'dsaadasdadn03',title:"震惊，万万没有想到",content:"明天是周一"},
    {id:'dsaadasdadn04',title:"好消息！！！",content:"快过年了"}
 ])

 let router=useRouter();

 interface NewsInter{
  id:string,
  title:string,
  content:string,
 }



function showNewsDetail(item:NewsInter){
  //看完以后，可以回去
  /* router.push({
     name:'guang',
        query:{
          id:item.id,
          title:item.title,
          content:item.content
        }
  }) */
  
  //看完以后，回去不了
  router.replace({
     name:'guang',
        query:{
          id:item.id,
          title:item.title,
          content:item.content
        }
  })
}


 router

</script>
 
<style scoped>
/**新闻 */
.news {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    height: 100%;
}

.news ul{
    margin-top: 30px;
  /*   list-style: none; */
   padding-left: 10px;
}

.news li::marker{
    color:#64967E;
}


.news li>a{
    font-size: 18px;
    line-height: 40px;
    text-decoration: none;
    color: #64967E;
    text-shadow: 0 0 1px rgb(0, 84, 0);
}

.news-content{
    width: 70%;
    height: 90%;
    border: 1px solid;
    margin-top: 20px;
    border-radius: 10px;
}

</style>
