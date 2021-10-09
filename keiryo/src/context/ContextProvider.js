import React, { useState } from "react";
import AppContext from ".";

const ContextProvider = ({ children }) => {
  

  const [example, setExample] = useState([{date: 1, body: 113000},
    {date: 2, body: 16500},
    {date: 3, body: 14250},
    {date: 4, body: 19000,}],);
  
  const context = {
    setExample,
    example,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};
export default ContextProvider;
