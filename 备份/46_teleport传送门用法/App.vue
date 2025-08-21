<template>
 <div class="outer">
   <h2>我是App组件</h2>
     <img src="https://so1.360tres.com/dr/270_500_/t0196f5285d0fb8311e.jpg" alt="">
 <br>
  <model></model>
 </div>

</template>


<script setup lang="ts" name="App">
import model from './model.vue';
 

</script>

<style scoped>
.outer{
    background-color: #ddd;
    border-radius: 10px;
    box-shadow: 0 0 10px;
    padding: 5px;
    width: 400px;
    height: 400px;
    filter: saturate(200%);
}

button{
    margin: 10px;
}

img{
  width: 200px;
}

</style>