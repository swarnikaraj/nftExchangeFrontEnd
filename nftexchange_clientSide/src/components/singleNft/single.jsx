import { useContext, useEffect } from "react";
import { singleNftContext } from "../../contexts/singleNft";
import React, { useState } from "react";
import { profileContext } from "../../contexts/profileContext";
import { Loader } from "../../styles/loader";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
export const SingleNft = () => {
  const { nft, addNft } = useContext(singleNftContext);

  const { address, index } = useParams();

  const [mynft, setMynft] = useState({});
  const [des, setDes] = useState("");
  const [extLink, setExtLink] = useState("");
  const [attributes, setAttributes] = useState([]);
  const [nftname, setNftname] = useState("");
  const [bidPopUp, setBidPopUp] = useState(false);
  const [buyPopUp, setBuyPopUp] = useState(false);
  const [loadingHistory, setLoadingHistory] = useState(true);
  const [his, setHis] = useState([]);
  useEffect(() => {
    fetch(`http://127.0.0.1:1234/nft/${address}/${index}`)
      .then((res) => res.json())
      .then((res) => {
        setMynft(res.nft[0]);
        let t = JSON.parse(res.nft[0].tokenURI);

        setDes(t.description);
        setExtLink(t.external_url);
        setAttributes(t.attributes);
        console.log(attributes);
        setNftname(t.name);
      });

    fetch(
      `http://127.0.0.1:1234/nft/history/0x42069ABFE407C60cf4ae4112bEDEaD391dBa1cdB/1799`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res, "i am histroy");
        setLoadingHistory(false);
      });
  }, [address, index]);

  useEffect(() => {
    fetch(
      `http://127.0.0.1:1234/nft/history/0x42069ABFE407C60cf4ae4112bEDEaD391dBa1cdB/1799`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res, "i am histroy");
        setLoadingHistory(false);
      });
  }, []);

  return (
    <>
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">
        <div className="flex justify-center items-center lg:flex-row flex-col gap-8">
          {/* <!-- Description Div --> */}

          <div className="  w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
            <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-200 mt-4">
              {nftname}
            </h2>

            <div className=" flex flex-row justify-between  mt-5">
              <a href={extLink} className="hover:text-black ">
                <p className="focus:outline-none   font-normal text-base leading-4 text-gray-200 hover:underline hover:text-gray-800 duration-100 cursor-pointer underline">
                  {mynft.name}
                </p>
              </a>
            </div>

            <div className="  lg:leading-6 leading-5 mt-6 grid grid-cols-4 gap-4 sm:grid-cols-2 md:grid-cols-3 ">
              {attributes?.map(({ trait_type, value }) => (
                <div className="border p-2" key={uuidv4()}>
                  <p className="font-semibold lg:text-xl text-xl text-gray-200 ">
                    {trait_type}
                  </p>
                  <p className="font-sm lg:text-sm text-gray-200 ">{value}</p>
                </div>
              ))}
            </div>

            <div className="lg:mt-11 mt-10">
              <hr className=" bg-gray-200 w-full my-2" />
            </div>

            <p>{des}</p>

            <button
              onClick={() => {
                setBuyPopUp(true);
              }}
              className="focus:outline-none focus:ring-2 hover:bg-black focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-gray-800 w-full py-5 lg:mt-12 mt-6"
            >
              Buy Now
            </button>

            <button
              onClick={() => {
                setBidPopUp(true);
              }}
              className="focus:outline-none focus:ring-2 hover:bg-black focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-gray-800 w-full py-5 lg:mt-12 mt-6"
            >
              Bid
            </button>
          </div>

          {/* <!-- Preview Images Div For larger Screen--> */}

          <div className=" w-full sm:w-96 md:w-8/12  lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
            <div className=" w-full lg:w-8/12 bg-gray-100 flex justify-center items-center">
              <img src={mynft.imageURI} alt="Nft image" />
            </div>
          </div>
        </div>
        <div className="flex  justify-center items-center w-full">
          <div className="w-full items-center lg:w-full ">
            {loadingHistory && <Loader />}

            {loadingHistory && (
              <div className="xl:w-3/4 2xl:w-4/5 w-full">
                <div className="px-4 md:px-10 py-4 md:py-7">
                  <div className="sm:flex items-center justify-between">
                    <div className="mt-4 sm:mt-0">
                      <div className="inline-flex sm:ml-3 items-start justify-start px-6 py-3  focus:outline-none rounded">
                        <p className="text-sm font-medium leading-none text-white">
                          Item Activity
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white px-4 md:px-10 pb-5">
                  <div className="overflow-x-auto">
                    <table className="w-full whitespace-nowrap">
                      <thead className="text-semibold">
                        <tr
                          className="text-sm text-semibold leading-none text-gray-600 h-16"
                          key={uuidv4()}
                        >
                          <td className="w-1/2">
                            <div className="flex items-center">
                              <div className="w-10 h-10 bg-gray-700 rounded-sm flex items-center justify-center">
                                <p className="text-xs font-bold leading-3 text-white">
                                  E
                                </p>
                              </div>
                              <div className="pl-2">
                                <p className="text-sm font-medium leading-none text-gray-800">
                                  Event
                                </p>
                                <p className="text-xs leading-3 text-gray-600 mt-2">
                                  smthing
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="pl-16">
                            <p>Price</p>
                          </td>
                          <td>
                            <p className="pl-16">to_address</p>
                          </td>
                          <td>
                            <p className="pl-16">from_address</p>
                          </td>
                          <td>
                            <p className="pl-16">time</p>
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        {[1, 2, 3, 4].map((item) => (
                          <tr
                            className="text-sm leading-none text-gray-600 h-16"
                            key={uuidv4()}
                          >
                            <td className="w-1/2">
                              <div className="flex items-center">
                                <div className="w-10 h-10 bg-gray-700 rounded-sm flex items-center justify-center">
                                  <p className="text-xs font-bold leading-3 text-white">
                                    E
                                  </p>
                                </div>
                                <div className="pl-2">
                                  <p className="text-sm font-medium leading-none text-gray-800">
                                    Event
                                  </p>
                                  <p className="text-xs leading-3 text-gray-600 mt-2">
                                    Price
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="pl-16">
                              <p>type</p>
                            </td>
                            <td>
                              <p className="pl-16">to_address</p>
                            </td>
                            <td>
                              <p className="pl-16">from_address</p>
                            </td>
                            <td>
                              <p className="pl-16">time</p>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* <div className="overflow-y-auto overflow-x-hidden fixed  z-50 border justify-center items-center left-1/4 top-1/3 w-1/2 h-1/2 margin-auto bg-[#655D8A]  ">
        hello
      </div> */}

      {/* 
      
      
       my pop ups
      
      
      
      
      */}

      {!buyPopUp && bidPopUp && (
        <div
          id="bidpopup"
          className=" fixed top-1/2 left-1/4 transition duration-150 ease-in-out  ml-20 w-full sm:w-1/2"
        >
          <div className="w-full bg-white rounded shadow-2xl">
            <div className="relative bg-[#655D8A] rounded-t py-4 px-4 xl:px-8"></div>
            <div className="w-full h-full px-4 xl:px-8 py-5">
              <div className="flex items-center justify-between">
                <div
                  className="p-2 rounded-full shadow text-black"
                  onClick={() => {
                    setBidPopUp(false);
                  }}
                >
                  cancel
                </div>
              </div>
              <hr className="my-5 border border-gray-200" />
              <div className="w-full h-full pb-5 lg:pb-10">
                <div className="flex justify-between items-center">
                  <div className="flex items-center"></div>
                </div>
                <div className="py-6 flex justify-between items-center">
                  <div className="flex items-center"></div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {buyPopUp && !bidPopUp && (
        <div
          id="bidpopup"
          className=" fixed top-1/2 left-1/4 transition duration-150 ease-in-out  ml-20 w-full sm:w-1/2"
        >
          <div className="w-full bg-white rounded shadow-2xl">
            <div className="relative bg-[#655D8A] rounded-t py-4 px-4 xl:px-8"></div>
            <div className="w-full h-full px-4 xl:px-8 py-5">
              <div className="flex items-center justify-between">
                <div
                  className="p-2 rounded-full shadow text-black"
                  onClick={() => {
                    setBuyPopUp(false);
                  }}
                >
                  cancel
                </div>
              </div>
              <hr className="my-5 border border-gray-200" />
              <div className="w-full h-full pb-5 lg:pb-10">
                <div className="flex justify-between items-center">
                  <div className="flex items-center"></div>
                </div>
                <div className="py-6 flex justify-between items-center">
                  <div className="flex items-center"></div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
