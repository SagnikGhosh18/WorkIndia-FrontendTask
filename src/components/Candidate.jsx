import React from "react";
import Field from "./Field";

function Candidate({items}){
    return(
        <div>
            {items.map((item) => (
                <div className="card">
                    <h4>{item.name}</h4>
                    <div className="fields">
                        <Field text = {item.last_updated_at}/>
                        <Field text = {item.location}/>
                        <Field text = {item.gender}/>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Candidate;