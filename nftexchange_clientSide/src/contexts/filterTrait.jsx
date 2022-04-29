import { createContext } from "react";
import { useState } from "react";
const qs = require("qs");

export const filterContext = createContext({
  filterString: "",
  makeFilterString: () => {},
});

export const filterContextProvider = ({ children }) => {
  const [filterString, setFilterString] = useState("");

  const makeFilterString = (filterObj) => {
    const filteredStr = qs.stringify(filterObj);
    //manipulate  and ge tresult
    setFilterString(filteredStr);
  };

  return (
    <filterContext.Provider value={{ filterString, makeFilterString }}>
      {children}
    </filterContext.Provider>
  );
};
