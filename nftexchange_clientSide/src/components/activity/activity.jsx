import { MdFavoriteBorder } from "react-icons/md";

import { v4 as uuidv4 } from "uuid";

import { MdOutlineClose } from "react-icons/md";

import { useState } from "react";
import { Dropdown } from "../profile/dropdown";

export const Activity = ({ rows, dataArr }) => {
  const [clicked, setClicked] = useState(false);

  const [filters, setFilters] = useState(["Filter1", "Filter2", "filter3"]);
  

  const days = ["Last 60 days", "Last 90 days", "All time"];
const actArray=[
    {}
]
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
            <span class="px-4 py-2 rounded-full text-gray-500 border border-gray-300 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease mt-3 mb-3 ml-2 mr-2">
              {filter}
              <button class="bg-transparent hover focus:outline-none ">
                <MdOutlineClose />
              </button>
            </span>
          ))}

          <p onclick={clearFilter} className="mt-3 mb-3">
            Clear All
          </p>
        </div>

        <div className="w-8/10  ml-5 mr-5 ">
          <div className="w-30">
            <Dropdown optionName={"Last 90 days"} dataArr={days} />
          </div>
          <div className="container my-12 mx-auto px-4 md:px-3 border border-gray-200">
            
          <table class="table-auto">
  <thead>
    <tr>
        <th></th>
      <th>Item</th>
      <th>Price</th>
      <th>Quantity</th>
      <th>To</th>
      <th>Time</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td>Malcolm Lockyer</td>
      <td>1961</td>
    </tr>
    
  </tbody>
</table>



          </div>
        </div>
      </div>
    </>
  );
};
