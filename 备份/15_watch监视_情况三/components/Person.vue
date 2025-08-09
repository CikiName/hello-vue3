<template>
 <div class="Person">
 <h1>情况三：监视【ref】定义的【对象类型】的数据</h1>
 <h2>姓名：{{ person.name }}</h2>
 <h2>年龄：{{ person.age}}</h2>
 <button @click="changeName">修改名字</button>
 <button @click="changeAge">修改年龄</button>
 <button @click="changePerson">修改整个人</button>
 <hr>
 <h2>测试:{{ obj.a.b.c }}</h2>
 <button @click="changeObj">修改obj</button>
</div>
</template>



   <script setup lang="ts" name="Person">
   import {reactive,watch}  from 'vue'
     let person=reactive({
      name:'张三',
      age:18
     })

    let obj=reactive({
      a:{
        b:{
          c:666
        }
      }
    })

   function changeName(){
      person.name+='~'
   }

   function changeAge(){
   person.age+=1
   }

   function changePerson(){
    //批量修改整个人 的属性，没有替换整个人
   Object.assign(person,{
    name:'李四',
    age:90
   })
  }

  function changeObj(){
    obj.a.b.c=8888888;
  }
    
  //监视 情况三：监视【reactive】定义的【对象类型】数据，且默认是开启深度监视的,隐式的创建了深度监听
   watch(person,(newValue,OldValue)=>{
    console.log("person变化了",newValue,OldValue)
   },{deep:true})


   watch(obj,(newValue,OldValue)=>{
    console.log("obj变化了",newValue,OldValue)

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