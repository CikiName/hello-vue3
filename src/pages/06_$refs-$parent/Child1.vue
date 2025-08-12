<template>
<div class="child1">
<h3>子组件1</h3>
<h3>玩具：{{ computer }}</h3>
	<h3>书籍：{{ bookNum }}</h3>
</div>
   
</template>

<script setup lang="ts" name="Child1">
	import { ref } from 'vue';

	let computer=ref("联想电脑")

	let  bookNum=ref(5)

  defineExpose({computer,bookNum})

</script>

<style scoped>
	.child1{
		margin-top: 20px;
		background-color: skyblue;
		padding: 20px;
		border-radius: 10px;
    box-shadow: 0 0 10px black;
	}
</style>
