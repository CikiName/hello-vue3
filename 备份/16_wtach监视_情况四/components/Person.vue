<template>
 <div class="Person">
   <h2>姓名：{{ person.name }}</h2>
   <h2>年龄：{{ person.age }}</h2>
   <h2>汽车：{{ person.car.c1 }}、{{ person.car.c2 }}</h2>
   <button @click="changeName">修改名字</button>
   <button @click="changeAge">修改年龄</button>
   <button @click="changeC1">修改第一台车</button>
   <button @click="changeC2">修改第二台车</button>
   <button @click="changeCar">修改整个车车</button>
</div>
</template>



   <script setup lang="ts" name="Person">
   import {reactive,watch}  from 'vue'
    let person=reactive({
      name:'张三',
      age:18,
      car:{
        c1:'奔驰',
        c2:'宝马'
      }
    })

      function changeName(){
      person.name+='~'
      }
      function changeAge(){
      person.age+=1
      }

      function changeC1(){
      person.car.c1='奥迪'
      }
      function changeC2(){
      person.car.c2='大众'
      }
      function changeCar(){
      person.car={c1:'雅迪',c2:'艾玛'

      }
  }

  //监视 情况四：监视响应式对象中的某个属性，且该属性是基本类型，要写成函数式
  /* watch(()=>{return person.name},(newValue,oldValue)=>{
     console.log("person.name",newValue,oldValue)
  }) */

   //细枝末节的改变可以看到，但是整个变化无法显示
/*   watch(person.car,(newValue,oldValue)=>{
    console.log("person.car",newValue,oldValue)
  },{deep:true}) */

    //监视：情况四：监视响应式对象中的摸个属性，且该属性是对象类型的，可以直接写，也能写函数，更推荐写函数
  watch(()=>person.car,(newValue,oldValue)=>{
    console.log("person.car",newValue,oldValue)
  },{deep:true})
    

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