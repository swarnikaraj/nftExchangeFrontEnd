import { useState, useEffect, useContext } from "react";
import { filterContext } from "../../contexts/filterTrait";
import { contractContext } from "../../contexts/contractsContext";
import { v4 as uuidv4 } from "uuid";
const qs = require("qs");
export const Checkbox = () => {
  const [arr, setArr] = useState([]);
  const [filters, setFilters] = useState([]);
  const { contractAddress } = useContext(contractContext);
  
  const { filterString, updateFilterString} = useContext(filterContext);
  
  //   const [type, setType] = useState("none");
  //   const [val, setVal] = useState("none");
  //   const [obj, setObj] = useState({
  //     trait_type: "",
  //     trait: "",
  //     ischecked: false,
  //   });

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
    
     updateFilterString(filteredStr)
        console.log(filterString, " ia m saved in context")

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
      <div className=" ">
        <h3 className=" ">attributes</h3>

        {arr?.map(({ trait_type, traits, trait_type_count }) => (
          <div className="" key={uuidv4()}>
            <div className="flex labelsAndAcount">
              <h1 className="mx-2">{trait_type}</h1>{" "}
              <h1 className="mx-2">{trait_type_count}</h1>
            </div>

            {traits.map(({ trait, count }) => (
              <div key={uuidv4()}>
                <label>{trait}</label>

                <input
                  value={trait}
                  name={trait_type}
                  onChange={selectFilter}
                  checked={
                    filters.some(
                      (e) => e.trait === trait && e.trait_type === trait_type
                    )
                      ? true
                      : false
                  }
                  type="checkbox"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};
