import React from "react";
import './App.css';
import BarGraph from "./testgraph"
import VisTestGraph from "./visgraphtest";

let data=[
  { quarter: 1, earnings: 113000, label: "quarter 1" },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 }
]

function App() {
 
  return (
    <div className="App">
      <header className="App-header">
       <VisTestGraph data={data}/>
      
      </header>
    </div>
  );
}

export default App;
