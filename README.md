## `Ts`学习笔记

> 记录自己学习`ts`的笔记，以便日后翻阅。

### 所属环境

```js
/*
    安装node版本= =，
    然后在cmd中执行npm install -g typescript
    //全局安装ts
    新建ts文件，放入代码执行tsc [文件名].ts，发现生成[文件名].js文件，再在cmd上输入node [文件名].js执行。
    但是我不想生成js文件
    在cmd中执行npm install -g ts-node
    再次输入ts-node [文件名].ts
    这次就直接运行了
*/
```

### 配置文件

> 通过在根目录下配置`tsconfig.json`文件可以根据`json`文件内容开启响应的语法检查或者文件编译目录。

#### `include`

**指定哪些`ts`文件需要被编译**

```json
//一个*表示任意文件，**表示任意文件夹，我写的是当前目录下所有文件夹下的所有文件。
{
    "include": [
    	"./**/*"
    ],
}
```

#### `exclude`

**指定不需要被编译的文件目录**

```json
"exclude":[
    "Basic-types.ts",
    './dist/*'
]
//可以指定文件或者文件夹，指定好之后不会被编译成js文件
```

#### `extends`

**继承其他`ts`配置文件。**

> 可以抽取出公共的`json`部分，然后继承公共`json`，有点像`webpack`抽取公共配置。

`files`

**只有编译比较少的ts文件会用到，跟include相似。**

```json
{
    "files":[
        "Basic-types.ts"
    ]
}
```

#### `compilerOptions`

**编译器配置选项**

```json
//仅仅举例几项
{
     "compilerOptions": {
       // target:用来指定ts被编译的ES的版本,'es3', 'es5', 'es6', 'es2015', 'es2016', 'es2017', 'es2018', 'es2019', 'es2020', 'esnext'.
        "target": "ES6",
        // 指定要使用的模块化的规范,可选值为'none', 'commonjs', 'amd', 'system', 'umd', 'es6', 'es2015', 'es2020', 'esnext'.
        "module": "es6",
        /*
         lib用来指定项目中使用的库。默认值 针对于--target ES5：DOM，ES5，ScriptHost。针对于--target ES6：DOM，ES6，DOM.Iterable，ScriptHost
          "lib":["dom"],
        */
        //指定编译后文件所在的目录。
        "outDir": "./dist",
        /*
            代码合并为一个文件。
            但是有模块化的东西的话，module必须为system或者amd
        */
        // "outFile": "./app.js"
        //  allowJs，有些模块在当前include目录中是以js存在的，allowJs为true的话就是可以把js也给编译过去。
        "allowJs": false,
        // 检查include目录中js是不是符合规范。
        "checkJs": false,
        // 编译生成文件删除注释
        "removeComments": true,
        // 不生成编译后的文件
        "noEmit": false,
        // 编译错误后就不会成文件，只有编译没有问题才会生成编译后的文件
        "noEmitOnError": true,
        // 设置编译后的文件是不是严格模式，"use strict";注意在模块化的情况下 自动进入严格模式
        "alwaysStrict": true,
        // 不允许出隐式的any类型,如果在定义变量的时候没有定义类型，则ts自动判断为any，开启这个不允许上述写法出现。
        "noImplicitAny": true,
        // 不允许不明确类型的this。在声明函数的时候打印或者使用this，但是this指向不确定，你并不知道是谁调用的函数，开启这个不允许上述写法出现。
        "noImplicitThis":true,
        // 严格的检查空值。比如获取dom的时候，然后给dom绑定事件，但是有可能我的dom有可能拿不到，开启这个不允许上述写法出现。
        "strictNullChecks": false,
        //所有严格检查的总开关
        "strict": false
    },
}
```

#### 合在一起

```json
{
    "compilerOptions": {
        "target": "ES6",
        "module": "es6",
        "outDir": "./dist",
        "allowJs": false,
        "checkJs": false,
        "removeComments": true,
        "noEmit": false,
        "noEmitOnError": true,
        "alwaysStrict": true,
        "noImplicitAny": true,
        "noImplicitThis":true,
        "strictNullChecks": false,
        "strict": false
    },
    "include": [
        "./**/*"
    ],
    "exclude":[
        "Basic-types.ts"
    ]
}
```

