<template>
  <div class="count">
    <h2>当前求和为：{{ sum }}</h2>
    <h2>欢迎来到：{{ school }}，坐落于：{{ adress }}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>

    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>


</template>


<script setup lang="ts" name="Count">
import { ref, reactive,toRefs } from 'vue'
//引入一个useCountStore
import { useCountStore } from '@/store/count';
import { storeToRefs } from 'pinia';

//使用一个useCountStore 得到一个专门保存count相关的store
 const countStore = useCountStore()

//第二种方式用torefs方式，但是代价有点大，需要更换，不推荐
// let {sum,school,adress}=useCountStore()
//第三种方式，比较推荐,只会保存需要保存的数据
let {sum,school,adress}=storeToRefs(useCountStore())
console.log("!!!",storeToRefs(useCountStore()))

let n = ref(1)    //当前用户选择的数字

function add() {
  //第一种修改方式
// countStore.sum+=n.value
// countStore.school="武汉大学"
// countStore.adress='jianghanroad'

//第二章修改方式，批量变更
/* countStore.$patch({
  sum:888,
  school:"武汉大学",
  adress:"jianghanroad"
  
}) */
  //第三种修改方式
  countStore.increament(n.value);

}

function minus() { 
  countStore.minus(n.value)
}


</script>


<style scoped>
.count {
  background-color: skyblue;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 0 10px;
}

section,
button {
  margin: 0 5px;
  height: 25px;
}
</style>