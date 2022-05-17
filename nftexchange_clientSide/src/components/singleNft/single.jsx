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

    fetch(`http://127.0.0.1:1234/nft/history/${address}/${index}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res, "i am histroy");
        setLoadingHistory(false);
      });
  }, [address, index]);

  useEffect(() => {
    fetch(`http://127.0.0.1:1234/nft/history/${address}/${index}`)
      .then((res) => res.json())
      .then((res) => {
        setHis(res.nft.result);
        console.log(res.nft.result, "i am histroy");
        setLoadingHistory(false);
      });
  }, []);

  return (
    <>
      < div className=" w-full border-2 sm:overflow-x-hidden md:overflow-x-hidden container flex flex-wrap justify-between items-center mx-auto">
        <div div className="w-full items-center lg:w-full  ">
          <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 mx-auto border-5 ">
            <div className="flex justify-center items-center lg:flex-row flex-col gap-8">
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
                      <p className="font-sm lg:text-sm text-gray-200 ">
                        {value}
                      </p>
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
                  className="focus:outline-none focus:ring-2 hover:bg-black focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-gray-800 w-full py-5 lg:mt-10 mt-6"
                >
                  Buy Now
                </button>

                <button
                  onClick={() => {
                    setBidPopUp(true);
                  }}
                  className="focus:outline-none focus:ring-2 hover:bg-black focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-gray-800 w-full py-5 lg:mt-2 mt-2"
                >
                  Bid
                </button>
              </div>

              <div className=" w-full sm:w-96 md:w-8/12  lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4 ">
                <div className=" w-full lg:w-8/12 bg-gray-100 flex justify-center items-center">
                  <img src={mynft.imageURI} alt="Nft image" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex  justify-center items-center w-full m-8">
          <div className="w-full items-center lg:w-full  ">
            {loadingHistory && <Loader />}

            {!loadingHistory && (<div className=" w-full border-1 ">
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

                <div className="bg-white px-4 md:px-10 pb-5 ">
                  <div className="overflow-x-auto  overflow-y-scroll max-h-60">
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
                                <p className="text-sm leading-none text-gray-800 font-bold">
                                  Event
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="pl-16 font-bold">
                            <p>Price</p>
                          </td>
                          <td>
                            <p className="pl-16 font-bold">to_address</p>
                          </td>
                          <td>
                            <p className="pl-16 font-bold">from_address</p>
                          </td>
                          <td>
                            <p className="pl-16 font-bold">time</p>
                          </td>
                        </tr>
                      </thead>

                      <tbody>
                        {his?.map((item) => (
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
                                <div className="pl-2 ">
                                  <p className="text-sm font-medium leading-none text-gray-800">
                                    Event
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="pl-16">
                              <p>{item.amount}</p>
                            </td>
                            <td>
                              <p className="pl-16">
                                {item.to_address.slice(0, 6)}
                              </p>
                            </td>
                            <td>
                              <p className="pl-16">
                                {item.from_address.slice(0, 6)}
                              </p>
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
        {/* my pop ups */}

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
      </div>
    </>
  );
};
