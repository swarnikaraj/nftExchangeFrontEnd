import { useContext, useEffect, useState } from "react";
import { contractContext } from "../../contexts/contractsContext";
import { SearchResult } from "./searchResult";
import { NftContextProvider } from "../../contexts/contractsContext";

export const Searchbox = () => {
  const [text, setText] = useState("");
  const [hasres, setHasres] = useState(false);
  const [result, setResult] = useState([]);
  let data;

  const { contractAddress, addContractAddress } = useContext(contractContext);

  useEffect(() => {
    if (text.length < 3) {
      return;
    }
    getdata(text);
  }, [text]);

  async function getdata(text) {
    try {
      const res = await fetch(
        `http://127.0.0.1:1234/contract/byAddress/${text}`
      );
      data = await res.json();
      setHasres(true);

      data = JSON.parse(JSON.stringify(data));
      console.log(data.contract[0].address);
      setResult(data.contract);
      addContractAddress(data.contract[0].address);
      console.log(result, "resuklt hu main");
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    console.log("41", contractAddress);
  }, [result]);

  return (
    <>
      <input
        placeholder="Search Items, collections and accounts"
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
        className="w-3/6 pt-2 pb-2 pl-4 pr-4 bg-gray-100 border border-gray-600"
      />
      {<SearchResult props={result} />}
    </>
  );
};
