<template>
    <div class="talk">

        <button @click="getLoveTalk">获取一句土味情话</button>
        <ul v-for="item in loveStore.talkList" :key="item.id">

            <li>{{ item.title }}</li>
        </ul>

    </div>

</template>



<script setup lang="ts" name="LoveTalk">
import { reactive } from 'vue';
import axios from 'axios';
import { nanoid } from 'nanoid';
import { useLoveTalkStore } from '@/store/loveTalk';
//数据  数据请求不出来，浏览器关掉，再重新启动，请求
/* let talkList = reactive([
    { id: "dsdasdadas01", title: "今天你有点怪，哪里怪？怪好看的！" },
    { id: "dsdasdadas02", title: "蓝莓，草莓，蔓越莓，今天想我了没？" },
    { id: "dsdasdadas03", title: "心里给你留了一块地，我的死心塌地？" },
])
 */
 const loveStore=useLoveTalkStore()
   
 loveStore.$subscribe((mutate,state)=>{
    console.log("loveStore保存的数据发生了变化",mutate,state)
    localStorage.setItem('talkList',JSON.stringify(state.talkList))
 })
 
function getLoveTalk(){
    loveStore.getLoveTalk();
}

 


</script>

<style scoped>
.talk {
    background-color: orange;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 0 10px;
}
</style>