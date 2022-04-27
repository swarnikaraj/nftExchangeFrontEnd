import { Cards } from "./card";
import { Sidebar } from "./sideBar";
import { BiBorderAll } from "react-icons/bi";
import { ActivitySidebar } from "../activity/activitySidebar";
import { Activity } from "../activity/activity";
import { AiOutlineStock } from "react-icons/ai";
import { useEffect, useState } from "react";

export const ItemList = () => {
  const [items, setItems] = useState(false);
  const [activity, setActivity] = useState(true);

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
    fetch(
      "http://127.0.0.1:1234/nft/0xED5AF388653567Af2F388E6224dC7C4b3241C544?search[sortAscending]=true&search[sortBy]=PRICE&search[stringTraits][0][name]=Hair&search[stringTraits][0][values][0]=Spirit%20Long"
    )
      .then((res) => res.json())
      .then((res) => {
        let data = res;

        setNfts(data.nft);
      });
  }, []);

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
