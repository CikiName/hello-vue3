<template>
<div class="about">
<h2>大家好，欢迎来我的直播间看节目</h2>

</div>


</template>

<script lang="ts" name="About" setup>   
   import { onMounted,onUnmounted } from 'vue';

onMounted(()=>{
    console.log("about挂载了")
})

onUnmounted(()=>{
    console.log("about卸载了")
})

</script>

<style scoped>
.about{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: rgb(85, 84, 84);
    font-size: 18px;
}

</style>
