import { createContext, useEffect, useContext } from "react";
import { useState, useRef } from "react";
import { contractContext } from "./contractsContext";
const qs = require("qs");

export const filterContext = createContext({
  filterString: "",
  updateFilterString: () => {},
  filterStrRef: { current: "" },
});

export const FilterContextProvider = ({ children }) => {
  const { contractAddress } = useContext(contractContext);
  
  const [filterString, setFilterString] = useState("");
  

  const updateFilterString = (filterstr) => {
    setFilterString(filterstr)
  };

  

  return (
    <filterContext.Provider
      value={{ filterString, updateFilterString }}
    >
      {children}
    </filterContext.Provider>
  );
};
