import React from "react";
import Column from "./Column";
import data from "../Items/items";

function App() {
  
  return (
    <div className="container">
        <Column status="Applied" items={data.filter(item => item.status==="Applied" )} />
        <Column status="Accepted" items={data.filter(item => item.status==="Accepted" )} />
        <Column status="Rejected" items={data.filter(item => item.status==="Rejected" )} />
    </div>
  );
}

export default App;
