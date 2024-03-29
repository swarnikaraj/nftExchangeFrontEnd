import { Link } from "react-router-dom";
import { Searchbox } from "../searchBar/search";
import { AiOutlineWallet } from "react-icons/ai";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaAlignJustify } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { useContext, useEffect } from "react";
import { metaAccountContext } from "../../contexts/metaAccountcontext";
import { MetaMaskAvatar } from "../singleNft/accountPopUp";

import { OnboardingButton } from "./connectWal";

import { AiOutlineClose } from "react-icons/ai";

const NavbarItem = ({ title, classProps }) => {
  return <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>;
};

export const Nav = () => {
  {
    const [toggleMenu, setToggleMenu] = useState(false);
    const { metaAddress, addMetaAddress } = useContext(metaAccountContext);

    useEffect(() => {
      console.log(metaAddress, "mai navbar me baitha hu");
    }, [metaAddress]);

    return (
      <>
        <nav className="w-full flex md:justify-center justify-between items-center py-10">
          <div className="md:flex-[0.5] flex-initial justify-center items-center">
            <Link to={"/"}>
              <span className="w-30 cursor-pointer text-xl sm:text-4xl bold text-white">
                Nft-Exchange
              </span>
            </Link>
          </div>

          <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
            {["Explore", "Stats", "Resource", "Create"].map((item, index) => (
              <NavbarItem key={item + index} title={item} />
            ))}

            <Link to={"/account"}>
              {" "}
              <li className="bg-[#655D8A] py-2 px-14 mx-10 rounded-full hover:bg-[#7897AB] cursor-pointer">
                <MdOutlineAccountCircle />
              </li>
            </Link>
            <li className="bg-[#655D8A] py-2 px-14 mx-10 rounded-full cursor-pointer hover:bg-[#7897AB] fflex justify-center items-center">
              <OnboardingButton />
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

                {["Explore", "Stats", "Resource", "Create"].map(
                  (item, index) => (
                    <NavbarItem
                      key={item + index}
                      title={item}
                      classProps="my-2 text-lg"
                    />
                  )
                )}
              </ul>
            )}
          </div>
        </nav>
        <nav className="w-full flex md:justify-center justify-between items-center py-10">
          <Searchbox />
        </nav>
        {metaAddress.length > 0 && <MetaMaskAvatar address={metaAddress[0]} />}
      </>
    );
  }
};
