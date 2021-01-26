import React from "react";
import {person} from 'test';

type objType = {
    personList:person[],
    [name:string]:any
}

let obj:objType = {
    personList:[],
}
let Context = React.createContext(obj)

export default Context