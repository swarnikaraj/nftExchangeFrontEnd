import { useContext, useEffect } from "react";
import { singleNftContext } from "../../contexts/singleNft";
import React, { useState } from "react";
import { profileContext } from "../../contexts/profileContext";
import { useParams } from "react-router";
export const SingleNft = () => {
  const { nft, addNft } = useContext(singleNftContext);

  const { address, index } = useParams();

  useEffect(() => {
    console.log(address, index, "Mil gya mai");
  }, [address, index]);
  return (
    <>
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">
        <div className="flex justify-center items-center lg:flex-row flex-col gap-8">
          {/* <!-- Description Div --> */}

          <div className="  w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
            <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-200 mt-4">
              {nft.name}
            </h2>

            <div className=" flex flex-row justify-between  mt-5">
              <p className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 font-normal text-base leading-4 text-gray-200 hover:underline hover:text-gray-800 duration-100 cursor-pointer">
                {nft.index}
              </p>
            </div>

            <p className=" font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 ">
              $ 790.89
            </p>

            <div className="lg:mt-11 mt-10">
              <hr className=" bg-gray-200 w-full my-2" />
            </div>

            <button className="focus:outline-none focus:ring-2 hover:bg-black focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-gray-800 w-full py-5 lg:mt-12 mt-6">
              Buy Now
            </button>

            <button className="focus:outline-none focus:ring-2 hover:bg-black focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-gray-800 w-full py-5 lg:mt-12 mt-6">
              Bid
            </button>
          </div>

          {/* <!-- Preview Images Div For larger Screen--> */}

          <div className=" w-full sm:w-96 md:w-8/12  lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
            <div className=" w-full lg:w-8/12 bg-gray-100 flex justify-center items-center">
              <img src={nft.imageURI} alt="Wooden Chair Previw" />
            </div>
          </div>
        </div>
        <div className="flex  justify-center items-center w-full">
          <div className="w-full sm:w-96 md:w-8/12 lg:w-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-28 sm:gap-x-6 sm:gap-y-12 gap-y-12 sm:mt-14 mt-10"></div>
        </div>
      </div>
    </>
  );
};
