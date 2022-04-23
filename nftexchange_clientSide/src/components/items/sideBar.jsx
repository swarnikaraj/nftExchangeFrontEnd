import { MdFilterList, MdViewHeadline } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Searchbox } from "../profile/searchbox";
import { Statusfilter } from "./statusFilter";
import { Pricefilter } from "./priceFilter";
export const Sidebar = () => {
  const [clicked, setClicked] = useState(false);

  var className = clicked ? "hidden py-2 space-y-2 " : "py-2 space-y-2";

  const data = [
    {
      trait_type: "background",
      value: ["yellow", "nlues", "green", "pink"],
    },
    {
      trait_type: "Mouth",
      value: ["yellow", "nlues", "green", "pink"],
    },
    {
      trait_type: "Ear",
      value: ["yellow", "nlues", "green", "pink"],
    },
    {
      trait_type: "Nose",
      value: ["yellow", "nlues", "green", "pink"],
    },
  ];

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
            <Pricefilter />
            <Statusfilter />

            {data?.map((dta) => (
              <li key={uuidv4()}>
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
                  <span
                    className="flex-1 ml-3 text-left whitespace-nowrap"
                    sidebar-toggle-item
                  >
                    {dta.trait_type}
                  </span>
                  <FaAngleDown />
                </button>
                <ul id="dropdown-opt" className={className}>
                  <Searchbox />

                  {dta.value.map((list) => (
                    <li key={uuidv4()} className="overflow-y-scroll">
                      <input
                        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="checkbox"
                        value={list}
                        id="flexCheckDefault"
                      />

                      <label
                        className="form-check-label inline-block text-gray-800"
                        for="flexCheckDefault"
                      >
                        {list}
                      </label>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};
