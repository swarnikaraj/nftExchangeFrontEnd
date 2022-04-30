import { useContext, useEffect, useState } from "react";
import { contractContext } from "../../contexts/contractsContext";
import { SearchResult } from "./searchResult";
<<<<<<< Updated upstream
import { NftContextProvider } from "../../contexts/contractsContext";
=======
import { v4 as uuidv4 } from "uuid";
>>>>>>> Stashed changes

export const Searchbox = () => {
  const [text, setText] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [result, setResult] = useState([]);
  let data;

  const { contractAddress, addContractAddress } = useContext(contractContext);

  useEffect(() => {
    searchNft(text);
  }, [text]);

  const handleChange = ({ target: { value } }) => {
    setText(value);
    value.length < 3 ? setIsOpen(false) : setIsOpen(true);
  };

  async function searchNft(text) {
    if (text.length < 3) {
      return;
    }
<<<<<<< Updated upstream
    getdata(text);
  }, [text]);

  async function getdata(text) {
=======

>>>>>>> Stashed changes
    try {
      const res = await fetch(
        `http://127.0.0.1:1234/contract/byAddress/${text}`
      );
      data = await res.json();
      setHasres(true);

      data = JSON.parse(JSON.stringify(data));
      console.log(data.contract[0].address);
      setResult(data.contract);
<<<<<<< Updated upstream
      addContractAddress(data.contract[0].address);
=======
      console.log(data);
>>>>>>> Stashed changes
      console.log(result, "resuklt hu main");
    } catch (err) {
      console.log(err);
    }
  }

<<<<<<< Updated upstream
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
=======
  function viewContract(address) {
    console.log(contractAddress, "mai save ho gya");
  }

  return (
    <>
      <div className="w-1/3 border">
        <div className="w-full ">
          <input
            placeholder="Search Items, collections and accounts"
            type="text"
            onChange={handleChange}
            id="searchbox"
            value={text}
            className="border border-gray-600 bg-gray-100 pt-2 pb-2 pl-4 pr-4"
          />
        </div>

        {isOpen && (
          <div className="border bg-white min-h-80 fixed rounded box-shadow overflow-auto  w-1/3 px-8 py-8">
            {result.map(({ _id, totalSupply, name, address }) => (
              <div
                className="flex border px-2 py-2 w-full"
                onClick={() => {
                  addContractAddress(address);
                }}
                key={uuidv4()}
              >
                <img
                  className="object-cover h-8 w-8 rounded-full"
                  src="https://cdn3.vectorstock.com/i/1000x1000/35/52/placeholder-rgb-color-icon-vector-32173552.jpg"
                />
                <div>{name}</div>
              </div>
            ))}
          </div>
        )}
      </div>
>>>>>>> Stashed changes
    </>
  );
};
