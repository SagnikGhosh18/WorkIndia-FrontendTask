import React from "react";

function Field({text}){
    return(
        <div className="field">
            <p>
                <img src={require("../Images/18x18.png")} alt="check"/>
                <span>{text}</span>
            </p>
        </div>
    )
};

export default Field;