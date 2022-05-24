import MetaMaskOnboarding from "@metamask/onboarding";
import React from "react";
import { metaAccountContext } from "../../contexts/metaAccountcontext";
import { useContext } from "react";
const ONBOARD_TEXT = "Install MetaMask!";
const CONNECT_TEXT = "Connect";
const CONNECTED_TEXT = "Connected";

export function OnboardingButton() {
  const address = JSON.parse(localStorage.getItem("userAccounts"));
  const [buttonText, setButtonText] = React.useState(ONBOARD_TEXT);
  const { metaAddress, addMetaAddress } = useContext(metaAccountContext);

  const [isDisabled, setDisabled] = React.useState(false);
  const [accounts, setAccounts] = React.useState([]);
  const onboarding = React.useRef();

  function handleNewAccounts(newAccounts) {
    setAccounts(newAccounts);
    localStorage.setItem("userAccounts", JSON.stringify(newAccounts));
    localStorage.setItem("state", CONNECTED_TEXT);
  }
  if (onboarding.current) {
    window.ethereum.on("accountsChanged", handleNewAccounts);
  }
  React.useEffect(() => {
    if (!onboarding.current) {
      onboarding.current = new MetaMaskOnboarding();
    }
  }, []);

  React.useEffect(() => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      if (accounts.length > 0) {
        localStorage.setItem("userAccounts", JSON.stringify(accounts));
        localStorage.setItem("state", CONNECTED_TEXT);

        setButtonText(localStorage.getItem("state"));
        setDisabled(true);
        addMetaAddress(JSON.parse(localStorage.getItem("userAccounts")));
        onboarding.current.stopOnboarding();
      } else {
        localStorage.setItem("state", CONNECT_TEXT);
        localStorage.setItem("userAccounts", null);
        addMetaAddress(JSON.parse(localStorage.getItem("userAccounts")));
        setButtonText(localStorage.getItem("state"));
        setDisabled(false);
      }
    }
  }, [accounts]);

  //   React.useEffect(() => {
  //     function handleNewAccounts(newAccounts) {
  //       setAccounts(newAccounts);
  //     }
  //     if (MetaMaskOnboarding.isMetaMaskInstalled()) {
  //       window.ethereum
  //         .request({ method: "eth_requestAccounts" })
  //         .then(handleNewAccounts);
  //       window.ethereum.on("accountsChanged", handleNewAccounts);
  //       return () => {
  //         window.ethereum.off("accountsChanged", handleNewAccounts);
  //       };
  //     }
  //   }, []);

  const onClick = () => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((newAccounts) => {
          setAccounts(newAccounts);
          localStorage.setItem("userAccounts", JSON.stringify(newAccounts));
          localStorage.setItem("state", CONNECTED_TEXT);
          setButtonText(localStorage.getItem("state"));
          addMetaAddress(localStorage.getItem("userAccounts"));
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
