<template>
 <div class="app">
   <h2>当前sum1求和为：{{ sum1  }}</h2>
   <h2>当前sum2求和为：{{ sum2 }}</h2>
    <h2>当前车的:{{ car }}</h2>
    <h2>当前车的品牌为:{{ car.brand }}</h2>

    
<button @click="changeSum1">点我sum1+1</button>
<button @click="changeSum2">点我sum2+1</button>
<button @click="changeBrand">修改车的品牌</button>
<button @click="changeColor">修改车的颜色</button>

 </div>

</template>


<script setup lang="ts" name="App">
import { ref,readonly, reactive} from 'vue';
/***
 * shallowReadonly  浅层次的只读
 * readonly
 */


  let sum1=ref(0)

  let sum2=readonly(sum1)

  let  car=reactive({
   brand:"奔驰",
   options:{
    engine:"V8",
    color:"red"
   }


  })


  function changeSum1(){
    sum1.value+=1
  }
  
function changeSum2(){
    sum2.value+=1
}


 function changeBrand(){
    car.brand="宝马"
 }
 function changeColor(){
    car.options.color='绿色'
 }

</script>

<style scoped>
.app{
    background-color: #ddd;
    border-radius: 10px;
    box-shadow: 0 0 10px;
    padding: 10px;
}

button{
    margin: 10px;
}

</style>