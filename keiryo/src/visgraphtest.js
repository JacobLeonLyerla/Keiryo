import React from "react";
import './App.css';

import { VictoryBar, VictoryChart, VictoryAxis,
    VictoryTheme, VictoryTooltip } from 'victory';
//     const data = [
//     {quarter: 1, earnings: 113000},
//     {quarter: 2, earnings: 16500},
//     {quarter: 3, earnings: 14250},
//     {quarter: 4, earnings: 19000,},
//   ];

function VisTestGraph() {
  return (
    <div className="App">
      
      <VictoryChart
          

        // adding the material theme provided with Victory
        theme={VictoryTheme.material}
        domainPadding={20}
      >
        <VictoryAxis
          tickValues={[1, 2, 3, 4]}
          tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(x) => (`$${x / 1000}k`)}
        />
        <VictoryBar
                  labelComponent={<VictoryTooltip/>}

            data={[
                {quarter: 1, earnings: 113000,label:"quarter 1"},
                   {quarter: 2, earnings: 16500},
                    {quarter: 3, earnings: 14250},
                 {quarter: 4, earnings: 19000,},
              ]}
        
          x="quarter"
          y="earnings"
        />
      </VictoryChart>
    </div>
  );
}

export default VisTestGraph;
