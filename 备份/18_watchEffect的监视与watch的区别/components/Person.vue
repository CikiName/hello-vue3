<template>
 <div class="Person">
  <h2>需求：当水温达到60度，或者水位达到80厘米，给服务器发个请求</h2>
   <h2>当前水温：{{ temp}}</h2>
   <h2>当前水位：{{ height }}cm</h2>
   <button @click="changeTemp">增加水位+10</button>
   <button @click="changeHeight">增加水温+10</button>
</div>
</template>



   <script setup lang="ts" name="Person">
    import {ref,watch,watchEffect}  from "vue"

    let temp=ref(10)
    let height=ref(0)

    function changeTemp(){
      temp.value+=10
    }

    function changeHeight(){
          height.value+=10
    }
   //监视 --watch实现
  /*   watch([temp,height],(Value)=>{
      //从valve中获取最新的水位和水温
      let [newTemp,newHeight]=Value
      console.log(newTemp,newHeight)
           if(newTemp>=60||newHeight>=80){
            console.log("向服务器发请求")
           }
    }) */
     //立即运行一个函数，并同事响应式追踪其依赖，并在对依赖进行更改时，执行该函数
    watchEffect(()=>{
    //  console.log("开始监视")

      if(temp.value>=60||height.value>=80){
        console.log("向服务器发生请求")
      }
    }

    )

  </script>


<style scoped>
  .Person{
    background: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
  
  button{
    padding: 5px;
    margin: 0 5px;
  }
    
  li{
    font-size: 20px;
  }

</style>