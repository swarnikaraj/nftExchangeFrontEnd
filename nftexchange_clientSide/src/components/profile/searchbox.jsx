import { FaAngleDown, FaGratipay } from "react-icons/fa";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./dropdown.css";
export const Searchbox = ({ optionName, dataArr }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <input
        type="text"
        placeholder="Search"
        className="w-full pl-10 pr-10 pt-3.5 pb-3.5 rounded-sm border focus:ring-0"
      />
    </>
  );
};
