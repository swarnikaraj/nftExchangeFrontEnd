import { createContext } from "react";
import { useState } from "react";

export const profileContext = createContext({
   profile:{},
  addProfile: () => {},
});

export const ProfileContextProvider = ({ children }) => {
  const [profile, setProfile] = useState({});

  const addProfile = (obj) => {
    console.log("mai chl gya set hone profile ", obj);
    setProfile(obj)
  };

 

  return (
    <profileContext.Provider value={{ profile, addProfile }}>
      {children}
    </profileContext.Provider>
  );
};
