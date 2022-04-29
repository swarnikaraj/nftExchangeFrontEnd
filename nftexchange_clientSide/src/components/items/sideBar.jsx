import { MdFilterList, MdViewHeadline } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Searchbox } from "../profile/searchbox";
import { Statusfilter } from "./statusFilter";
import { Pricefilter } from "./priceFilter";

export const Sidebar = () => {
  const [clicked, setClicked] = useState(false);
  const [arr, setArr] = useState([]);

  const [filtObj, setFiltObj] = useState({});

  var className = clicked ? "hidden py-2 space-y-2 " : "py-2 space-y-2";

  function oncheck(trait_type, value) {
    

    console.log(filtObj);
  }

  useEffect(() => {
    fetch(
      "http://localhost:1234/contract/0xED5AF388653567Af2F388E6224dC7C4b3241C544"
    )
      .then((res) => res.json())
      .then((res) => {
        let data = JSON.parse(res.nft[0].attributes);
        setArr(data);
      });
  }, []);

  return (
    <>
      <aside className="md:w-1/4 " aria-label="Sidebar ">
        <div className="px-3 py-4 overflow-y-auto rounded bg-gray-50 dark:bg-transparent-800">
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal rounded-lg text-black-900 dark:text-black hover:bg-gray-100 dark:hover:bg-transparent-700"
              >
                <MdFilterList />
                <span className="ml-3">Filter</span>
              </a>
            </li>
            <Pricefilter />
            <Statusfilter />

            {arr?.map((dta) => (
              <li key={uuidv4()}>
                <button
                  type="button"
                  className="flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg text-black-900 group hover:bg-gray-100 dark:text-black dark:hover:bg-transparent-700"
                  aria-controls="dropdown-opt"
                  data-collapse-toggle="dropdown-opt"
                  onClick={(e) => {
                    setClicked((p) => !p);
                    console.log(e.target);
                  }}
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                      <MdViewHeadline />
                      <label
                        className="inline-block ml-2"
                        // sidebar-toggle-item
                      >
                        {dta.trait_type}
                      </label>
                    </div>
                    <div className="flex items-center">
                      <label
                        className="inline-block mr-1"
                        // sidebar-toggle-item
                      >
                        {dta.trait_type_count}
                      </label>

                      <FaAngleDown />
                    </div>
                  </div>
                </button>
                <ul id="dropdown-opt" className={className}>
                  <Searchbox />

                  {dta.traits.map((list) => (
                    <li key={uuidv4()} className="overflow-y-scroll">
                      <input
                        className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-sm appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
                        type="checkbox"
                        value={list.count}
                        id="flexCheckDefault"
                      />
                      <div className="flex justify-between">
                        <label
                          className="inline-block text-gray-800 form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          {list.trait}
                        </label>
                        <label
                          className="inline-block text-gray-800 form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          {list.count}
                        </label>
                      </div>
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
