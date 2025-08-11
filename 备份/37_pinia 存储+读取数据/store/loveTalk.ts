import { defineStore } from "pinia";


export const useLoveTalkStore=defineStore('talk',{
    //真正存储数据的地方
    state(){
    return {
     talkList:([
    { id: "dsdasdadas01", title: "今天你有点怪，哪里怪？怪好看的！" },
    { id: "dsdasdadas02", title: "蓝莓，草莓，蔓越莓，今天想我了没？" },
    { id: "dsdasdadas03", title: "心里给你留了一块地，我的死心塌地？" },
])
    }
}})