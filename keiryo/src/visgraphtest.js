import React,{useContext,useEffect} from "react";
import "./App.css";
import AppContext from "./context";

import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryTooltip,
} from "victory";
//     const data = [
//     {date: 1, body: 113000},
//     {date: 2, body: 16500},
//     {date: 3, body: 14250},
//     {date: 4, body: 19000,},
//   ];

function VisTestGraph() {
    const { example } = useContext(AppContext);

  useEffect(()=>{
    console.log(example)
  })
  
  return (
    <div className="App">
      <VictoryChart
        // adding the material theme provided with Victory
        theme={VictoryTheme.material}
        domainPadding={20}
      >
        <VictoryAxis
          tickValues={[1, 2, 3, 4]}
          tickFormat={["date 1", "date 2", "date 3", "date 4"]}
        />
        <VictoryAxis dependentAxis tickFormat={(x) => `$${x / 1000}k`} />
        <VictoryBar
          labelComponent={<VictoryTooltip />}
          data={example}
          x="date"
          y="weight"
        />
      </VictoryChart>
    </div>
  );
}

export default VisTestGraph;
