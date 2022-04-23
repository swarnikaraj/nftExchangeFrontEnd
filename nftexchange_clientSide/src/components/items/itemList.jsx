import { Cards } from "./card";
import { Sidebar } from "./sideBar";
import { BiBorderAll } from "react-icons/bi";
import { ActivitySidebar } from "../activity/activitySidebar";
import { Activity } from "../activity/activity";
import { AiOutlineStock } from "react-icons/ai";
import { useState } from "react";

export const ItemList = () => {
  const [activity, setActivity] = useState(true);
  const [items, setItems] = useState(false);

  function showItems() {
    setActivity(false);
    setItems(true);
  }
  function showActivity() {
    setActivity(true);
    setItems(false);
  }

  return (
    <>
      <div className="hr-btn-div flex justify-center">
        <div className=" pt-2 pb-2 pl-5 pr-8  flex justify-center">
          <BiBorderAll />
          <button
            className=" hover:opacity-70 font-bold hover:font-light ml-2 mr-2 "
            onClick={showItems}
          >
            Items
          </button>
        </div>

        <div className=" pt-2 pb-2 pl-5 pr-8  flex justify-center">
          <AiOutlineStock />
          <button
            className=" hover:opacity-70 font-bold hover:font-light ml-2 mr-2 "
            onClick={showActivity}
          >
            Activity
          </button>
        </div>
      </div>
      <div className="flex justify-center flex-wrap ml-0 mr-0 ">
        {items && (
          <>
            <Sidebar />
            <Cards dataArr={[1, 2, 3, 4, 5, 6]} />{" "}
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
