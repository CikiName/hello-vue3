<template>
<ul class="news-list">
    <!-- useRoute 写法 -->
   <!--  <li>编号：{{route.params.id  }}</li>
    <li>标题：{{route.params.title  }}</li>
    <li>内容：{{ route.params.content  }}</li> -->
    <!-- Props写法 -->
    <li>编号：{{ id  }}</li>
    <li>标题：{{ title  }}</li>
    <li>内容：{{ content  }}</li>
</ul>
</template>



<script setup lang="ts" name="Detail"> 

defineProps(['id','title','content'])
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
