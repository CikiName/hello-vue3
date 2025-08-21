<template>
	<div class="grand-child">
		<h3>孙组件</h3>
		<h3>a:{{ a }}</h3>
		<h3>b:{{ b }}</h3>
		<h3>c:{{ c }}</h3>
		<h3>d:{{ d }}</h3>
		<h3>x:{{ x }}</h3>
		<h3>y:{{ y }}</h3>
		<button @click="updateMe(c)"> 点我更新数据A</button>
	</div>
</template>

<script setup lang="ts" name="GrandChild">
defineProps(['a','b','c','d','x','y','updateMe'])
</script>

<style scoped>
	.grand-child{
		margin-top: 20px;
		background-color: orange;
		padding: 20px;
		border-radius: 10px;
		box-shadow: 0 0 10px black;
	}
</style>