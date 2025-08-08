<template>
 <div class="Person">
   <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showtel">查询联系方式</button>
 </div>

</template>



<script lang ="ts">
  export default {
    name:'Person',
    data(){
      return {
      name:"张三",
      age:18,
      tel:18895232623
      }
    },
   methods:{
    showtel(){
        alert(this.tel)
    },
    changeName(){
        this.name='zhangsan'
    },
    changeAge(){
        this.age+=1
    }

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