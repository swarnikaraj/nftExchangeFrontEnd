import { useContext, useEffect, useState } from "react";
import { contractContext } from "../../contexts/contractsContext";
import { SearchResult } from "./searchResult";
import { NftContextProvider } from "../../contexts/contractsContext";

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
    try {
      const res = await fetch(
        `http://127.0.0.1:1234/contract/byAddress/${text}`
      );
      data = await res.json();

      data = JSON.parse(JSON.stringify(data));

      console.log(data.contract[0].address);
      setResult(data.contract);

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
      <div className="border w-3/6 ">
        <input
          placeholder="Search Items, collections and accounts"
          type="text"
          value={text}
          onChange={handleChange}
          className="w-full pt-2 pb-2 pl-4 pr-4 bg-gray-100 border border-gray-600"
        />

        {isOpen && (
          <div className=" shadow-zinc-700 sticky max-h-40 h-20">
            {result?.map(({ _id, address, totalSupply, name }) => (
              <div
                className="flex border px-4 py-2 mt-2"
                onClick={() => {
                  addContractAddress(address);
                }}
                key={_id}
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfFsim7mJetzNBK672yN0qjry6QJot2drW_w&usqp=CAU"
                  className="w-8 h-8 rounded-full"
                />
                <div>{name}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
