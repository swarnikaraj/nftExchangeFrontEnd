import { createContext, useEffect, useContext } from "react";
import { useState, useRef } from "react";
import { contractContext } from "./contractsContext";
const qs = require("qs");

export const filterContext = createContext({
  filterString: "",
  makeFilterString: () => {},
  filterStrRef: { current: "" },
});

export const FilterContextProvider = ({ children }) => {
  const { contractAddress } = useContext(contractContext);
  const filterStrRef = useRef("");
  const [filterString, setFilterString] = useState({});
  const [arr, setArr] = useState([]);

  const makeFilterString = (filterObj) => {
    console.log(filterObj);
    const filteredStr = qs.stringify(filterObj, { encode: false });
    filterStrRef.current = filteredStr;

    console.log(filterStrRef, "mai ref se hu");
    // filterString.filts = filteredStr;
    // console.log("mai he hu", filteredStr);
    // console.log(contractAddress, "edhr hu bhai");

    // getarr(filteredStr, contractAddress);
  };

  async function getarr(filteredStr, contractAddress) {
    let url = `http://127.0.0.1:1234/nft/`;

    let urlFinal = filteredStr
      ? url + `${contractAddress}?${filterString.filts}`
      : url + `${contractAddress}`;
    const response = await fetch(urlFinal);
    const dta = await response.json();
    setArr(dta.nft);
    console.log(arr, "hguygbbjjnjn,njj");
    console.log(urlFinal, "mai context se aya hu");
  }

  return (
    <filterContext.Provider
      value={{ filterString, makeFilterString, filterStrRef }}
    >
      {children}
    </filterContext.Provider>
  );
};
