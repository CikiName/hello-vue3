<template>
 <div class="Person">
    姓：<input type="text" v-model="firstName"><br>
    名：<input type="text" v-model="lastName"><br>
     <button @click="changeFullName">修改全名改为li-si</button><br>
    全名：<span>{{fullName}}</span><br>
    全名：<span>{{fullName}}</span><br>
    全名：<span>{{fullName}}</span><br>
    全名：<span>{{fullName}}</span><br>
   
 </div>

</template>



   <script setup lang="ts" name="Person">
    import {ref,computed} from 'vue'
    let firstName=ref('zhang')
    let lastName=ref('san')
   

    //这么定义的fullName是一个计算属性，且只是只读的
    /*  let fullName=computed(()=>{
       console.log(1)
       return firstName.value.slice(0,1).toUpperCase()+firstName.value.slice(1)+'-'+lastName.value
     }) */

      function fullName2(){
         console.log(2)
      return firstName.value.slice(0,1).toUpperCase()+firstName.value.slice(1)+'-'+lastName.value

  }

     //这么定义的fullName是一个计算属性，可读可写
  let fullName=computed({
       get(){
       return firstName.value.slice(0,1).toUpperCase()+firstName.value.slice(1)+'-'+lastName.value
       },
       set(val){
           console.log("set",val)
         const [str1,str2]=val.split('-')
        firstName.value=str1
        lastName.value=str2
     
    //    fullName.value=val.slice(0,1).toUpperCase()+val.slice(1)
       }
  })

 

   function changeFullName(){
      // console.log(fullName.value);
       fullName.value='li-si'
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