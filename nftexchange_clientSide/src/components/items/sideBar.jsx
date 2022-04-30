import { MdFilterList, MdViewHeadline } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { useState, useEffect, useContext, memo } from "react";
import { v4 as uuidv4 } from "uuid";
import { Searchbox } from "../profile/searchbox";
import { Statusfilter } from "./statusFilter";
import { Pricefilter } from "./priceFilter";
import { filterContext } from "../../contexts/filterTrait";
import { contractContext } from "../../contexts/contractsContext";

export const Sidebar = () => {
  const [clicked, setClicked] = useState(true);
  const [arr, setArr] = useState([]);
  const { makeFilterString } = useContext(filterContext);
  const { contractAddress } = useContext(contractContext);

  // const [stringTraits, setstringTraits] = useState([]);
  let stringTraits = [];

  var customClassName = clicked ? "hidden py-2 space-y-2 " : "py-2 space-y-2";

  function oncheck() {
    let newObj = {};
    newObj = { stringTraits: stringTraits };
    let result = { search: newObj };
    console.log(result);
    makeFilterString(result);
  }

  useEffect(() => {
    fetch(`http://localhost:1234/contract/byAddress/${contractAddress}`)
      .then((res) => res.json())
      .then((res) => {
        let data = JSON.parse(res.contract[0].attributes);
        setArr(data);
      });
  }, [contractAddress]);

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
                  value={dta}
                  onClick={() => {
                    setClicked(!clicked);
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
                <ul id="dropdown-opt" className={customClassName}>
                  <Searchbox />

                  {dta.traits.map((list) => (
                    <li key={uuidv4()} className="overflow-y-scroll">
                      <input
                        className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-sm appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
                        type="checkbox"
                        value={list.count}
                        id="flexCheckDefault"
                        onChange={(e) => {
                          //oncheck(e.target.checked, list);

                          // add to list
                          if (e.target.checked) {
                            var found = stringTraits.findIndex(
                              (x) => x.name === dta.trait_type
                            );

                            if (found == -1) {
                              let valueArr = [];
                              valueArr.push(list.trait);
                              stringTraits = [
                                ...stringTraits,
                                {
                                  name: dta.trait_type,
                                  values: valueArr,
                                },
                              ];
                            } else {
                              stringTraits[found].values.push(list.trait);
                            }
                          } else {
                            //remove from list
                            var found = stringTraits.findIndex(
                              (x) => x.name === dta.trait_type
                            );
                            var z = "values";
                            var k = stringTraits[found].values;
                            if (k.length == 1) {
                              stringTraits = stringTraits.filter(
                                (item) => item.name != dta.trait_type
                              );
                            } else {
                              var p = k.filter((item) => item != list.trait);
                              stringTraits[found].values = p;
                            }
                          }
                          oncheck();
                        }}
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
