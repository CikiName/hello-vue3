<template>
 <div class="Person">
   <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
     <h2>地址：{{address}}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showtel">查询联系方式</button>
 </div>

</template>



   <script setup lang="ts" name="Person">
      //数据 setup 中的this 是undefined 的vue3 此时已经弱化this
     let name="张三"  //此时的name和age不是响应式的，name确实改了，但是不是响应式的
     let age=18
     let tel=13545893637
     let address='湖北省武汉市黄陂区江汉大道'
      //方法
      function changeName(){
       name="zhangsan"
       console.log("name",name)
      }
    
      function changeAge(){
        age+=1
         console.log("age",age)
      }

      function showtel(){
        alert(tel);
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

</style>