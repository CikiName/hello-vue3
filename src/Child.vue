<template>
  <div class="child">
  <h2>我是child的组件</h2>
  <h2>当前的求和为：{{ sum }}</h2>
  </div>


</template>

<script setup lang="ts" name="Child">
import axios from 'axios';
import  {ref} from 'vue'
let sum=ref(0)
let {data:{content}} = await axios.get('https://dog.ceo/api/breed/pembroke/images/random');
console.log(content)


</script>

<style>
.child{
    background-color: skyblue;
    border-radius: 10px;
    box-shadow: 0 0 10px;
    padding: 10px;
}

</style>