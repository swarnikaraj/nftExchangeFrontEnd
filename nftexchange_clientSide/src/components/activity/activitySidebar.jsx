import { MdFilterList, MdViewHeadline } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const ActivitySidebar = () => {
  const [clicked, setClicked] = useState(false);

  var className = clicked ? "hidden py-2 space-y-2 " : "py-2 space-y-2";

  return (
    <>
      <aside className="md:w-1/4 " aria-label="Sidebar ">
        <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-transparent-800">
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-black-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-transparent-700"
              >
                <MdFilterList />
                <span className="ml-3">Filter</span>
              </a>
            </li>

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
                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                  Event Type
                </span>
                <FaAngleDown />
              </button>
              <ul id="dropdown-opt" className={className}>
                <li
                  key={uuidv4()}
                  className=" grid grid-cols-2 gap-2 overflow-y-scroll "
                >
                  <button className="bg-white hover:bg-gray-100  text-sm text-gray-600 font-semibold py-2 px-6 border border-gray-400 rounded shadow">
                    Listing
                  </button>
                  <button className="bg-white hover:bg-gray-100  text-sm text-gray-600 font-semibold py-2 px-6 border border-gray-400 rounded shadow">
                    Sales
                  </button>
                  <button className="bg-white hover:bg-gray-100 text-sm text-gray-600 font-semibold py-2 px-6 border border-gray-400 rounded shadow">
                    Bids
                  </button>
                  <button className="bg-white hover:bg-gray-100 text-sm text-gray-600 font-semibold py-2 px-6 border border-gray-400 rounded shadow">
                    Transfer
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};
