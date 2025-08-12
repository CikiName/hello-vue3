<template>
	<div class="father">
		<h3>父组件</h3>
		<h3>房产：{{ houseNum }}</h3>

		<!-- //第一种方式修改孩子的东西
		<button @click="changeToy">修改孩子的玩具</button> -->
		<!-- 第二种方式修改孩子的数据 -->
		<button @click="getChild($refs)">获取所有的孩子的实例，并修改数据</button>
		<Child1 ref="c1"></Child1>
		<Child2 ref="c2"></Child2>
	</div>
</template>

<script setup lang="ts" name="Father">
import Child1 from './Child1.vue'
import Child2 from './Child2.vue';
import { ref } from 'vue';


let houseNum = ref(4)
//定义孩子的实力
let c1=ref();
let c2=ref();


//父亲修改孩子的玩具
function changeToy() {
    console.log("修改孩子的玩具：",c1.value,c2.value)
   c1.value.computer='华硕笔记本电脑'
   c2.value.toy="小猪佩奇布偶"

}

//获取所有的孩子的实力
function getChild(refs:any){
	console.log("获取孩子的实例",refs)
  for(let key in refs){
    refs[key].bookNum+=3
	refs[key].computer='华为'
	refs[key].toy="动感超人"
  }
}

//暴露出父亲，想要暴露的数据
defineExpose({houseNum})

</script>

<style scoped>
.father {
	background-color: rgb(165, 164, 164);
	padding: 20px;
	border-radius: 10px;
}

.father button {
	margin-bottom: 10px;
	margin-left: 10px;
}
</style>
