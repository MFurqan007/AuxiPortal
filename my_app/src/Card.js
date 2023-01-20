import React from "react"
import style from "./Card.css"
/*import CardDetail from "./CardDetail"
import redux from 'redux';
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import {ChangeState} from './Action_def.js'
*/
export default function Card(props){
    /*const flag = useSelector(state => state.flag); 
    const dispatch= useDispatch(); 
    
    function Handle_Click(){

        console.log("Check");
        dispatch(ChangeState(props));

    }*/

    return(
        <div className="Card_Main" >

             <p className= "Card_Title">{props.title}</p>
                <br></br>

                <div className= "Card_in">
                    <p className="Card_Detail">{props.rollnum}</p>
                    <p className="Card_TimeStamp">3:47 PM</p>

                </div>
        
        </div>
    )
}


            /*{flag? 
                <div className ="Card_Extend" >   
                    <CardDetail/>
                </div>
                : 
                null
            }*/