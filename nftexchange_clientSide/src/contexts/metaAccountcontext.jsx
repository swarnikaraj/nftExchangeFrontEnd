import { createContext } from "react";
import { useState, useEffect } from "react";
import { ethers } from "ethers";

export const metaAccountContext = createContext({
  metaAddress: [],
  addMetaAddress: () => {},
});

const { ethereum } = window;

export const MetaAccountContextProvider = ({ children }) => {
  const [metaAddress, setMetaAddress] = useState([]);

  const addMetaAddress = (address) => {
    console.log("mai meta address context me ja rha", address);
    localStorage.setItem("userAccounts", JSON.stringify(address));
    setMetaAddress(JSON.parse(localStorage.getItem("userAccounts")));
    
  };

  return (
    <metaAccountContext.Provider
      value={{
        metaAddress,
        addMetaAddress,
      }}
    >
      {children}
    </metaAccountContext.Provider>
  );
};
