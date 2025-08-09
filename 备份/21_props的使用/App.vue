<template>
  <!-- 务必看懂下面这一行代码 -->
 <!-- <h2 a="1+1" :b="1+1" c="x" :d="x" ref="qwe"></h2>
 -->
  <Person a="哈哈" :list="PersonList" />

</template>


<script lang="ts" setup name="App">
import Person from './components/Person.vue';
import { reactive } from 'vue';
import {type Persons} from "@/types"

let x="8"

  let PersonList=reactive<Persons>([
      {id:"dadadad01",name:"张三",age:60},
      {id:"dadadad02",name:"李四",age:18},
      {id:"dadadad03",name:"王五",age:52}
    ] )
 


</script>

<style>
/* 显示的样式 */

</style>