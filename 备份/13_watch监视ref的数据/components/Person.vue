<template>
 <div class="Person">
  <h2>当前求和为:{{ sum }}</h2>
   <button @click="changeSum">点我sum+1</button>
 </div>

</template>



   <script setup lang="ts" name="Person">
   import {ref,watch}  from 'vue'
   //数据
   let sum=ref(0)
   //方法
   function changeSum(){
    sum.value+=1
   }

   //监视 情况一 监视【ref】定义的【基本类型】的数据
   const stopWatch=watch(sum,(newValue,OldValue)=>{
    console.log("sum变化了",newValue,OldValue)
    if(newValue>=10){
      stopWatch()
    }
   })
    
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