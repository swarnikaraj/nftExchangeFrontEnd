import { createContext } from "react";
import { useState } from "react";

export const contractContext = createContext({ contractAddress: "", addContractAddress: () => {} });

export const NftContextProvider = ({ children }) => {
  const [contractAddress, setContractAddress] = useState("");

  const addContractAddress = (address) => {
    setContractAddress(address);
  };

  return (
    <contractContext.Provider value={{ contractAddress, addContractAddress }}>
      {children}
    </contractContext.Provider>
  );
};
