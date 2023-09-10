import React from "react";
import Column from "./Column";

function App() {
  
  return (
    <div className="container">
        <Column status="Applied" />
        <Column status="Accepted" />
        <Column status="Rejected" />
    </div>
  );
}

export default App;
