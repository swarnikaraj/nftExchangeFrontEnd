import { useEffect, useState } from "react";

export const Account = () => {
  const address = JSON.parse(localStorage.getItem("userAccounts"));
  const [userTrait, setUserTrait] = useState({});

  useEffect(() => {
    if (address) {
      fetch(`http://localhost:1234/profile/${address}`)
        .then((res) => res.json())
        .then((res) => {
          setUserTrait(res);

          console.log(userTrait);
        });
    }
  }, [address]);

  return (
    <>
      <h1>I am account Page</h1>
    </>
  );
};
