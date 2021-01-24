declare module 'test' {
    export interface obj {
        count:number
    }
    /*  
        创建人类型：
            name:姓名
            age:年龄
            gender:性别，0为女，1为男。
    */    
    export interface person {
        name:string,
        age:number | undefined,
        gender:0 | 1,

    }
    export interface objType {
        [name:string]:any
    }
    export interface myClass {
        personList:person[],
        addPerson?:(personList:person[],person:person)=>void,
        deletePerson?:(personList:person[],index:number)=>void,
        changePerson?:(oldPerson:person,person:person) => void
    }
    export type func = (...any) => void
}