import React from 'react';
//引入routeObj类型
import { routeObj } from "router";
//引入react-router-dom
import { Route } from "react-router-dom";


import Tool from "../views/Tool";
import Login from "../views/Login";
import Register from "../views/Register";

import Todolist from "../compoments/Todolist";
import Children from "../compoments/Children";

export const router:Array<routeObj> = [
    {
        path:"/login",
        component:Login
    },
    {
        path:"/register",
        component:Register
    },
    {
        path:"/",
        component:Tool,
        redirect:'/todolist',
        children:[
            {
                path:"/todolist",
                component:Todolist 
            },
            {
                path:"/children",
                component:Children 
            }
        ]
    },
]


export const generateRoute = (param:routeObj) => {
    if(param.children){
        return(
            <React.Fragment key={param.path} >
                <Route path={param.path} >
                    <param.component>
                    {
                        param.children.map((item)=>{
                            return generateRoute(item)
                        })
                    }
                    </param.component>
                </Route>
            </React.Fragment>
        )
    }else{
        return  <Route key={param.path} path={param.path} component={param.component}></Route>
    }
}