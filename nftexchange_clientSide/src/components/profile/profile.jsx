import "./profile.css";
import { FaEthereum } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { contractContext } from "../../contexts/contractsContext";
import { useState, useContext, useEffect } from "react";

import { ItemList } from "../items/itemList";

import { useParams } from "react-router";
export const Profile = () => {
  const [activity, setActivity] = useState(true);
  const [items, setItems] = useState(true);
  const { address } = useParams();
  const [prof, setProf] = useState({});
  const [clicked, setClicked] = useState(false);
  const { contractAddress, addContractAddress } = useContext(contractContext);

  const [banner, setBanner] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMGUJZD4Jai-Gs_drGyK8HC5IqhS8vAnOu2Q&usqp=CAU"
  );
  const class_p = clicked ? "h-20" : "h-full";

  useEffect(() => {
    console.log(address, "i am here address");
    addContractAddress(address);

    fetch(`https://api.opensea.io/api/v1/asset_contract/${address}`)
      .then((d) => d.json())
      .then((res) => setProf(res));
  }, [address]);

  return (
    <>
      <div className="mt-12">
        {/* banner start */}
        {/* <div className="banner">
          <img src={banner} alt="Image alt text" />
        </div> */}

        {/* banner ends */}

        {/* dp */}
        <div className="profile_img_div flex justify-center">
          <img src={prof.image_url} className="profile_img" />
        </div>

        {/* dp ends */}

        {/* profile details start */}
        <div className="profileDetail">
          <h1 className="text-4xl font-bold mt-2 ml-2 mr-2 mb-2 ">
            {prof.name}
          </h1>
          <span>Created by</span>{" "}
          <span className="text-sky-400">{prof.name}</span>
          {/* cards start */}
          <div className=" hidden lg:grid lg:grid-cols-4 content-center cards  ">
            <div className=" m-3 pt-5 pb-5 pl-10 pr-10 shadow-lg shadow-[rgb(0,0,0,0.4)]  bg-transparent">
              <h1 className="lg:text-2xl font-bold text-sm  ">5.4K</h1>
              <p className="lg:text-lg font-bold text-xs ">items</p>
            </div>

            <div className=" m-3 pt-5 pb-5 pl-10 pr-10 shadow-lg shadow-[rgb(0,0,0,0.4)]  bg-transparent">
              <h1 className="lg:text-2xl font-bold text-sm">
                {(prof.owner / 1000).toFixed(2) + "K"}
              </h1>
              <p className="lg:text-lg font-bold text-xs ">owners</p>
            </div>

            <div className=" m-3 pt-5 pb-5 pl-10 pr-10 shadow-lg shadow-[rgb(0,0,0,0.4)]  bg-transparent">
              <div className="flex justify-center items-center">
                <FaEthereum />
                <h1 className="lg:text-2xl font-bold text-sm ">81.3</h1>
              </div>
              <p className="lg:text-lg font-bold text-xs ">floor price</p>
            </div>

            <div className=" m-3 pt-5 pb-5 pl-10 pr-10 shadow-lg shadow-[rgb(0,0,0,0.4)]  bg-transparent">
              <h1 className="lg:text-2xl font-bold text-sm ">4.5K</h1>
              <p className="lg:text-lg font-bold text-xs ">volume traded</p>
            </div>
          </div>
          {/*  end cards */}
          <p className=" hidden lg:flex  justify-items-center text-justify">
            {prof.description}
          </p>
          <button className="w-40 bg-transparent rounded-sm flex justify-center pl-8 pr-8">
            <FaAngleUp onClick={() => setClicked((p) => !p)} />
          </button>
        </div>

        {/* profile details ends */}

        <hr />

        {/* items and activity buttons ends */}
      </div>

      <ItemList />
    </>
  );
};
