<template>
 <div class="app">
   <h2>当前msg为：{{ msg  }}</h2>
   <input type="text" v-model="msg">
 

 </div>

</template>


<script setup lang="ts" name="App">
import { customRef,readonly, reactive} from 'vue';
import useMsgRef from './useMsgRef';
/***
 *自定义的ref  customerRef 
 *  自定义ref  就是在原生的ref上，加上一些自己的逻辑
 *  主要是两个字段，
 * 一个track（跟踪，痕迹） 告诉vue msg很重要，需要持续进行关注，一旦发生了变化，就要去更新
 * 一个trigger(触发)  通知一下vue  msg发生了变化了
 * 
 */

 //使用useMsgRef来定义一个响应式且有延时效果的数据
 let {msg} =useMsgRef('你好',2000)
  



</script>

<style scoped>
.app{
    background-color: #ddd;
    border-radius: 10px;
    box-shadow: 0 0 10px;
    padding: 10px;
}

button{
    margin: 10px;
}

</style>