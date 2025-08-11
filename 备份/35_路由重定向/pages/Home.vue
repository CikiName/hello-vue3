<template>
<div class="home">
<img src="http://www.atguigu.com/images/index_new/logo.png"></img>

</div>


</template>

<script lang="ts" name="Home" setup> 
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';


let router=useRouter();

//定时任务进行跳转
/* 
onMounted(()=>{
    setTimeout(()=>{
router.push('/News')
    },3000)})

   */

</script>

<style scoped>
.home{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

</style>
