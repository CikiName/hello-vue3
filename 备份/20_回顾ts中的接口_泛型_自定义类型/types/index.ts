export interface PersonInter{
    id:string,  //ts世界里面，S必须要小写
    name:string,
    age:number
}


//一个自定义类型

//export type Persons =Array<PersonInter>
export type Persons =PersonInter[]