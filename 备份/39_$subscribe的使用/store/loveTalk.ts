import { defineStore } from "pinia";
import axios from "axios";
import { nanoid } from "nanoid";


export const useLoveTalkStore=defineStore('talk',{
   actions:{
    async  getLoveTalk() {
    //发请求  下面的这行写法是连续结构赋值+重命名
    let {data:{content:title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
    //把请求回来的字符串，包装成一个对象
    let obj = { id: nanoid(), title}

    console.log(obj)
     //放到数据中
   this.talkList.unshift(obj)
   }
},
    //真正存储数据的地方
    state(){
    return {
     talkList:JSON.parse(localStorage.getItem('talkList')as string)||[]
    }
}})