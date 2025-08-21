import {customRef} from 'vue'

export default function(initValue:string,delay:number){
  let  timer:number=1
  //track(跟踪)  trigger(触发)
 let  msg=customRef((track,trigger)=>{
  return{
    //get 何时调用？ 一 mgs被读取时
    get() {
      track()  //告诉vue数据msg 很重要，你对msg进行持续关注，一旦msg发生变化，就要去更新
      return initValue
      
    },

    set(value){
        clearTimeout(timer)
        timer=setTimeout(()=>{
         initValue=value
         trigger()//通知一下vue  数据msg发生变化了
        },delay)
       
    }
  }
 })
  return{ msg}
}