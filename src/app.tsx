import React , { FC } from "react";
// import { Switch ,Route ,Redirect ,withRouter} from "react-router-dom";
import { Switch   ,withRouter} from "react-router-dom";
/* 
//views
import Tool from "./views/Tool";
import Login from "./views/Login";
import Register from "./views/Register";

//compoments
import Todolist from "./compoments/Todolist";
import Children from "./compoments/Children"; 
*/

import { router , generateRoute } from "./routes/index";

/* 
let App:FC = () => {
  return (
    <Switch>
      <Route path='/login' render={()=><Login />}></Route>
      <Route path='/register' render={()=><Register />} ></Route>
      <>
        <Route path='/'>
          <Tool meg={123}>
            <Route path='/todolist' render={()=><Todolist />} ></Route>
            <Route path='/children' render={()=><Children />} ></Route>
          </Tool>
        </Route>
      </>
      <Redirect path='/*' to='/'></Redirect>
    </Switch>
  )
}  
*/


let App:FC = () => {
  return (
    <Switch>
      {
        router.map((route) =>{
          return generateRoute(route)
        })
      }
    </Switch>
  )
}

export default withRouter(App);
