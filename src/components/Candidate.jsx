import React from "react";
import Field from "./Field";

function Candidate({num, time, layout, gender}){
    let val1 = time+" minutes ago";
    let val2 = layout+" layout";
    return(
        <div className="card">
            <h4>Candidate {num}</h4>
            <div className="fields">
                <Field text = {val1}/>
                <Field text = {val2}/>
                <Field text = {gender}/>
            </div>
        </div>
    );
}

export default Candidate;