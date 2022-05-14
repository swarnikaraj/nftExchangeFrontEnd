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
     addContractAddress(address)

     
    fetch(`https://api.opensea.io/api/v1/asset_contract/${address}`)
      .then((d) => d.json())
      .then((res) => setProf(res));

   
    
  }, [address]);

  return (
    <>
      <div>
        {/* banner start */}
        <div className="banner">
          <img src={banner} alt="Image alt text" />
        </div>

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
          <div className=" grid grid-cols-4 content-center cards ">
            <div className="border pt-5 pb-5 pl-10 pr-10">
              <h1 className="text-2xl font-bold">5.4K</h1>
              <p>items</p>
            </div>

            <div className="border pt-5 pb-5 pl-10 pr-10">
              <h1 className="text-2xl font-bold">
                {" "}
                {(prof.owner / 1000).toFixed(2) + "K"}
              </h1>
              <p>owners</p>
            </div>

            <div className="border pt-5 pb-5 pl-10 pr-10">
              <div className="flex justify-center items-center">
                <FaEthereum />
                <h1 className="text-2xl font-bold pl-2">81.3</h1>
              </div>
              <p>floor price</p>
            </div>

            <div className="border pt-5 pb-5 pl-10 pr-10">
              <h1 className="text-2xl font-bold">4.5K</h1>
              <p>volume traded</p>
            </div>
          </div>
          {/*  end cards */}
          <p className={class_p}>{prof.description}</p>
          <button className="w-40 bg-gray-100 rounded-sm flex justify-center pl-8 pr-8">
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
