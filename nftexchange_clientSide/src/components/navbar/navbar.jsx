import { Link } from "react-router-dom";
import { Searchbox } from "../searchBar/search";
import { AiOutlineWallet } from "react-icons/ai";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaAlignJustify } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { useState } from "react";

export const Nav = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded  fixed w-full">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <div className="flex items-center">
            <img
              src="https://cryptologos.cc/logos/ethereum-eth-logo.png"
              className="mr-3 h-6 sm:h-9"
              alt="nft-Exchange Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-black">
              Nft-Exchange
            </span>
          </div>
          <Searchbox />

          <div className="flex justify-center  items-center ">
            <div className="pt-2 pb-2 pl-2 pr-2 ">Explore</div>
            <div className="pt-2 pb-2 pl-2 pr-2 "> Stats</div>
            <div className="pt-2 pb-2 pl-2 pr-2 ">Resoures</div>
            <div className="pt-2 pb-2 pl-2 pr-2 ">Create</div>

            <MdOutlineAccountCircle size={60} className="pt-2 pb-2 pl-2 pr-2" />
            <AiOutlineWallet size={60} className="pt-2 pb-2 pl-2 pr-2" />
          </div>

          {!clicked && (
            <FaAlignJustify
              className="md:hidden lg:hidden"
              onClick={() => {
                setClicked((p) => !p);
              }}
            />
          )}

          {clicked && (
            <div className=" flex flex-col text-left	">
              <FaAngleUp onClick={() => setClicked((p) => !p)} />
              <div className="border-b">Explore</div>
              <div className="border-b"> Stats</div>
              <div className="border-b">Resoures</div>
              <div className="border-b">Create</div>
              <MdOutlineAccountCircle />
              <AiOutlineWallet />
            </div>
          )}
        </div>
      </nav>
    </>
  );
};
