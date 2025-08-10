<template>
 <div class="Person">
   
 <ul>
  <li v-for="item in list" :key="item.id">
    {{ item.name }}--{{ item.age }}
 </li>
</ul>

</div>
</template>



   <script setup lang="ts" name="Person">
   import  {type PersonInter, type Persons } from '@/types';
   import {withDefaults} from 'vue';

   //只接受list
 // defineProps(['list'])


   //接受list+限制类型
  //  defineProps<{list:Persons}>()

   //接收+限制类型+限制必要性+指定默认值
  withDefaults(defineProps<{list?:Persons}>(),{
    list:()=>[{id:"dasdada01",name:"康师傅",age:18}]
  })

   //只接受list，同事将props保存起来
/*    let x= defineProps(['list'])

    console.log(x.list)
     */
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