<template>
  <!-- 务必看懂下面这一行代码 -->
 <!-- <h2 a="1+1" :b="1+1" c="x" :d="x" ref="qwe"></h2>
 -->
  <Person a="哈哈" />

</template>


<script lang="ts" setup name="App">
import Person from './components/Person.vue';
import { ref,onMounted} from 'vue';

 

</script>

<style>
/* 显示的样式 */

</style>