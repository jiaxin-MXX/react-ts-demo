import React from 'react';
import ReactDOM from 'react-dom';
import './assets/reset.css';
import App from './app';
import Context from "./compoments/Context";
import { myClass } from "test";

let shareObj:myClass = {
  personList:[],
  addPerson:(personList,person)=>{
    personList = [...personList,person] 
  },
  deletePerson:(personList,index)=>{
    personList.splice(index,1)
    console.log(personList)
  },
  changePerson:(oldPerson,person)=>{
    oldPerson = person
    console.log(oldPerson)
  }
}



ReactDOM.render(
  <Context.Provider value={shareObj}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);