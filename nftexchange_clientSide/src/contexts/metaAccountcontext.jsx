import { createContext } from "react";
import { useState } from "react";

export const metaAccountContext = createContext({
  metaAddress: "",
  addMetaAddress: () => {},
});

export const MetaAccountContextProvider = ({ children }) => {
  const [metaAddress, setMetaAddress] = useState("");

  const addMetaAddress = (address) => {
    console.log("mai meta address context me ja rha", address);
    setMetaAddress(address);
  };

  return (
    <metaAccountContext.Provider value={{ metaAddress, addMetaAddress }}>
      {children}
    </metaAccountContext.Provider>
  );
};