> 这就是`tsconfig.json`文件的格式，其中`compilerOptions`还有很多其他设置，具体请看[这里](https://www.tslang.cn/docs/handbook/compiler-options.html)。

### 基本类型

| 类型                | 例子          | 描述                                                         |
| ------------------- | ------------- | ------------------------------------------------------------ |
| `number`            | 1, -2, 2.5    | 任意数字。                                                   |
| `string`            | ’haha‘        | 任意字符串。                                                 |
| `boolean`           | true, false   | 布尔值true或者false。                                        |
| `any`               | *             | 任意类型。                                                   |
| `unkonwn`           | *             | 类型相对安全的`any`。                                        |
| `void`              | 空值          | 它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 `void`。 |
| `never`             | 空值          | 永不存在的值的类型。                                         |
| `object`            | {name:'xixi'} | `object`表示非原始类型，也就是除`number`，`string`，`boolean`，`symbol`，`null`或`undefined`之外的类型。 |
| `array`             | [1,2,3,4,5]   | 任意`js`数组。                                               |
| `tuple`             | [4,5]         | 元组：固定长度的数组                                         |
| `enum`              | enum{A,B}     | 枚举：类型是对`js`标准数据类型的一个补充。 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。 |
| `null`、`undefined` | 空值          | `undefined`和`null`两者各自有自己的类型分别叫做`undefined`和`null`。 |

#### 1. `number`类型

```ts
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;
```

> 也可以直接用字变量赋值

```ts
let a : 10
a = 10
a = 11  //报错
//字变量赋值，一旦复制不能更改。
```

#### 2. `string`类型

```ts
let user:string = "xixi"
let word:string = `你好 ${user}`
//可以使用ES6的模板字符串。
```

#### 3. `boolean`类型

```ts
let flag:boolean = true
//就只能是true or false
```

#### 4. `any`类型

> 有时候在编程阶段并不知道返回的类型，比如引用第三方库的时候。这种情况下我们想跳过类型检查，这时候就可以使用`any`类型。

```ts
let notSure:any = 4
notSure = "is String"
notSure = false
```

> 如果你在定义变量的时候一开始并没有指定类型，你可以把鼠标一上去查看，这时候他自动判断为`any`类型。

#### 5.`unkonwn`类型

```ts
let notSure:unkown = 4
notSure = "is String"
notSure = false
```

> 我们可以发现，此时`unkown`和`any`给人的感觉是一样的，可以编译，也不用报错。但是真的一样吗？

```ts
//unknown 实际上是一个类型安全的any，并且不能直接赋值给其他变量。
let d:any
let s:string
let n:unknown
n = "Hello"
d = true
s = d //可以赋值
s = n //不可以赋值
```

> `any` 和 `unknown` 都是不确定类型，并且初始的时候都可以随便赋值，`but`，当一个类型为`any`的值去给别人赋值的时候会霍霍别人，比如上述例子`s`本来是`string`，但是现在有可能被弄成`boolean`,但是`unknown`不会这样。

#### 6. `void`类型

> 我忘记那个语言`void`表示无返回值的函数来着，在这里很像。

```ts
function warnUser(): void {
    console.log("This is my warning message");
}
//声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
let unusable: void = undefined;
```

#### 7. `never`类型

> 其实这里没有看懂。。。只是记住了几个应用场景。总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型。

```ts
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}
// 推断的返回值类型为never
function throwError(msg: string ) :never {
    throw new Error(msg)
}

throwError("some error")
console.log("!!!")  //Error: Unreachable code detected.ts(7027)
// 返回never的函数必须存在无法达到的终点
function listen() : never{
    while(true){
        let conn = server.accept()
    }
}

listen()
console.log("!!!")  //Error: Unreachable code detected.ts(7027)
```

#### 8. `object`类型

> `object`表示非原始类型，也就是除`number`，`string`，`boolean`，`symbol`，`null`或`undefined`之外的类型。

```ts
//所以这里写一个这个也是没有问题的
let object:object=[1,2,3,4,5]
/*
这里让我想起了typeof，在判断列表的时候会被判断成为object。
我习惯这么判断：
Object.prototype.toString.call([1,2,3])
输出："[object Array]"
*/
let person : {
    name:string,
    age?:number,
    [propName:string]:any
}
//属性名加问号 表示 可选属性
//propName随便写  写什么都行，表示字符串属性名:任意类型
```

> 其实我们更应该关注这个对象里面的值。

#### 9. `array`类型

```ts
// 在元素类型后面接上[]
let list : number[] = [1,2,3]
// 泛型
let list : Array<any> = [1,2,3,"hah"]
//不定长度数组,并且规定前面几项是什么
let list : [string,number,...any] = ['haha',12,12,12,123,12312,31]
```

#### 10. `enum`类型

> 枚举类型，很常用，表示状态的时候广泛使用。

```ts
//- 枚举数字
//  - 不赋值
    enum state {
        pendding,
        resolve,
        reject
    }
//不赋值的情况默认从0开始逐渐递增,从上到下的值为：0、1、2
//  - 赋第n个值
enum state {
    pedding = 10,
    resolve = 15,
    reject
}
//赋值的情况在最后一个赋值的开始递增,从上到下的值为：10,15,16
//  - 全赋值
//- 枚举字符串
enum state {
    pendding = "pendding",
    resolve = "resolve",
    reject = "reject"
}
```

#### 函数的定义

```ts
//一般的函数
function greeter(person:string):string {
    return `Hello ${person}`
}


//不确定有没有参数
//type为自定义类型
type myArrType = [string,number]
//可以先规定形式
type func = (name:string,age?:number) => void
let arr:myArrType = ["haha",12]

let unknownFuction:func = (...params:Array<string | number>) =>{
    console.log(...params);
}
unknownFuction(...arr) 

//不知道参数有多少个
//这里可以结合数组的不确定数组长度的写法
type func = (...params:number[]) => void
let param:Array<number> = [1,2,3,4] 
let change:func = (...params:Array<number>):void=>{
    console.log(...params);
}
change()

//不定参数加不知道参数有几个
type func = (name:string,age?:number,...param:any) => void
//这里可以结合数组的不确定数组长度的写法
let arr2 : [string,number,...any] = ['haha',12,12,12,123,12312,31]
let unknownFuction:func = (...params:[string,number?,...any]) =>{
    console.log(...params);
}

unknownFuction(...arr2) 
```

#### 断言类型

> 适用于 我并不知道这个东西是什么类型，那我就先确定他是某个类型。注意：声明时不要赋初值，因为一旦赋初值就你就是在一开始的时候知道了他是什么类型。

```ts
//尖括号写法
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
//as写法
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
//当你在TypeScript里使用JSX时，只有 as语法断言是被允许的。
```

**例子**

```ts
let someValue: number | string;
let strLength = function (val) : number {
    // return (<string>val).length ? (<string>val).length : val;
    return (val as string).length ? val.length : val
}
console.log(strLength(123));
```

**为什么说`unknown`相对安全与`any`**

```ts
let s:string, n:unknown = 123
s = <string>n
console.log(s);
//你会发现还是会打印123，并且被赋值到s上，所以注意一下。
```

### `React`与`TS`的`ToDoList`

#### 1. 搭建带有`TS`的`react`项目

```tsx
/*
1.在cmd中输入,使用TypeScript启动新的create-react-app项目
create-react-app project-name  --typescript

2.进入项目内。
cd project-name

3.要将 TypeScript 添加到 Create React App 项目，请先安装它
yarn add typescript @types/node @types/react @types/react-dom @types/jest

//项目目录
--public
--src
  --App.css
  --App.js
  --App.test.js
  --index.js
  --logo.svg
  --reportWebVitals.js
  --setupTests.js
--package.json
*/
//把除了index.js的其他文件全都删除，index.js文件修改后缀名为index.tsx,内容修改为：
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <React.StrictMode>
    <div>123</div>
  </React.StrictMode>,
  document.getElementById('root')
);
/*
4.执行yarn start命令启动项目
在这里我报了一个错误。

There might be a problem with the project dependency tree.
It is likely not a bug in Create React App, but something you need to fix locally.

5.在根目录下创建.env文件，写入内容。如果没有报上述错误请忽略这一步。
SKIP_PREFLIGHT_CHECK=true
*/
```

> 关于上述`bug`的解决方法[原文地址](https://blog.csdn.net/l1090865/article/details/107848756)。

##### 1.1 关于[React.StrictMode](https://react.html.cn/docs/strict-mode.html)

**StrictMode目前有助于：**

- 识别具有不安全生命周期的组件
- 有关旧式字符串ref用法的警告
- 关于已弃用的findDOMNode用法的警告
- 检测意外的副作用
- 检测遗留 context API

> 上述帮助都在标题连接里面直接找到。

**开启严格模式后的问题**


> 严格模式下会在开发环境中调用两次`setState`。地址[传送门](https://blog.csdn.net/qq_45743738/article/details/106624233)。

```tsx
//所以还是注释掉比较好
//注释后的index.tsx
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  // <React.StrictMode>
    <div>123</div>,
  // </React.StrictMode>,
  document.getElementById('root')
);
```

##### 1.2 关于`react-app-env.d.ts`文件

> 在`yarn start`命令之后会在`src`目录下生成此文件，文件中的内容如下：关于相关解释可以参考[react-app-env.d.ts的作用](https://segmentfault.com/a/1190000038874526)、[官网声明文件的介绍](https://www.tslang.cn/docs/handbook/declaration-files/library-structures.html#preventing-name-conflicts)和[声明文件的介绍和写法](https://ts.xcatliu.com/basics/declaration-files.html)。

```ts
/// <reference types="react-scripts" />
/*
	我们知道以.d.ts文件结尾的文件是声明文件：
	当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能。
	
	你可以理解为，当我们有一些公共的方法，可以写在global.ts or global.js文件中，然后引入使用方法。当然我们也可以在全局文件上定义 数据类型 或者 函数类型，然后在其他的tsx文件 or ts文件中引入类型定义，这样避免了重复定义变量类型的冗长代码，并且对于公共的类型可以省去重复定义的问题。那么这个全局文件就是.d.ts结尾的文件。
*/
```

#### 2. 创建公共数据，使用`context`

##### 2.1 声明`context`文件

```tsx
//新建context.tsx
import React from "react";
import {person} from 'test';

//这里的objType就可以定义到.d.ts文件中去。
type objType = {
    personList:person[],
    [name:string]:any
}

let obj:objType = {
    personList:[],
}
let Context = React.createContext(obj)

export default Context
```

##### 2.2在`index.tsx`中引入

```tsx
//index.tsx文件
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import Context from "./compoments/context";

import { myClass } from "test";
//这一条的详细解释在2.2.1

let shareObj:myClass = {
  personList:[],
  addPerson:(personList,person)=>{
   	personList = [...personList,person] 
  },
  deletePerson:(personList,index)=>{
    personList.splice(index,1)
    alert("删除成功")
  },
  changePerson:(oldPerson,person)=>{
    oldPerson = person
    alert("删除成功")
  }
}
//把鼠标移入addPerson、deletePerson、changePerson中的任意参数，会发现类型跟test.d.ts文件中myClass接口定义的四个函数的类型相同。


//Context.Provider解释在2.2.2中
ReactDOM.render(
  <Context.Provider value={shareObj}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);
```

###### 2.2.1关于引入`test`

> 刚才说过有一个`.d.ts`文件，可以定义全局变量，当然我们可以自定义文件。

```tsx
//使用模块化定义text.d.ts文件，上文中的import { myClass } from "test";中的test跟文件名没有关系！跟module后面的 "字符串" 有关系!
declare module 'test' {
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
    //这里就是跟上文创建的shareObj相互呼应
    export interface myClass {
        personList:person[],
        addPerson:(personList:person[],person:person)=>void,
        deletePerson:(personList:person[],index:number)=>void,
        changePerson:(oldPerson:person,person:person) => void
    }
    export type func = (...any) => void
}
//这里我们就可以看出，我们可以定义公共的interface，公共的type来约束其他tsx文件中定义的 数据 或者 方法。
```

###### 2.2.2 `Context.Provider`问题

> 你可能会纳闷，为什么我在`context.tsx`文件中定义了默认值，为什么还要在`index.tsx`中定义那？这个问题简单说一下就是，如果你只是 <Context.Provider>，会引入`context.tsx`的默认值。如果你是 <Context.Provider value={shareObj}> 则会引入你在`index.tsx`中定义的`shareObj`。详情请看[这里](https://blog.csdn.net/weixin_43934644/article/details/106905076)。

#### 3. 创建`app.tsx`文件

```tsx
import React , { FC,useRef,useState,useContext } from "react";
import Context from "./compoments/Context";
import { person,objType} from 'test';

const App:FC = () => {
  let context = useContext(Context)
//这里的context打印的就是index.tsx中的shareObj
  const refs:objType = {
    name:useRef<HTMLInputElement | null>(null),
    age:useRef<HTMLInputElement | null>(null),
    gender:useRef<HTMLSelectElement | null>(null)
  }

  let [person,setPerson] = useState<person>({
    name:'',
    age:0,
    gender:1,
  })

  let changeMessage = (key:string):void => {
    console.log(refs[key].current.value)
  }
//只要两个input或者一个select改变，触发changeMessage函数。
  return (
    <>
      <div>
        <input ref={refs.name} type="text" placeholder="请输入姓名" onChange={()=>changeMessage("name")} />
        <input ref={refs.age} defaultValue={person.age} type="number" min={0} max={100} placeholder="年龄" onChange={()=>changeMessage("age")}/>
        <select ref={refs.gender} defaultValue={person.gender} onChange={()=>changeMessage("gender")}>
          <option value={0}>女</option>
          <option value={1}>男</option>
        </select>
        <button onClick={() =>console.log(123)}>添加</button>
      </div>
      <div className="classContain">
      </div>
    </>
  )
}

export default App;
```

> 关于`react`的`Hooks`的学习请看[这里](https://blog.csdn.net/weixin_43934644/article/details/107666422)或者[官网](https://zh-hans.reactjs.org/docs/hooks-intro.html)。有关[useState使用ts类型](http://www.zhaima.tech/post/usestate%E4%BD%BF%E7%94%A8typescript%E7%B1%BB%E5%9E%8B)。有关`react`中事件传参请百度搜索函数柯里化。
>
> 但是这样不够好，如果我们有很多方法的话，都会积压在`App`一个函数中。于是想把他提取出来。

##### 3.1 修改`app.tsx`文件。

```tsx
//第一次修改
import React , { FC,useRef,useState,useContext } from "react";
import Context from "./compoments/Context";
import { person,objType} from 'test';


const change = (...arg:[string,objType,person,any]):void=>{
  let [key,refs,person,setPerson] = arg
  console.log('====================================');
  console.log(refs[key].current.value);
  console.log('====================================');
}

const initPerson:person = {
  name:'',
  age:undefined,
  gender:1,
}

const App:FC = () => {
  let context = useContext(Context)

  const refs:objType = {
    name:useRef<HTMLInputElement | null>(null),
    age:useRef<HTMLInputElement | null>(null),
    gender:useRef<HTMLSelectElement | null>(null)
  }
  let [person,setPerson] = useState<person>({...initPerson})

  let changeMessage = (key:string):void => {
    change(key,refs,person,setPerson)
  }

  return (
    <>
      //这里不想吧dom写进去，太长了。
      //就把上面的内容复制到这里就好了
    </>
  )
}

export default App;
```

> 但是这样还是不够好，因为是在`input`中的修改，所以如果在实际开发中调用接口的话，会频繁的调用接口，于是我们需要一个[防抖](https://blog.csdn.net/weixin_43934644/article/details/109206438)函数。

###### 3.1.1 拓展： `ts`的`debounce`函数简单实现

```ts
const debounce = (fn:Function,time:number):Function => {
    let timer:number | undefined
    return function (...args:any) {
        if(timer)
            clearTimeout(timer)
        timer = window.setTimeout(()=>fn(...args), time);
    }
}
//这里应该不涉及到this指向的问题
```

###### 3.1.2 拓展：`app.tsx`文件引入`debounce`函数。

```tsx
//仅仅是changePerson函数改变了，其他的没有改写
const changePerson = debounce((...arg:[string,objType,person,any]):void =>{
  let [key,refs,person,setPerson] = arg
  if(key in refs){
    let template:objType = {}
     //因为他的值是字符串  我不会搞数字。。。所以这里有个快速转换成数字的方法
    key!== 'name' ? template[key] = ~~refs[key].current.value :  template[key] = refs[key].current.value
    setPerson(Object.assign({},person,template))
    console.log('====================================');
    console.log(person);
    console.log('====================================');
  }
},1000)
//这样你就会发现在你停止输入的1s后会打印person对象。
```

> 但是并不适用于我们现在的场景  所以，可以不用写这里，因为如果有`debounce`函数的话，在添加的时候有可能`person`没有修改完，导致放入到`personList`的数据有问题，所以我们这里还是使用`3.1`版本的。

##### 3.2 添加`person`

```tsx
/*
	修改的地方：
	①：增添枚举gender ，用来在添加person的时候判断 0 ，1数字的性别。
	②：在添加按钮绑定addperson事件。用来添加人员并且重置数据，具体请看addperson中的注释。
	③：在ReactDom中循环生成人员信息列表。
*/

//①
enum gender {
  "女",
  "男"
}

const App:FC = () => {
  //②
  const addperson:func = ()=>{
    //调用shareObj的addPerson方法，添加人员。
    addPerson(personList,person)
    //修改本地的myPersonList
    setPersonList([...myPersonList,{...person}])
    
    //重置person
    setPerson({...initPerson})
    //setPerson是个异步方法，所以修改之后下面的person不会立马调用

    //重置输入框的值
    //这个知识点会在3.2.2去讲
    let key:keyof typeof person
    for(key in person){
      key === "name" ? refs[key].current.value = `${initPerson[key]}` : refs[key].current.value = initPerson[key]
    }
  }

  return (
    <>
      <div>
        //跟上面一样
        <button onClick={addperson}>添加</button>
      </div>
      <div className="classContain">
        {
         //③
          myPersonList.map((item,index)=>{
            return (
              <div key={index}>
                <div>姓名：{item.name}</div>
                <div>性别：{gender[item.gender]}</div>
                <div>年龄：{item.age}</div>
                <button>删除</button>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default App;
```

> 在写添加的时候有几个步骤需要说明一下：

###### 3.2.1 关于为什么还要定义`myPersonList`的原因。

> - 首先我们可以看到我使用的是Context来做的数据存储：它并不像vue中的vuex或者inject。
> - 他只是用来存储数据，他的改变并不能影响视图改变。使用useEffect监听一下就会发现只执行一次而已。
> - 所以我们需要使用useState来创建自己的列表，去进行增删改查，这样才会更改视图。
> - 但是我们并不能完全不管context中的personList,假如其他组件中也用到了personList，他的数据如果不改变，那将永远是初始值。

###### 3.2.2 关于你[`keyof`和`typeof`](https://blog.csdn.net/GoldenLegs/article/details/112966081)

```tsx
//大家可能对于typeof不陌生
typeof 123  //number
//我把上述的代码单独拿下来
//定义person接口
interface person {
    name:string,
    age:number | undefined,
    gender:0 | 1,
}
//创建person类型的initPerson
const initPerson:person = {
  name:'',
  age:undefined,
  gender:1,
}
//创建person数据，并且初始值是initPerson
let [person,setPerson] = useState<person>({...initPerson})
//所以这里的type person对象 = person类


//keyof
type keyType = keyof Person;  //输出类型，只能是name | age | gender,
/*
	为什么用这个：
	我们的for循环中需要遍历person类，但是定义的key有可能不在Object.keys(person)中，会报：元素隐式具有 “any“ 类型，因为类型为 “any“ 的表达式不能用于索引类型 “{ xxx: xxx； }“。这个错误。
*/
```

> 当然你也可以当成一个公共方法。

```tsx
export function isValidKey(key: string | number | symbol , object: object): key is keyof typeof object {
  return key in object;
}
```

##### 3.3 删除`person`

```tsx
//说完添加  删除就比较好说了：在每一个生成信息的button上绑定deletePerson事件。
const deletePerson:func = (index)=>{
    myPersonList.splice(index,1)
    setPersonList([...myPersonList])
    deletePersonContext(personList,index)
}
```

##### 3.4 最终的`app.tsx`文件

```tsx
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
//删除指定person
  const deletePerson:func = (index)=>{
    myPersonList.splice(index,1)
    setPersonList([...myPersonList])
   	//删除context中的personList指定的person
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
```