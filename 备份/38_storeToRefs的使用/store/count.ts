import { defineStore } from "pinia";
import { createIncrementalCompilerHost } from "typescript";


export const useCountStore=defineStore('count',{
    actions:{
        increament(value:number){
          //  console.log("increment被调用了",value)
          //修改数据(this 是当前的store)
        //  console.log(this.sum)
          this.sum+=value

        },
        minus(value:number){

            
            this.sum-=value
        }


    },
    //真正存储数据的地方
    state(){
    return {
       sum:6,
       school:"wuhandaxue",
       adress:"武汉市江汉路步行街"
    }
}})