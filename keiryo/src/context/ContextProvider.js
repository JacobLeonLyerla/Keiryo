import React, { useState } from "react";
import AppContext from ".";

const ContextProvider = ({ children }) => {
  

  const [example, setExample] = useState({date:null,weight:null});
  
  const context = {
    setExample,
    example,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};
export default ContextProvider;
