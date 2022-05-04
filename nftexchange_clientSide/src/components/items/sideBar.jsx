import { MdFilterList, MdViewHeadline } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { useState, useEffect, useContext} from "react";
import { v4 as uuidv4 } from "uuid";
import { Searchbox } from "../profile/searchbox";
import { Statusfilter } from "./statusFilter";
import { Pricefilter } from "./priceFilter";
import { filterContext } from "../../contexts/filterTrait";
import { contractContext } from "../../contexts/contractsContext";
const qs = require("qs");
export const Sidebar = () => {
  const [clicked, setClicked] = useState([]);
  const [arr, setArr] = useState([]);
  const [filters, setFilters] = useState([]);
  
  const [filtObj, setFiltObj] = useState({});
  const { contractAddress, addContractAddress } = useContext(contractContext);
  const { updateFilterString, filterString } = useContext(filterContext);

  var customClassName = clicked ? "hidden py-2 space-y-2 " : "py-2 space-y-2";

  useEffect(() => {
    console.log(clicked);
  }, [clicked]);

  function getfilters() {}
  useEffect(() => {
    fetch(
      `http://localhost:1234/contract/byAddress/0x42069ABFE407C60cf4ae4112bEDEaD391dBa1cdB`
    )
      .then((res) => res.json())
      .then((res) => {
        let data = JSON.parse(res.contract[0].attributes);

        setArr(data);
      });
  }, [contractAddress]);

  useEffect(() => {
    makestring(filters);
    console.log("filters applied", filters);
  }, [filters]);

  function makestring(filterarray) {
    var newarray = [];
    for (let i = 0; i < filterarray.length; i++) {
      var found = newarray.findIndex(
        (x) => x.name === filterarray[i].trait_type
      );

      if (found == -1) {
        let valueArr = [];
        valueArr.push(filterarray[i].trait);
        newarray = [
          ...newarray,
          {
            name: filterarray[i].trait_type,
            values: valueArr,
          },
        ];
      } else {
        newarray[found].values.push(filterarray[i].trait);
      }
    }

    console.log("my newarray", newarray);
    let newObj = {};
    newObj = { stringTraits: newarray };
    let result = { search: newObj };

    const filteredStr = qs.stringify(result, { encode: false });

    console.log(filteredStr, " I am the final query");

    updateFilterString(filteredStr);
    console.log(filterString, " ia m saved in context");
  }

  const selectFilter = (event) => {
    const selectedvalue = event.target.value;
    const selectedname = event.target.name;

    if (
      filters.some(
        (e) => e.trait === selectedvalue && e.trait_type === selectedname
      )
    ) {
      const newfilters = filters.filter((filt) => filt.trait !== selectedvalue);
      setFilters(newfilters);
    } else {
      const newfilters = [...filters];
      newfilters.push({ trait_type: selectedname, trait: selectedvalue });
      setFilters(newfilters);
    }
  };

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

            {arr?.map(({ trait_type, traits, trait_type_count }) => (
              <li key={uuidv4()}>
                <button
                  type="button"
                  className="flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg text-black-900 group hover:bg-gray-100 dark:text-black dark:hover:bg-transparent-700"
                  aria-controls="dropdown-opt"
                  data-collapse-toggle="dropdown-opt"
                  onClick={() => {
                    if (clicked.includes(trait_type)) {
                      let newarr = [...clicked].filter((e) => e !== trait_type);

                      setClicked(newarr);
                    } else {
                      let added = [...clicked];
                      added.push(trait_type);
                      setClicked(added);
                    }
                  }}
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                      <MdViewHeadline />
                      <label
                        className="inline-block ml-2"
                        // sidebar-toggle-item
                      >
                        {trait_type}
                      </label>
                    </div>
                    <div className="flex items-center">
                      <label
                        className="inline-block mr-1"
                        // sidebar-toggle-item
                      >
                        {trait_type_count}
                      </label>

                      <FaAngleDown />
                    </div>
                  </div>
                </button>

                {clicked.includes(trait_type) && (
                  <ul className="h-40 overflow-y-scroll " id={trait_type}>
                    <Searchbox />

                    {traits.map(({ trait, count }) => (
                      <li key={uuidv4()} className="overflow-y-scroll ">
                        <input
                          className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-sm appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
                          value={trait}
                          name={trait_type}
                          onChange={selectFilter}
                          checked={
                            filters.some(
                              (e) =>
                                e.trait === trait && e.trait_type === trait_type
                            )
                              ? true
                              : false
                          }
                          type="checkbox"
                        />

                        <div className="flex justify-between">
                          <label
                            className="inline-block text-gray-800 form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            {trait}
                          </label>
                          <label
                            className="inline-block text-gray-800 form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            {count}
                          </label>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};
