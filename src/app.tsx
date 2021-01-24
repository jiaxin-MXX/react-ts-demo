import React , { FC,useRef,useState,useContext} from "react";
import Context from "./compoments/Context";
import { person , objType , func } from 'test';
import { debounce } from "./custom_types/global";

enum gender {
  "女",
  "男"
}

const changePerson = debounce((...arg:[string,objType,person,any]):void =>{
  let [key,refs,person,setPerson] = arg
  if(key in refs){
    let template:objType = {}
    //因为他的值是字符串  我不会搞数字。。。所以这里有个快速转换成数字的方法
    key!== 'name' ? template[key] = ~~refs[key].current.value :  template[key] = refs[key].current.value
    setPerson({
      ...person,
      ...template
    })
  }
},0)

const initPerson:person = {
  name:'',
  age:undefined,
  gender:1,
}

const App:FC = () => {
  let {
    personList,
    addPerson,
    deletePerson:deletePersonContext
  } = useContext(Context)
  const refs:objType = {
    name:useRef<HTMLInputElement | null>(null),
    age:useRef<HTMLInputElement | null>(null),
    gender:useRef<HTMLSelectElement | null>(null)
  }
  let [person,setPerson] = useState<person>({...initPerson})
  let [myPersonList,setPersonList] = useState<person[]>([...personList])
  const changeMessage = (key:string):void => {
    changePerson(key,refs,person,setPerson) 
  }
  const addperson:func = ()=>{
    //调用shareObj的addPerson方法，添加人员。
    addPerson(personList,person)
    //修改本地的myPersonList
    setPersonList([...myPersonList,{...person}])
    
    //重置person
    setPerson({...initPerson})
    //setPerson是个异步方法，所以修改之后下面的person不会立马调用

    //重置输入框的值
    let key:keyof typeof person
    for(key in person){
      key === "name" ? refs[key].current.value = `${initPerson[key]}` : refs[key].current.value = initPerson[key]
    }
  }

  const deletePerson:func = (index)=>{
    myPersonList.splice(index,1)
    setPersonList([...myPersonList])
    deletePersonContext(personList,index)
  }
  return (
    <>
      <div>
        <input ref={refs.name} type="text" placeholder="请输入姓名" onChange={()=>changeMessage("name")} />
        <input ref={refs.age} defaultValue={person.age} type="number" min={0} max={100} placeholder="年龄" onChange={()=>changeMessage("age")}/>
        <select ref={refs.gender} defaultValue={person.gender} onChange={()=>changeMessage("gender")}>
          <option value={0}>女</option>
          <option value={1}>男</option>
        </select>
        <button onClick={addperson}>添加</button>
      </div>
      <div className="classContain">
        {
          
          myPersonList.map((item,index)=>{
            return (
              <div key={index}>
                <div>姓名：{item.name}</div>
                <div>性别：{gender[item.gender]}</div>
                <div>年龄：{item.age}</div>
                <button onClick={()=>deletePerson(index)}>删除</button>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default App;
