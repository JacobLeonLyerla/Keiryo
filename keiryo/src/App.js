import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import AppContext from "./context";
import VisTestGraph from "./visgraphtest";

// let data=[
//   { quarter: 1, earnings: 113000, label: "quarter 1" },
//   { quarter: 2, earnings: 16500 },
//   { quarter: 3, earnings: 14250 },
//   { quarter: 4, earnings: 19000 }
// ]

const App = () => {
  const {example, setExample } = useContext(AppContext);
  const [body, setBody] = useState({
    date: "",
    weight: "",
  });

useEffect(()=>{
  console.log(example)
})

  const handleChange = (e) => {
    setBody({...body,  [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log(body,example)
    e.preventDefault();
    example.push(body)
    setExample(example);
  };
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <label htmlFor="example">Date</label>
          <br />
          <input
            type="text"
            name="date"
            value={body.date}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="example">Weight</label> <br />
          <input
            type="text"
            name="weight"
            value={body.weight}
            onChange={handleChange}
          />
          <br />
          <button>Submit</button>
        </form>

        {/* <VisTestGraph/> */}
      </header>
    </div>
  );
};

export default App;
