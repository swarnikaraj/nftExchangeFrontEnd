import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ContractContextProvider } from "./contexts/contractsContext";
import { FilterContextProvider } from "./contexts/filterTrait";
import {NftContextProvider} from './contexts/nftContext'
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContractContextProvider>
      <NftContextProvider>
        <FilterContextProvider>
        <BrowserRouter>
         <App />
      </BrowserRouter>
      </FilterContextProvider>
      </NftContextProvider>
    </ContractContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
