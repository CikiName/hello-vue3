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
    <hr>
    <h2>测试：{{obj.a.b.c}}</h2>
    <button @click="changeObj">测试</button>
 </div>

</template>



   <script setup lang="ts" name="Person">
   import { reactive } from 'vue';

       //数据
       let car=reactive({  brand:'奔驰',price:100})

       let games=reactive([
        {id:'dsadasdada01',name:'王者荣耀'},
        {id:'dsadasdada02',name:'原神'},
        {id:'dsadasdada03',name:'三国志'},
        {id:'dsadasdada04',name:'csGo'}
       ])
       //深层次的也可以解决
       let obj=reactive({
        a:{
          b:{
            c:6666888
          }
        }
       })

       console.log(car)

       //方法
       function changePrice(){
            car.price+=10
            console.log(car.price)
       }

      function changeFirstGame(){
          games[0].name='流星蝴蝶剑'
       }
 
       function changeObj(){
        obj.a.b.c=9998
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