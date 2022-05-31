import { useEffect, useState, useContext } from "react";
import { metaAccountContext } from "../../contexts/metaAccountcontext";

export const Account = () => {
  const [userTrait, setUserTrait] = useState({});
  const { metaAddress, addMetaAddress } = useContext(metaAccountContext);
  useEffect(() => {
    if (metaAddress) {
      fetch(`http://localhost:1234/profile/${metaAddress}`)
        .then((res) => res.json())
        .then((res) => {
          setUserTrait(res);

          console.log(res);
        });
    }
  }, [metaAddress]);

  return (
    <>
      <h1>I am account Page</h1>
    </>
  );
};
