<template>
  <!-- 前端显示的样式 -->
   <h2 ref="title2"> 你好</h2>
   <button @click="showH2">测试</button>
  <Person ref="ren" />
  
</template>


<script lang="ts" setup name="App">
import Person from './components/Person.vue';
import {ref}  from "vue"

let title2=ref();
let ren =ref()
function showH2(){
console.log(ren.value)
}

</script>

<style>
/* 显示的样式 */

</style>