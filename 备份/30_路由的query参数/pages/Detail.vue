<template>
<ul class="news-list">
    <li>编号：{{ query.id }}</li>
    <li>标题：{{ query.title }}</li>
    <li>内容：{{ query.content}}</li>
</ul>
</template>



<script setup lang="ts" name="Detail"> 
//useRoute为hooks
  import { toRefs } from 'vue';
import { useRoute } from 'vue-router';
 let route=useRoute()

 //用响应式的对象结构响应式，必定会丢失响应式
 // let {query}=useRoute()
 let {query}=toRefs(useRoute());
 console.log(route)

</script>

<style>
.news-list{
    list-style: none;
    padding-left: 20px;

}

.news-list>li{
    line-height: 30px;
}

</style>
