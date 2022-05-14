import "./profile.css";
import { FaEthereum } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { AiOutlineStock } from "react-icons/ai";
import { useState, useContext, useEffect, Profiler } from "react";
import { profileContext } from "../../contexts/profileContext";
import { ItemList } from "../items/itemList";
export const Profile = () => {
  const [activity, setActivity] = useState(true);
  const [items, setItems] = useState(true);

  const [clicked, setClicked] = useState(false);
  const { profile, addProfile } = useContext(profileContext);
  const [banner, setBanner] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMGUJZD4Jai-Gs_drGyK8HC5IqhS8vAnOu2Q&usqp=CAU"
  );
  const class_p = clicked ? "h-20" : "h-full";

  useEffect(() => {
   

    console.log(profile)
  }, [profile]);

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
          <img src={profile.image_url} className="profile_img" />
        </div>

        {/* dp ends */}

        {/* profile details start */}
        <div className="profileDetail">
          <h1 className="text-4xl font-bold mt-2 ml-2 mr-2 mb-2 ">
            {profile.name}
          </h1>
          <span>Created by</span>{" "}
          <span className="text-sky-400">{profile.name}</span>
          {/* cards start */}
          <div className=" grid grid-cols-4 content-center cards ">
            <div className="border pt-5 pb-5 pl-10 pr-10">
              <h1 className="text-2xl font-bold">5.4K</h1>
              <p>items</p>
            </div>

            <div className="border pt-5 pb-5 pl-10 pr-10">
              <h1 className="text-2xl font-bold">
                {" "}
                {(profile.owner / 1000).toFixed(2) + "K"}
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
          <p className={class_p}>{profile.description}</p>
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
