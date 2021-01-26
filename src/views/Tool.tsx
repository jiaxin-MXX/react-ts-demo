import React, { FC,useEffect } from "react";
import { props } from "router";
import { useHistory  } from "react-router-dom";
const Tool:FC<props> = (props) => {
    const history = useHistory()
    useEffect(()=>{
        if(history.location.pathname === '/'){
            console.log(history.push('/todolist'));

        }
    },[history])
    
    return(
        <div>
            <h1>tool</h1>
            <div>
                {
                    props.children
                }
            </div>
            <footer>haha</footer>
        </div>
    )
}

export default Tool