import { createContext } from "react";
import { useState } from "react";

export const singleNftContext = createContext({
   nft:{},
  addNft: () => {},
});

export const SingleNftContextProvider = ({ children }) => {
  const [nft, setNft] = useState({});

  const addNft = (obj) => {
    console.log("mai to bs single nft hu",obj);
    setNft(obj)
  };

 

  return (
    <singleNftContext.Provider value={{ nft, addNft}}>
      {children}
    </singleNftContext.Provider>
  );
};
