import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import AppContext from "./context";
import BarGraph from "./testgraph";
import VisTestGraph from "./visgraphtest";

// let data=[
//   { quarter: 1, earnings: 113000, label: "quarter 1" },
//   { quarter: 2, earnings: 16500 },
//   { quarter: 3, earnings: 14250 },
//   { quarter: 4, earnings: 19000 }
// ]

const App = () => {
  const { example, setExample } = useContext(AppContext);
  const [formText, setFormText] = useState("");

  useEffect(() => {
    console.log("Context Here: ", example);
  }, [example]);

  const handleChange = (e) => {
    setFormText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setExample(formText);
  };
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <label htmlFor="example">Example:</label>
          <input type="text"  value={formText} onChange={handleChange} />
          <button>Submit</button>
        </form>

        {/* <VisTestGraph data={data}/> */}
      </header>
    </div>
  );
};

export default App;
