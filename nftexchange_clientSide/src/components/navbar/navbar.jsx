import { Link } from "react-router-dom";
import { Searchbox } from "../searchBar/search";
import { AiOutlineWallet } from "react-icons/ai";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaAlignJustify } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";

import { OnboardingButton } from "./web3connect";

import { AiOutlineClose } from "react-icons/ai";

const NavbarItem = ({ title, classProps }) => {
  return <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>;
};

export const Nav2 = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <nav className="bg-transparent border-[#343751]-100 px-2 sm:px-4 py-2.5 rounded  fixed w-full z-1000">
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

export const Nav = () => {
  {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
      <nav className="w-full flex md:justify-center justify-between items-center py-10">
        <div className="md:flex-[0.5] flex-initial justify-center items-center">
          <Link to={"/"}>
            <span className="w-30 cursor-pointer text-xl sm:text-4xl bold text-white">
              Nft-Exchange
            </span>
          </Link>
        </div>

        <div>
          <OnboardingButton />
        </div>

        <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
          {["Explore", "Stats", "Resource", "Create"].map((item, index) => (
            <NavbarItem key={item + index} title={item} />
          ))}

          <li className="bg-[#655D8A] py-2 px-14 mx-10 rounded-full cursor-pointer hover:bg-[#7897AB]">
            <MdOutlineAccountCircle />
          </li>
          <li className="bg-[#655D8A] py-2 px-14 mx-10 rounded-full cursor-pointer hover:bg-[#7897AB]">
            <AiOutlineWallet />
          </li>
        </ul>
        <div className="flex relative">
          {toggleMenu ? (
            <AiOutlineClose
              fontSize={28}
              className="text=white md:hidden cursor-pointer"
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <HiMenuAlt4
              fontSize={28}
              className="text=white md:hidden cursor-pointer"
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <ul
              className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
              flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in
              "
            >
              <li className="text-xl w-full my-2">
                <AiOutlineClose onClick={() => setToggleMenu(false)} />
              </li>

              {["Explore", "Stats", "Resource", "Create"].map((item, index) => (
                <NavbarItem
                  key={item + index}
                  title={item}
                  classProps="my-2 text-lg"
                />
              ))}
            </ul>
          )}
        </div>
      </nav>
    );
  }
};
