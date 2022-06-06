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
  const { filterString, updateFilterString } = useContext(filterContext);
  const [page, setPage] = useState(1);

  const [nfts, setNfts] = useState([]);

  function showItems() {
    setActivity(false);
    setItems(true);
  }
  function showActivity() {
    setActivity(true);
    setItems(false);
  }

  // useEffect(() => {
  //   fetchAndSetNft();
  // }, [contractAddress, filterStrRef.current, page]);

  // function fetchAndSetNft() {
  //   let url = `http://127.0.0.1:1234/nft/${contractAddress}?page=${page}&size=16`;

  //   console.log(filterStrRef.current, "filterd string mai bs yhi pr hu");

  //   let urlFinal = filterStrRef.current
  //     ? url + `?${filterStrRef.current}`
  //     : url;

  //   console.log(urlFinal, "i am final");
  //   fetch(urlFinal)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       let data = res;
  //       console.log(res, "eesf");
  //       setNfts(nfts.concat(data.nft));
  //     });
  // }

  // const onScrollToEnd = () => {
  //   setPage(page + 1);
  //   console.log(page, "page is");

  //   window.scrollTo(0);
  // };

  // window.onscroll = function () {
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop ===
  //     document.documentElement.offsetHeight
  //   ) {
  //     onScrollToEnd();
  //   }
  // };

  

  return (
    <>
      <div className="flex justify-center hr-btn-div border-b">
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
         
            <div className="  lg:w-1/5 md:w-1/5 sm:w-full lg:max-h-screen overflow-y-scroll sm:max-10 md:max-10">
              <Sidebar />
            </div>
           
           {/* div with parent */}
            {/* <div
              className=" lg:w-3/4  md:w-3/4 sm:w-full  max-h-screen overflow-y-scroll "
              onScroll={handleScroll}
            > */}
              <Cards dataArr={nfts} />
            {/* </div> */}
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
