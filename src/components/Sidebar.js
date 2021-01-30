import React from 'react'
import "../App.css";
import  {SidebarData} from "./SidebarData"

function Sidebar(){
    return(
        <div>
            <ul className="SidebarList">
                {SidebarData.map((val)=>{
                    return(
                        <li className="row">
                            <div id="icon">{val.icon}</div>
                            <div id="title">{val.title}</div>
                        </li>
                    )
                })
                }
            </ul>
        </div>
    )
}
export default Sidebar