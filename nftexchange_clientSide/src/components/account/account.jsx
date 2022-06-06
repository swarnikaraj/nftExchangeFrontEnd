import { useEffect, useState, useContext } from "react";
import { metaAccountContext } from "../../contexts/metaAccountcontext";
import { Login } from "../auth/login";
import { BiBorderAll } from "react-icons/bi";
import { AiOutlineStock } from "react-icons/ai";
import { BiAddToQueue, BiHeart } from "react-icons/bi";
import { CollectedCard } from "./CollectedCards";

export const Account = () => {
  const [userTrait, setUserTrait] = useState({});
  const [coll, setColl]=useState([])
  const { metaAddress, addMetaAddress } = useContext(metaAccountContext);
  const [showCollect, setCollect] = useState(true);
  const [showCreated, setShowCreated] = useState(false);
  const [showFav, setShowFav] = useState(false);
  const [showAct, setShowAct] = useState(false);

  function boolCreated() {
    setShowCreated(true);
    setShowAct(false);
    setShowFav(false);
    setCollect(false);
  }

  function boolCollected() {
    setShowCreated(false);
    setShowAct(false);
    setShowFav(false);
    setCollect(true);
  }

  function boolActivity() {
    setShowCreated(false);
    setShowAct(true);
    setShowFav(false);
    setCollect(false);
  }

  function boolFavorite() {
    setShowCreated(false);
    setShowAct(false);
    setShowFav(true);
    setCollect(false);
  }

  async function getProfile(metaAddress) {
    const res = await fetch(`http://localhost:1234/profile/${metaAddress}`);
    const data = await res.json();
    setColl(data.output.result)
    console.log(data.output.result);
  }
  useEffect(() => {
    //   fetch(`http://localhost:1234/profile/${metaAddress[0]}`)
    //     .then((res) => res.json())
    //     .then((res) => {
    //       console.log(metaAddress, "Here I am");
    //       console.log(res);
    //     });

    getProfile(metaAddress[0]);

    console.log("hello I am running bhai");
  }, []);

  return (
    <>
      {metaAddress.length > 0 ? (
        <>
          {/* Profile part starts */}
          <div className="mt-12">
            {/* banner start */}
            {/* <div className="banner">
          <img src={banner} alt="Image alt text" />
        </div> */}

            {/* banner ends */}

            {/* dp */}
            <div className="profile_img_div flex justify-center">
              <img src="" className="profile_img" />
            </div>

            {/* dp ends */}

            {/* profile details start */}
            <div className="profileDetail">
              <h1 className="text-4xl font-bold mt-2 ml-2 mr-2 mb-2 ">
                Swarnnika
              </h1>

              <span className="text-sky-400">Account</span>
            </div>
            <hr />
          </div>

          {/* profile part ends */}

          {/* Listing of cards and side bards on clciking condition */}

          <div className="flex justify-center hr-btn-div border-b">
            <div className="flex justify-center pt-2 pb-2 pl-5 pr-8 ">
              <BiBorderAll />
              <button
                className="ml-2 mr-2 font-bold hover:opacity-70 hover:font-light"
                onClick={boolCollected}
              >
                Collected
              </button>
            </div>

            <div className="flex justify-center pt-2 pb-2 pl-5 pr-8 ">
              <BiAddToQueue />
              <button
                className="ml-2 mr-2 font-bold hover:opacity-70 hover:font-light"
                onClick={boolCreated}
              >
                Created
              </button>
            </div>

            <div className="flex justify-center pt-2 pb-2 pl-5 pr-8 ">
              <BiHeart />
              <button
                className="ml-2 mr-2 font-bold hover:opacity-70 hover:font-light"
                onClick={boolFavorite}
              >
                Favourited
              </button>
            </div>

            <div className="flex justify-center pt-2 pb-2 pl-5 pr-8 ">
              <AiOutlineStock />
              <button
                className="ml-2 mr-2 font-bold hover:opacity-70 hover:font-light"
                onClick={boolFavorite}
              >
                Activity
              </button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center ml-0 mr-0 ">
            {showCollect && (
              <>
                <div className="  lg:w-1/5 md:w-1/5 sm:w-full lg:max-h-screen overflow-y-scroll sm:max-10 md:max-10">
                  Collect sidebar
                </div>
                <div className=" lg:w-3/4  md:w-3/4 sm:w-full  max-h-screen overflow-y-scroll ">
                   <CollectedCard collects={coll}/> 
                </div>
              </>
            )}

            {showAct && (
              <>
                <div className="  lg:w-1/5 md:w-1/5 sm:w-full lg:max-h-screen overflow-y-scroll sm:max-10 md:max-10">
                  Activity sidebar
                </div>
                <div className=" lg:w-3/4  md:w-3/4 sm:w-full  max-h-screen overflow-y-scroll ">
                  Acitivity Cards
                </div>
              </>
            )}

            {showCreated && (
              <>
                <div className="  lg:w-1/5 md:w-1/5 sm:w-full lg:max-h-screen overflow-y-scroll sm:max-10 md:max-10">
                  created sidebar
                </div>
                <div className=" lg:w-3/4  md:w-3/4 sm:w-full  max-h-screen overflow-y-scroll ">
                  created cards
                </div>
              </>
            )}

            {showFav && (
              <>
                <div className="  lg:w-1/5 md:w-1/5 sm:w-full lg:max-h-screen overflow-y-scroll sm:max-10 md:max-10">
                  Fav Side sidebar
                </div>
                <div className=" lg:w-3/4  md:w-3/4 sm:w-full  max-h-screen overflow-y-scroll ">
                  Fav Cards
                </div>
              </>
            )}
          </div>
        </>
      ) : (
        <Login />
      )}
    </>
  );
};
