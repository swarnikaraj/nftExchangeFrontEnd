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
  const [closed, setClosed] = useState([]);
  const [opened, setOpened] = useState([]);

  const [arr, setArr] = useState([]);
  let stringTraits = [];
  const [filters, setFilters] = useState([]);
  const [checked, setChecked] = useState([]);

  const { contractAddress, addContractAddress } = useContext(contractContext);
  const { makeFilterString } = useContext(filterContext);

  // var customClassName = "hidden py-2 space-y-2 " || "py-2 space-y-2";

  function oncheck() {
    console.log(stringTraits, "filter array");
  }

  const handleCheck = (event, t) => {
    var updatedList;
    if (event.target.checked) {
      console.log(t, event.target.value, "aa gya");
      let newObj = {
        name: t,
        values: event.target.value,
      };
      var t = checked.concat([newObj]);

      setChecked(t);
      // {
      //   name: t,
      //   values: event.target.value,
      // },
    } else {
      console.log(t, event.target.value, "chli gai");
      // updatedList = updatedList.filter((x) => x.values !== event.target.value);
    }
    // setChecked(updatedList);
    // console.log(checked, "checlsfjsf");
  };
  function handleClassChange(e) {
 
    var d = e.currentTarget.id;
    var el = document.getElementById(`${d}`).nextSibling;
    if (el.style.display === "none") {
      el.style.display = "block";
    } else {
      el.style.display = "none";
    }
  }

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
              <li key={uuidv4()} >
                <button
                  type="button"
                  className="flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg text-black-900 group hover:bg-gray-100 dark:text-black dark:hover:bg-transparent-700 my-btn"
                  aria-controls="dropdown-opt"
                  data-collapse-toggle="dropdown-opt"
                  value={dta}
                  id={uuidv4()}
                  
                  onClick={(e) => {
                    handleClassChange(e);
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
                        sidebar-toggle-item="true"
                      >
                        {dta.trait_type_count}
                      </label>

                      <FaAngleDown />
                    </div>
                  </div>
                </button>

                <ul id="dropdown-opt" style={{ display: "none" }}>
                  <Searchbox />

                  {dta.traits.map((list) => (
                    <li key={uuidv4()} className="overflow-y-scroll">
                      <input
                        value={list.trait}
                        className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-sm appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
                        type="checkbox"
                        id="flexCheckDefault"
                        onChange={(e) => handleCheck(e, dta.trait_type)}
                        // onChange={(e) => {
                        //   handleCheck(e, dta.trait_type);
                        // }}
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
