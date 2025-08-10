<template>
<div class="news">
    <!-- 导航区 -->
 <ul>
    <li v-for="item in newsList" :key="item.id">
        <RouterLink to="/news/detail">{{ item.title }}</RouterLink> 
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
 const newsList=reactive([
    {id:'dsaadasdadn01',title:"很好的抗癌食物",content:"西蓝花"},
    {id:'dsaadasdadn02',title:"如何一夜暴富",content:"学习it"},
    {id:'dsaadasdadn03',title:"震惊，万万没有想到",content:"明天是周一"},
    {id:'dsaadasdadn04',title:"好消息！！！",content:"快过年了"}
 ])

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
    list-style: none;
   padding-left: 10px;
}
.new li>a{
    font-size: 18px;
    line-height: 40px;
    text-decoration: none;
    color: #64967e;
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
