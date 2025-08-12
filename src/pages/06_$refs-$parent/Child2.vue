<template>
  <div class="child2">
	<h3>子组件2</h3>
	<h3>玩具：{{ toy }}</h3>
	<h3>书籍：{{ bookNum }}</h3>
	 <button @click="changeHouse($parent)">修改父亲的房产的数量</button>
  </div>
  
</template>

<script setup lang="ts" name="Child2">
	import { ref } from 'vue';

	let toy=ref("奥特曼超人")

	let  bookNum=ref(8)
   

	//孩子卖掉父亲的房产
function  changeHouse(parent:any){
parent.houseNum-=1
}

	//暴露自己的数据
	defineExpose({toy,bookNum})

</script>

<style scoped>
	.child2{
		margin-top: 20px;
		background-color: orange;
		padding: 20px;
		border-radius: 10px;
    box-shadow: 0 0 10px black;
	}
</style>
