import { MdFilterList, MdViewHeadline } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const Pricefilter = () => {
  const [clicked, setClicked] = useState(false);

  var className = clicked ? "hidden py-2 space-y-2" : "py-2 space-y-2";

  return (
    <>
      <li>
        <button
          type="button"
          className="flex items-center p-2 w-full text-base font-normal text-black-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-black dark:hover:bg-transparent-700"
          aria-controls="dropdown-opt"
          data-collapse-toggle="dropdown-opt"
          onClick={(e) => {
            setClicked((p) => !p);
            console.log(e.target);
          }}
        >
          <MdViewHeadline />
          <span className="flex-1 ml-3 text-left whitespace-nowrap">Price</span>
          <FaAngleDown />
        </button>
        <ul id="dropdown-opt" className={className}>
          <li key={uuidv4()}>
            <div className=" grid grid-cols-3 gap-1 ">
              <input type="text" placeholder="Min" className="w-3/10" /> to
              <input type="text" placeholder="Max" className="w-3/10" />
            </div>
            <button className="bg-white hover:bg-gray-100  text-sm text-gray-600 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Apply
            </button>
          </li>
        </ul>
      </li>
    </>
  );
};
