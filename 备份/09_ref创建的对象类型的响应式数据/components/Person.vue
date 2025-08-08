<template>
 <div class="Person">
    <h2>一辆{{ car.brand }}车,价值{{ car.price }}万</h2>
    <button @click="changePrice">修改汽车的价格</button>
    <br>
    <h2>游戏列表：</h2>
    <ul>
    <li  v-for="G in games" v-bind:key="G.id">
        {{G.name}}

    </li>
    </ul>
    <button @click="changeFirstGame">修改第一个游戏的名字</button>
   
    
 </div>

</template>



   <script setup lang="ts" name="Person">
   import { reactive, ref } from 'vue';

       //数据
       let car=ref({  brand:'奔驰',price:100})

   
       let games=ref([
        {id:'dsadasdada01',name:'王者荣耀'},
        {id:'dsadasdada02',name:'原神'},
        {id:'dsadasdada03',name:'三国志'},
        {id:'dsadasdada04',name:'csGo'}
       ])

       let c=reactive({x:999})
          console.log(car)
          console.log(c)

       //方法
       function changePrice(){
            car.value.price+=10
            console.log(car.value.price)
       }

      function changeFirstGame(){
          games.value[0].name='流星蝴蝶剑'
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