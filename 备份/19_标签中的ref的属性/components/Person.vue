<template>
 <div class="Person">
    <h1>中国</h1>
    <h1 ref="title2">北京</h1>
    <h1>尚硅谷</h1>
    <button @click="showLog"> 点我输出h2的元素</button>
</div>
</template>



   <script setup lang="ts" name="Person">
     import {ref} from "vue"

     let title2=ref()

     let a=ref()

     let b=ref()

     let c=ref()


   function showLog(){
    console.log(title2.value)
   }
   defineExpose({a,b,c})
  </script>


<style scoped>
  .Person{
    background: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
  
  button{
    padding: 5px;
    margin: 0 5px;
  }
    
  li{
    font-size: 20px;
  }

</style>