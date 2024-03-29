import MetaMaskOnboarding from "@metamask/onboarding";
import React, { useEffect } from "react";
import { metaAccountContext } from "../../contexts/metaAccountcontext";
import { useContext } from "react";
const ONBOARD_TEXT = "Install MetaMask!";
const CONNECT_TEXT = "Connect";
const CONNECTED_TEXT = "Connected";

export function OnboardingButton() {
  
  const [buttonText, setButtonText] = React.useState(ONBOARD_TEXT);
  const { metaAddress, addMetaAddress } = useContext(metaAccountContext);

  const [isDisabled, setDisabled] = React.useState(false);
  const [accounts, setAccounts] = React.useState([]);
  const onboarding = React.useRef();

  function handleNewAccounts(newAccounts) {
    setAccounts(newAccounts);
  }

  if (onboarding.current) {
    window.ethereum.on("accountsChanged", handleNewAccounts);
  }
  React.useEffect(() => {
    if (!onboarding.current) {
      onboarding.current = new MetaMaskOnboarding();
    }

    checkIfWalletIsConnnected();
  }, []);

  // React.useEffect(() => {
  //   if (MetaMaskOnboarding.isMetaMaskInstalled()) {
  //     window.ethereum
  //       .request({ method: "eth_requestAccounts" })
  //       .then((newAccounts) => {
  //         setAccounts(accounts);
  //         onboarding.current.stopOnboarding();
  //       });
  //   }
  // }, []);

  const checkIfWalletIsConnnected = async () => {
    try {
      console.log("i am checkif wallet");
      if (MetaMaskOnboarding.isMetaMaskInstalled()) {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });

        if (accounts.length > 0) {
          setButtonText(CONNECTED_TEXT);
          setDisabled(true);
          addMetaAddress(accounts);
          onboarding.current.stopOnboarding();
        } else {
          addMetaAddress(accounts);
          setButtonText(CONNECT_TEXT);
          setDisabled(false);
        }
      }
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object");
    }
  };

  React.useEffect(() => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      if (accounts.length > 0) {
        setButtonText(CONNECTED_TEXT);
        setDisabled(true);
        addMetaAddress(accounts);
        onboarding.current.stopOnboarding();
      } else {
        addMetaAddress(accounts);
        setButtonText(CONNECT_TEXT);
        setDisabled(false);
      }
    }
  }, [accounts]);

  const onClick = () => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((newAccounts) => {
          setAccounts(newAccounts);
          console.log(accounts, "idsnsjd");
        });
    } else {
      onboarding.current.startOnboarding();
    }
  };

  return (
    <button disabled={isDisabled} onClick={onClick}>
      {buttonText}
    </button>
  );
}
