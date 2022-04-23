import { MdFavoriteBorder } from "react-icons/md";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Dropdown } from "../profile/dropdown";
import { Searchbox } from "../profile/searchbox";
import { FaEthereum } from "react-icons/fa";

export const Cards = ({ rows, dataArr }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <div className="flex flex-col w-3/4">
        <div className="flex justify-center flex-wrap border-t pl-4 pr-4 ">
          <div className="m-1 mr-2 w-1/2">
            <Searchbox />
          </div>
          <div className="m-1 mr-2 w-1/4">
            <Dropdown
              optionName={"Single item"}
              dataArr={["All items", "bundles"]}
            />
          </div>
          <div className="m-1 mr-2 w-1/5">
            <Dropdown
              optionName={"Price: Low to High"}
              dataArr={["Recently created", "Recently Sold", "Recently open"]}
            />
          </div>
        </div>

        <div className="w-8/10  ml-5 mr-5 ">
          <div className="container my-12 mx-auto px-4 md:px-3 border border-gray-200">
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
              {dataArr?.map((data) => (
                <div
                  className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
                  key={uuidv4()}
                >
                  <article className="overflow-hidden rounded-lg shadow-lg">
                    <a href="#">
                      <img
                        alt="Placeholder"
                        className="block h-auto w-full"
                        src="https://lh3.googleusercontent.com/IS4ySvhI8jGQsg_2fNFT3127JK61umYOGkulDrgVNxkBMeXz6acFjWjK1hmMBnMHPYnUq95NvmbBtUnfso8oR9GpRx_yL8L3w5lm=w335"
                      />
                    </a>

                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                      <h1 className="text-lg">
                        <a
                          className="no-underline hover:underline text-black"
                          href="#"
                        >
                          Azuki
                        </a>
                      </h1>

                      <p className="text-grey-darker text-sm">
                        {" "}
                        <FaEthereum />
                        0.933
                      </p>
                    </header>
                    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                      <a
                        className="flex items-center no-underline hover:underline text-black"
                        href="#"
                      >
                        <p className="ml-2 text-sm">Azuki #455</p>
                      </a>
                      <a
                        className="no-underline text-grey-darker hover:text-red-dark"
                        href="#"
                      >
                        <span className="text-sm">45</span>
                        <MdFavoriteBorder />
                      </a>
                    </footer>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
