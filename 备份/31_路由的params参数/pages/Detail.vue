<template>
<ul class="news-list">
    <li>编号：{{params.id  }}</li>
    <li>标题：{{params.title  }}</li>
    <li>内容：{{ params.content  }}</li>
</ul>
</template>



<script setup lang="ts" name="Detail"> 
import { toRefs } from 'vue';
import { useRoute } from 'vue-router';
// let route=useRoute();
let {params}=toRefs(useRoute())


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
