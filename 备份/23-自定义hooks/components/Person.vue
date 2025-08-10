      <template>
      <div class="Person">
      <h2>当前求和为：{{ sum }},放大十倍后的值：{{ bigSum }}</h2>
      <button @click="add">点我sum+1</button>
      <hr>
      <img v-for="dog in dogList" :src="dog" ></img>
      <br>
      <button  @click="getDog">再来一只狗</button>
      </div>
      </template>


   <script setup lang="ts" name="Person">
    import useDog from '@/hooks/useDog';
    import useSum from '@/hooks/useSum';
    
  let {dogList,getDog}=useDog();

  let {sum,add,bigSum} =useSum();

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
    
  img{
    width: 100px;
    padding: 5px;
  }

</style>