<template>
  <div class="father">
    <h3>父组件</h3>
		<h3>a:{{ a }}</h3>
		<h3>b:{{ b }}</h3>
		<h3>c:{{ c }}</h3>
		<h3>d:{{ d }}</h3>
     <button @click="updateNUm">点我更新数据</button>

		<child :a="a" :b="b"  :c="c"  :d="d" v-bind="{x:100,y:200}" :updateMe="updateA"></child>
  </div>
</template>

<script setup lang="ts" name="Father">
	import Child from './Child.vue'
	import {ref} from 'vue'
	let a=ref(1)
	let b=ref(2)
	let c=ref(3)
	let d=ref(4)

function updateNUm(){
	a.value+=10
	b.value+=20
}

function updateA(value:number){
	console.log("孙子，开始更新数据A",value)
	c.value+=value
}


</script>

<style scoped>
	.father{
		background-color: rgb(165, 164, 164);
		padding: 20px;
		border-radius: 10px;
	}
</style>
