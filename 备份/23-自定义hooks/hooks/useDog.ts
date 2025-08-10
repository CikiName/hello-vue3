    import {ref,reactive}  from 'vue'
    import axios from 'axios'


  export default function(){


    let dogList=reactive([
      'https://images.dog.ceo/breeds/pembroke/n02113023_591.jpg'
    ])

 
  
   async function getDog(){
    try{
    let resulst=await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
    console.log(resulst.data.message)

    dogList.push(resulst.data.message)
   }catch(error){
     console.log("请求错误了")
   }
   }
    //向外部提供东西
    return {dogList,getDog}
  }
  