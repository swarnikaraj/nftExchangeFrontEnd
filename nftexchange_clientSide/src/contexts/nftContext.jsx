

import { createContext } from "react";
import { useState } from "react";

export const nftContext=createContext({nfts:[],addnfts:()=>{}});

export const nftContextProvider=({children})=>{
   const [nfts,setNfts]=useState([]);

   const addnfts=(nft)=>{
       setNfts(nft)
   }

    return <nftContext.Provider value={{nfts,addnfts}}>{children}</nftContext.Provider>
}