import { createContext } from "react";
import { useState } from "react";

export const contractContext = createContext({
  contractAddress: "",
  addContractAddress: () => {},
});

export const ContractContextProvider = ({ children }) => {
  const [contractAddress, setContractAddress] = useState("");

  const addContractAddress = (address) => {
    console.log("mai chl gya", address);
    setContractAddress(address);
  };

 

  return (
    <contractContext.Provider value={{ contractAddress, addContractAddress }}>
      {children}
    </contractContext.Provider>
  );
};

