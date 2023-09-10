import React from "react";
import Candidate from "./Candidate";


function Column({status}){
    return(
        <div className="column">
            <h2>{status}</h2>
            <div>
                <Candidate num="1" layout="HSR" gender="Male" time="10" />
                <Candidate num="1" layout="HSR" gender="Male" time="10" />
                <Candidate num="1" layout="HSR" gender="Male" time="10" />
            </div>
        </div>
    )
};


export default Column;