import { AiOutlineShoppingCart } from "react-icons/ai";

import { v4 as uuidv4 } from "uuid";

import { MdOutlineClose } from "react-icons/md";

import { useState } from "react";
import { Dropdown } from "../profile/dropdown";

export const Activity = ({ rows, dataArr }) => {
  const [clicked, setClicked] = useState(false);

  const [filters, setFilters] = useState(["Filter1", "Filter2", "filter3"]);

  const days = ["Last 60 days", "Last 90 days", "All time"];
  const actArray = [
    {
      item: "Speotyte cuniculata",
      price: 23,
      quantity: 58,
      from: "1JSJMn6DhxSr7MTwGGtCLU3EUnu2GQbBzE",
      time: "10:09 PM",
    },
    {
      item: "Balearica pavonina",
      price: 76,
      quantity: 45,
      from: "1L6aE8QY3rDHT8astsHHJGicEwjriWbbSn",
      time: "8:36 AM",
    },
    {
      item: "Spilogale gracilis",
      price: 7,
      quantity: 16,
      from: "17L4UcAgRyLxh4HuZ55WwXBtdUeUviicrr",
      time: "5:50 AM",
    },
    {
      item: "Agelaius phoeniceus",
      price: 7,
      quantity: 46,
      from: "1FFdWQXvggNRYQckXV8FWPzS21TD4c3pt",
      time: "1:30 PM",
    },
    {
      item: "Damaliscus lunatus",
      price: 8,
      quantity: 2,
      from: "1GkcxZpkdho6MPM85nYGK7ydpsQYwgJqf1",
      time: "11:17 AM",
    },
    {
      item: "Drymarchon corias couperi",
      price: 90,
      quantity: 93,
      from: "1HwJCrRnyvCUp9bsUyjRWsqWcyDVwL2fFs",
      time: "4:01 AM",
    },
    {
      item: "Uraeginthus granatina",
      price: 40,
      quantity: 8,
      from: "1LgCST5et7Fs1nk3nZAKtDg7p2ppJWcoK9",
      time: "9:30 PM",
    },
    {
      item: "Vulpes cinereoargenteus",
      price: 93,
      quantity: 98,
      from: "18ACL2wiN8bs8Dq3bh2aHgzVfYLJK1UsZx",
      time: "7:46 AM",
    },
    {
      item: "Gyps bengalensis",
      price: 45,
      quantity: 66,
      from: "1BNvkBzJtq4s9CYxXPpiP5JVfZoj3JEb5a",
      time: "7:21 PM",
    },
    {
      item: "Macropus agilis",
      price: 19,
      quantity: 96,
      from: "1KwqxoUEsSnmqEYWqCjhHXFyPskpsQv1Ao",
      time: "11:27 AM",
    },
  ];
  //   setFilter(filters=> [...filters,filtername] );

  function clearFilter() {
    setFilters([]);

    // set data to original array
  }

  return (
    <>
      <div className="flex flex-col md:w-3/4">
        <div className="flex justify-center flex-wrap border-t border-b pl-4 pr-4 ">
          {filters.map((filter) => (
            <span className="px-4 py-2 rounded-full text-gray-500 border border-gray-300 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease mt-3 mb-3 ml-2 mr-2">
              {filter}
              <button className="bg-transparent hover focus:outline-none ">
                <MdOutlineClose />
              </button>
            </span>
          ))}

          <p onClick={clearFilter} className="mt-3 mb-3">
            Clear All
          </p>
        </div>

        <div className="w-8/10  ml-5 mr-5 ">
          <Dropdown optionName={"Last 90 days"} dataArr={days} width={"w-30"} />

          <div className="container my-12 mx-auto px-4 md:px-3 border border-gray-200">
            <table className="table-auto w-full">
              <thead className="pt-4 pb-4 mt-2 mb-2">
                <tr className="border-b ">
                  <th></th>
                  <th>Item</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>To</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {actArray.map((data) => (
                  <tr key={uuidv4()}>
                    <td className="flex justify-center">
                      <AiOutlineShoppingCart />{" "}
                      <p className="ml-2 mr-2 ">Sale</p>
                    </td>
                    <td className="pt-2 pb-2 ">{data.item}</td>
                    <td className="pt-2 pb-2 ">{data.price}</td>
                    <td className="pt-2 pb-2 ">{data.quantity}</td>
                    <td className="pt-2 pb-2 ">{data.from.slice(0, 7)}</td>
                    <td className="pt-2 pb-2 ">{data.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
