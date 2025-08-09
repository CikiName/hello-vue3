<template>
 <div class="Person">
   <h2>姓名：{{ name }}</h2>
   <h2>年龄：{{age}}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
 </div>

</template>



   <script setup lang="ts" name="Person">
   import { reactive, toRefs,toRef} from 'vue';
     let person=reactive({
      name:'张三',
      age:18
    })


     let {name,age}=toRefs(person)  //是将响应式对象里面的所有的数据拿出来转为响应式对象
    let  nl=toRef(person,'age') //toref是将一个响应式对象的数据拿出来，转为响应式对象

  

    function changeName(){
     name.value+='~'
     console.log(name,person.name)
    }
 function changeAge(){
   age.value+=1
   console.log(age,person.age)
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