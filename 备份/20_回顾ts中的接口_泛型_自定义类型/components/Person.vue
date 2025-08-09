<template>
 <div class="Person">
   ？？？
</div>
</template>



   <script setup lang="ts" name="Person">
   import {type PersonInter,type Persons } from '@/types';
 

   // let Person:PersonInter ={id:"dadadad01",name:"张三",age:10}

    let PersonList:Persons=[
      {id:"dadadad01",name:"张三",age:60},
      {id:"dadadad02",name:"李四",age:18},
      {id:"dadadad03",name:"王五",age:5}
    ] 
    
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