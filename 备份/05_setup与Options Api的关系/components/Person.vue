<template>
 <div class="Person">
   <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showtel">查询联系方式</button>
    <hr>
    <h2>测试1：{{a}}</h2>
    <h2>测试2：{{c}}</h2>
    <h2>测试3：{{d}}</h2>
    <button @click="b">测试</button>
 </div>

</template>



<script lang ="ts">
  export default {
    name:'Person',
   
   beforeCreate(){
    console.log('beforeCreate')
   },

   data(){
    return {
    a:100,
    c:this.name,
    d:900
     }
   },
   methods:{
     b(){
      console.log('b')
    }
   },

    setup(){
      //数据 setup 中的this 是undefined 的vue3 此时已经弱化this
     let name="张三"  //此时的name和age不是响应式的，name确实改了，但是不是响应式的
     let age=18
     let tel=13545893637
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

       //将数据、方法交出去，模板中才可以使用
      return {name,age,changeName,changeAge,showtel}

      //setup的返回值，也可以是一个渲染函数
     // return ()=>'哈哈哈'
    }



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