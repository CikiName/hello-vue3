<template>
  <div class="count">
    <h2>当前求和为：{{ countStore.sum }}</h2>
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
import { ref, reactive } from 'vue'
import { useCountStore } from '@/store/count';

const countStore = useCountStore()

//第一种方式获取数据
// console.log("@#",countStore.sum)
//第二种方式获取数据
console.log(countStore.$state.sum)

/**如果对象是被reactive包括的，那么里面的ref对象，不需要。value  ，直接引用就可以,reactive 可以自己进行拆箱，如果对象只有ref包括的，哪就需要.value */
const obj = reactive({
  a: 1,
  b: 2,
  c: ref(3)
})
let x = ref(9)
console.log(obj.a)
console.log(obj.b)
console.log(obj.c)
console.log(x.value)




let n = ref(1)    //当前用户选择的数字

function add() {

}

function minus() { }


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