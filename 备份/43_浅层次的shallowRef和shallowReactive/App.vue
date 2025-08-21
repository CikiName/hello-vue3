<template>
 <div class="app">
<h2>求和为：{{ sum }}</h2>
<h2>名字为：{{ person.name }}</h2>
<h2>年龄为：{{ person.age }}</h2>
<h2>汽车信息：{{ car}}</h2>
    <button @click="changeSum">sum+1</button>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改整个人</button>
    <button @click="changeBrand">修改品牌</button>
    <button @click="changeEngine">修改发动机</button>
    <button @click="changeColor">修改颜色</button>
   </div> 
</template>


<script setup lang="ts" name="App">
import { shallowRef,reactive,shallowReactive} from 'vue';

//shallowRef 浅层次的响应式，，负责响应浅层次的东西

//shallowReactive 浅层次的响应式，负责响应浅层次的东西,只关注第一层的数据就行


let  car=shallowReactive({
    brand:'奔驰',
    Option:{
        engine:'V8',
        color:'黑色'
    }

})


let  sum  =shallowRef(0)

let  person =shallowRef({
    name:"张三",
    age:18
})

function changeSum(){
    sum.value+=1
}

function changeName(){
    person.value.name="王五"
}

function  changeAge(){
    person.value.age+=1
}

function changePerson(){
   person.value={name:"赵四",age:88}
}
/************************** */
function changeBrand(){
    car.brand='宝马'
}



function changeCar(){
    Object.assign(car,{engine:'V12',color:'蓝色'})
}


function changeColor(){
    car.Option.color='黄色'
}

function changeEngine(){
    car.Option.engine='V12'
}
</script>

<style scoped>
.app{
    background-color: #ddd;
    border-radius: 10px;
    box-shadow: 0 0 10px;
    padding: 10px;
}

button{
    margin: 10px;
}

</style>