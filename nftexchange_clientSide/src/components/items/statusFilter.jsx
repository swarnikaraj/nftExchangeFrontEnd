import { MdViewHeadline } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const Statusfilter = () => {
  const [clicked, setClicked] = useState(false);

  var className = clicked ? "hidden py-2 space-y-2" : "py-2 space-y-2";

  return (
    <>
      <li>
        <button
          type="button"
          className="flex items-center p-2 w-full text-base font-normal  rounded-lg transition duration-75 group  hover:text-gray-600 hover:bg-gray-100 text-gray-200 dark:hover:bg-transparent-700 bg-[#1E202F]"
          aria-controls="dropdown-opt"
          data-collapse-toggle="dropdown-opt"
          onClick={(e) => {
            setClicked((p) => !p);
            console.log(e.target);
          }}
        >
          <MdViewHeadline />
          <span className="flex-1 ml-3 text-left whitespace-nowrap">
            Status
          </span>
          <FaAngleDown />
        </button>
        <ul id="dropdown-opt" className={className}>
          <li
            key={uuidv4()}
            className=" grid grid-cols-2 gap-2 overflow-y-scroll "
          >
            <button className="  text-sm font-normal py-2 px-6 border border-gray-400 rounded shadow hover:text-gray-600 hover:bg-gray-100 text-gray-200 dark:hover:bg-transparent-700 bg-[#1E202F]">
              Buy now
            </button>
            <button className="  text-sm font-normal py-2 px-6 border border-gray-400 rounded shadow hover:text-gray-600 hover:bg-gray-100 text-gray-200 dark:hover:bg-transparent-700 bg-[#1E202F]">
              On Auction
            </button>
            <button className="  text-sm font-normal py-2 px-6 border border-gray-400 rounded shadow hover:text-gray-600 hover:bg-gray-100 text-gray-200 dark:hover:bg-transparent-700 bg-[#1E202F]">
              New
            </button>
            <button className=" text-sm  font-normal py-2 px-6 border border-gray-400 rounded shadow hover:text-gray-600 hover:bg-gray-100 text-gray-200 dark:hover:bg-transparent-700 bg-[#1E202F]">
              Has Offer
            </button>
            <button className="   text-sm  font-normal py-2 px-6 border border-gray-400 rounded shadow hover:text-gray-600 hover:bg-gray-100 text-gray-200 dark:hover:bg-transparent-700 bg-[#1E202F]">
              Buy with Card
            </button>
          </li>
        </ul>
      </li>
    </>
  );
};
