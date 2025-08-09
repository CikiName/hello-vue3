<template>
 <div class="Person">
    <h2>一辆{{ car.brand }}车,价值{{ car.price }}万</h2>
    <button @click="changeBrand">修改汽车的品牌</button>
    <button @click="changePrice">修改汽车的价格</button>
    <button @click="changeCar">修改整个车</button>
    <hr>
    <h2>当前求和为：{{sum}}</h2>
    <button @click="changeSum">点我sum+1</button>
   
    
 </div>

</template>



   <script setup lang="ts" name="Person">
   import { reactive, ref } from 'vue';

       //数据
       let car=reactive({  brand:'奔驰',price:100})

       let sum=ref(0)
   

       //方法
       function changePrice(){
            car.price+=10
            console.log(car.price)
       }
       function changeBrand(){
        car.brand='宝马'
       }

      function changeSum(){
         sum.value+=1
      }
     
      function changeCar(){
      //  car=reactive({brand:'奥拓',price:15})  这么修改页面数据是不更新的
      //     car.value={brand:'奥拓',price:15}  这么写页面不更新
      //下面这个写法可以更新页面
      Object.assign(car,{brand:'奥拓',price:15})  //用object的数据进行修改
     
      }
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