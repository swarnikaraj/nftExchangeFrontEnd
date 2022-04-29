import { useContext, useEffect, useState } from "react";
import { contractContext } from "../../contexts/contractsContext";
import { SearchResult } from "./searchResult";

export const Searchbox = () => {
  const [text, setText] = useState("");
  const [hasres, setHasres] = useState(false);
  const [result, setResult] = useState([]);

  const { addContractAddress } = useContext(contractContext);

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
      const data = await res.json();

      setResult(data.contract);

      console.log(result, "resuklt hu main");
      setHasres(true);
    } catch (err) {
      console.log(err);
    }
  }
  
  
  return (
    <>
      <input
        placeholder="Search Items, collections and accounts"
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
        className="border border-gray-600 bg-gray-100 w-3/6 pt-2 pb-2 pl-4 pr-4"
      />

      {hasres && <SearchResult props={result} />}
    </>
  );
};
