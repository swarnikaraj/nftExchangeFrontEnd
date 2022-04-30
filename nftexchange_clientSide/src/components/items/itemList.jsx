import { Cards } from "./card";
import { Sidebar } from "./sideBar";
import { BiBorderAll } from "react-icons/bi";
import { ActivitySidebar } from "../activity/activitySidebar";
import { Activity } from "../activity/activity";
import { AiOutlineStock } from "react-icons/ai";
import { useEffect, useState, useContext } from "react";
import { contractContext } from "../../contexts/contractsContext";
import { filterContext } from "../../contexts/filterTrait";
const qs = require("qs");

export const ItemList = () => {
  const [items, setItems] = useState(true);
  const [activity, setActivity] = useState(false);
  const { contractAddress } = useContext(contractContext);
  const { filterString } = useContext(filterContext);

  const [nfts, setNfts] = useState([]);

  function showItems() {
    setActivity(false);
    setItems(true);
  }
  function showActivity() {
    setActivity(true);
    setItems(false);
  }

  useEffect(() => {
    let url = `http://127.0.0.1:1234/nft/`;


    console.log(filterString, "filterd string");

    let urlFinal = filterString.filts
      ? url + `${contractAddress}?${filterString.filts}`
      : url + `${contractAddress}`;

    console.log(urlFinal, "i am final");
    fetch(urlFinal)
      .then((res) => res.json())
      
      .then((res) => {
        let data = res;
        console.log(res, "eesf");
        setNfts(data.nft);
      });
  }, [contractAddress, filterString.filts]);

  return (
    <>
      <div className="flex justify-center hr-btn-div">
        <div className="flex justify-center pt-2 pb-2 pl-5 pr-8 ">
          <BiBorderAll />
          <button
            className="ml-2 mr-2 font-bold hover:opacity-70 hover:font-light"
            onClick={showItems}
          >
            Items
          </button>
        </div>

        <div className="flex justify-center pt-2 pb-2 pl-5 pr-8 ">
          <AiOutlineStock />
          <button
            className="ml-2 mr-2 font-bold hover:opacity-70 hover:font-light"
            onClick={showActivity}
          >
            Activity
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center ml-0 mr-0 ">
        {items && (
          <>
            <Sidebar />
            <Cards dataArr={nfts} />
          </>
        )}

        {activity && (
          <>
            <ActivitySidebar />
            <Activity />
          </>
        )}
      </div>
    </>
  );
};
