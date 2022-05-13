import "../../styles/common.css";
import { v4 as uuidv4 } from "uuid";
import React from "react";
export const CatCard = () => {
  const cat = [
    { name: "Art", img: "https://opensea.io/static/images/categories/art.png" },
    {
      name: "Collectibles",
      img: "https://opensea.io/static/images/categories/collectibles.png",
    },
    {
      name: "Domain Name",
      img: "https://opensea.io/static/images/categories/domain-names.png",
    },
    {
      name: "Music",
      img: "https://opensea.io/static/images/categories/music.png",
    },
    {
      name: "Photography",
      img: "https://opensea.io/static/images/categories/photography-category.png",
    },
    {
      name: "Sports",
      img: "https://opensea.io/static/images/categories/sports.png",
    },
    {
      name: "Trading Cards",
      img: "https://opensea.io/static/images/categories/trading-cards.png",
    },
    {
      name: "Utility",
      img: "https://opensea.io/static/images/categories/utility.png",
    },
    {
      name: "Virtual Cards",
      img: "https://opensea.io/static/images/categories/virtual-worlds.png",
    },
  ];
  return (
    <>
      <div>
        <div className="container flex justify-center mx-auto pt-16">
          <div>
            <p className="text-gray-200 font-extrabold text-3xl text-center  pb-3">
              Browse By Category
            </p>
          </div>
        </div>

        <div className="w-full  px-10 pt-10">
          <div className="container mx-auto">
            <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
              {cat.map((item) => (
                <div
                  className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                  key={uuidv4()}
                >
                  <div className="rounded overflow-hidden shadow-md bg-[#655D8A]">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-25">
                        <img
                          src={item.img}
                          alt="categories"
                          className="rounded-full object-cover h-full w-full shadow-md"
                        />
                      </div>
                    </div>
                    <div className="px-4 mt-16 py-4">
                      <div className="text-gray-200 text-sm text-center">
                        <a href="#" className="">
                          <p>{item.name}</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
