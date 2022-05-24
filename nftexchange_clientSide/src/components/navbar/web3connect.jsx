import MetaMaskOnboarding from "@metamask/onboarding";
import React from "react";
import { useState, useEffect } from "react";
import { metaAccountContext } from "../../contexts/metaAccountcontext";
import { useContext } from "react";
export function OnboardingButton() {
  const ONBOARD_TEXT = "Click here to install MetaMask!";
  const CONNECT_TEXT = "Connect";
  const CONNECTED_TEXT = "Connected";

  
  const [buttonText, setButtonText] = React.useState(ONBOARD_TEXT);
  const [isDisabled, setDisabled] = React.useState(false);
  const [accounts, setAccounts] = React.useState([]);
  const [currentAccount, setCurrentAccount] = useState(false);
  const onboarding = React.useRef();

  const { metaAddress, addMetaAddress } = useContext(metaAccountContext);
  const handleNewAccounts = (newAccounts) => {
    setAccounts(newAccounts);
  };
  
  // window.ethereum.on("accountsChanged", handleNewAccounts);

  //   useEffect(() => {
  //     if (!onboarding.current) {
  //       onboarding.current = new MetaMaskOnboarding();
  //     }
  //   }, []);

    useEffect(() => {
   // if (MetaMaskOnboarding.isMetaMaskInstalled()) {
    //   if (accounts.length > 0) {
    //     setButtonText(CONNECTED_TEXT);
    //     setDisabled(true);
    //     onboarding.current.stopOnboarding();
    //   } else {
    //     setButtonText(CONNECT_TEXT);
    //     setDisabled(false);
    //   }
   // }
      console.log(accounts);
    }, [accounts]);

  //   useEffect(() => {
  //     console.log(accounts);
  //     function handleNewAccounts(newAccounts) {
  //       setAccounts(newAccounts);
  //     }

  //     if (MetaMaskOnboarding.isMetaMaskInstalled()) {
  //       window.ethereum
  //         .request({ method: "eth_requestAccounts" })
  //         .then(handleNewAccounts);

  //       window.ethereum.on("accountsChanged", handleNewAccounts);
  //       return () => {
  //         window.ethereum.removeListener("accountsChanged", handleNewAccounts);
  //       };
  //     }
  //   }, [accounts]);

  const onClick = () => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((newAccounts) => {
          setAccounts(newAccounts);
          console.log(accounts);
        });
    } else {
      onboarding.current.startOnboarding();
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={onClick}
        className="flex flex-row justify-center items-center
         my-5 bg-[#655D8A] p-3 rounded-full cursor-pointer hover:bg-[#7897AB]"
      >
        <p className="text-white text-base font-semibold">
          {accounts.length > 0 ? "Connected" : "Connect"}
        </p>
      </button>
    </>
  );
}
