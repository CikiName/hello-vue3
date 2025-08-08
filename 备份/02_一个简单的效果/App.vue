<template>
  <!-- 前端显示的样式 -->
  <div class="app">
  <h1>你好啊！</h1>  
  </div>
  <Person/>
</template>


<script lang="ts">
import Person from './components/Person.vue';
//页面逻辑交互
   export default{
    name:'App', //组件名称
    components:{Person} //注册组件
   }
</script>

<style>
/* 显示的样式 */
  .app {
  background: #ddd;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }

</style>