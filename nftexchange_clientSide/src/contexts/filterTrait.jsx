import { createContext } from "react";
import { useState } from "react";
const qs = require("qs");

export const filterContext = createContext({
  filterString: "",
  makeFilterString: () => {},
});

export const FilterContextProvider = ({ children }) => {
  const [filterString, setFilterString] = useState("");

  const makeFilterString = (filterObj) => {
    console.log(filterObj);
    const filteredStr = qs.stringify(filterObj, { encode: false });
    setFilterString(filteredStr);
  };

  return (
    <filterContext.Provider value={{ filterString, makeFilterString }}>
      {children}
    </filterContext.Provider>
  );
};
