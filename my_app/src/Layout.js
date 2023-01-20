import React from "react"
import style from "./Layout.css"

import Card from "./Card.js"
import data from "./mockData.js"
/*import CardDetail from "./CardDetail.js"*/

const cardtemp = data.reverse()
const card = cardtemp.map(function(item){
    return(
        <Card
        
            title = {item.title}
            rollnum = {item.rollnum}
            size = {item.size}
            link = {item.link}
        />
    )
})

export default function Layout(){
    return(
      <div className ="flexcontainer">
            <div className ="sidebar">
                {card}
            </div>     
            <div className ="static" > 

            </div>
      </div>

 
    )
}