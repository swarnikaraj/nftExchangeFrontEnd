import { FaAngleDown, FaGratipay } from "react-icons/fa";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./dropdown.css";
export const Dropdown = ({ optionName, dataArr ,width }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <select className={`${width} pt-4 pb-4 pl-7 pr-7 rounded-sm border`}>
        <option className="rounded-sm">{optionName}</option>
        {dataArr?.map((data) => (
          <option key={uuidv4()} value={data}>
            {data}
          </option>
        ))}
      </select>
    </>
  );
};
