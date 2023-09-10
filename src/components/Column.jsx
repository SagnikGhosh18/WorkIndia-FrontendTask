import React from "react";
import Candidate from "./Candidate";


function Column({status, items}){
    return(
        <div className="column">
            <h2>{status}</h2>
            <div>
                <Candidate items={items}/>
            </div>
        </div>
    )
};


export default Column;