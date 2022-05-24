import { useContext, useEffect } from "react";
import { BsFillCartCheckFill } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";
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
  const [image, setImage] = useState("");
  const [des, setDes] = useState("");
  const [extLink, setExtLink] = useState("");
  const [attributes, setAttributes] = useState([]);
  const [nftname, setNftname] = useState("");
  const [bidPopUp, setBidPopUp] = useState(false);
  const [buyPopUp, setBuyPopUp] = useState(false);
  const [loadingHistory, setLoadingHistory] = useState(true);
  const [his, setHis] = useState([]);


  useEffect(() => {
    console.log(address, index);

    fetch(`http://127.0.0.1:1234/nft/${address}/${index}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res, "here i am");
        setMynft(res.nft);
        let t = JSON.parse(res.nft.metadata);
        // console.log(t, "des hu mai");
        setDes(t.description);
        setExtLink(t.external_url);
        setAttributes(t.attributes);
        console.log(attributes);
        setNftname(t.name);
        if (t.image != null) {
          var image = t.image;
          var condition = image.substring(0, 4);
          if (condition == "ipfs") {
            image = `https://ipfs.io/ipfs/${image.slice(7)}`;
          }
          setImage(image);
        }
      });

    fetch(`http://127.0.0.1:1234/nft/history/${address}/${index}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res, "i am histroy");
        setHis(res.nft.result);
        setLoadingHistory(false);
      });
  }, []);

  // useEffect(() => {
  //   fetch(`http://127.0.0.1:1234/nft/history/${address}/${index}`)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setHis(res.nft.result);
  //       console.log(res.nft.result, "i am histroy");
  //       setLoadingHistory(false);
  //     });
  // }, []);

  return (
    <>
      <div className="container flex flex-wrap items-center justify-between w-full mx-auto  sm:overflow-x-hidden md:overflow-x-hidden">
        <div div className="items-center w-full lg:w-full ">
          <div className="mx-auto 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9  ">
            <div className="flex flex-col items-center justify-center gap-8 lg:flex-row">
              <div className="items-center w-full sm:w-96 md:w-8/12 lg:w-6/12">
                {nftname && (
                  <h2 className="mt-4 text-3xl font-semibold leading-7 text-gray-200 lg:text-4xl lg:leading-9">
                    {nftname}
                  </h2>
                )}

                <div className="flex flex-row justify-between mt-5 ">
                  <a href={extLink} className="hover:text-black ">
                    {mynft.name && (
                      <p className="text-base font-normal leading-4 text-gray-200 underline duration-100 cursor-pointer focus:outline-none hover:underline hover:text-gray-800">
                        {mynft.name}
                      </p>
                    )}
                  </a>
                </div>

                <div className="grid grid-cols-4 gap-4 mt-6 leading-5 lg:leading-6 sm:grid-cols-2 md:grid-cols-3">
                  {attributes?.map(({ trait_type, value }) => (
                    <div
                      className="p-4  shadow-[0_35px_60px_-15px_rgba(101,92,138,0.6)] hover:bg-[rgb(101,92,138)] bg-transparent"
                      key={uuidv4()}
                    >
                      <p className="text-md text-gray-400 lg:text-xl ">
                        {trait_type}
                      </p>
                      <p className="text-gray-300 font-sm font-thin lg:text-sm ">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                {attributes.length > 0 && (
                  <div className="mt-10 lg:mt-11">
                    <hr className="w-full my-2 bg-gray-200 " />
                  </div>
                )}

                {des && <p>{des}</p>}

                {attributes.length > 0 && (
                  <button
                    onClick={() => {
                      setBuyPopUp(true);
                    }}
                    className="w-full py-5 mt-6 text-base font-medium leading-4 text-white bg-gray-800 focus:outline-none focus:ring-2 hover:bg-black focus:ring-offset-2 focus:ring-gray-800 lg:mt-10"
                  >
                    Buy Now
                  </button>
                )}

                {attributes.length > 0 && (
                  <button
                    onClick={() => {
                      setBidPopUp(true);
                    }}
                    className="w-full py-5 mt-2 text-base font-medium leading-4 text-white bg-gray-800 focus:outline-none focus:ring-2 hover:bg-black focus:ring-offset-2 focus:ring-gray-800 lg:mt-2"
                  >
                    Bid
                  </button>
                )}
              </div>

              <div className="flex flex-col w-full gap-4 sm:w-96 md:w-8/12 lg:w-1/2 lg:flex-row lg:gap-8 sm:gap-6">
                <div className="flex items-center justify-center w-full bg-transparent lg:w-full shadow-[0_80px_60px_-15px_rgba(101,92,138,0.3)]">
                  {image && <img src={image} alt="Nft image" className="" />}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full max-w-screen  sm:m-2 ">
          <div className="items-center w-full lg:w-full ">
            {loadingHistory && <Loader />}

            {!loadingHistory && (
              <div className="w-full  bg-transparent shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] ">
                <div className="px-4 py-4 md:px-10 md:py-7">
                  <div className="items-center justify-between sm:flex">
                    <div className="mt-4 sm:mt-0">
                      <div className="inline-flex items-start justify-start px-6 py-3 rounded  focus:outline-none">
                        <p className="text-2xl font-medium leading-none text-white">
                          Item Activity
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-4 pb-5 bg-transparent md:px-10 ">
                  <div className="overflow-x-auto overflow-y-scroll max-h-60">
                    <table className="w-full whitespace-nowrap">
                      <thead className="text-semibold">
                        <tr
                          className="h-16 text-xl leading-none text-black text-semibold shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] bg-[rgb(101,93,138)]"
                          key={uuidv4()}
                        >
                          <td className="w-1/2">
                            <div className="flex items-center">
                              <div className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-sm">
                                <p className="text-xs font-bold leading-3 text-white">
                                  E
                                </p>
                              </div>
                              <div className="pl-2">
                                <p className="text-xl font-bold leading-none text-black">
                                  Event
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="pl-16 font-bold ">
                            <p>Price</p>
                          </td>
                          <td>
                            <p className="pl-16 font-bold">to_address</p>
                          </td>
                          <td>
                            <p className="pl-16 font-bold">from_address</p>
                          </td>
                          <td>
                            <p className="pl-16 font-bold pr-10">time</p>
                          </td>
                        </tr>
                      </thead>

                      <tbody>
                        {his?.map((item) => (
                          <tr
                            className="h-16 text-sm leading-none text-gray-300 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] px-2"
                            key={uuidv4()}
                          >
                            <td className="w-1/2 ">
                              <div className="flex items-center">
                                <div className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-sm">
                                  <p className="text-xs font-bold leading-3 text-white">
                                    E
                                  </p>
                                </div>
                                <div className="pl-2 ">
                                  <p className="text-sm font-medium leading-none text-gray-300">
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
                              <p className="pl-16 pr-10">time</p>
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

        {!buyPopUp && bidPopUp && (
          <div
            id="bidpopup"
            className="fixed w-full ml-20 transition duration-150 ease-in-out top-1/2 left-1/4 sm:w-1/2"
          >
            <div className="w-full bg-white rounded shadow-2xl">
              <div className="relative bg-[#655D8A] rounded-t py-4 px-4 xl:px-8"></div>
              <div className="w-full h-full px-4 py-5 xl:px-8">
                <div className="flex items-center justify-between">
                  <div
                    className="p-2 text-black rounded-full shadow"
                    onClick={() => {
                      setBidPopUp(false);
                    }}
                  >
                    cancel
                  </div>
                </div>
                <hr className="my-5 border border-gray-200" />
                <div className="w-full h-full pb-5 lg:pb-10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center"></div>
                  </div>
                  <div className="flex items-center justify-between py-6">
                    <div className="flex items-center"></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {buyPopUp && !bidPopUp && (
          <div
            className="lg:w-1/3 md:1/3 bg-[rgb(101,93,138,0.4)] shadow rounded absolute top-40 left-1/3 "
            id="modal"
          >
            <div className="p-6 border-b border-gray-200 flex items-center justify-between ">
              <div className="flex items-center">
                <div className="w-11 h-11 bg-transparent rounded-sm flex items-center justify-center">
                  <BsFillCartCheckFill />
                </div>
                <div className="pl-3">
                  <p className="text-xl font-medium leading-normal text-gray-200">
                    Complete Checkout
                  </p>
                </div>
              </div>
              <div
                className="cursor-pointer"
                onClick={() => setBuyPopUp(false)}
              >
                <svg
                  width={28}
                  height={28}
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 7L7 21"
                    stroke="#4B5563"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 7L21 21"
                    stroke="#4B5563"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="p-6 border-b border-gray-200 bg-slate-100 shadow-[0_35px_60px_-10px_rgba(0,0,0,0.6)]">
              <div className="w-full flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-20  h-20 bg-transparent rounded-full hover:h-24  hover:w-24 ">
                    <img
                      src={image}
                      className="w-20 border-black border-4 h-20 bg-transparent rounded-full hover:h-24  hover:w-24  transition: ease-in-out "
                    />
                  </div>

                  <div className="pl-3">
                    <p className="text-2xl font-bold leading-normal text-black">
                      {mynft.name}
                    </p>
                    <p className="text-xs leading-3 pt-2 text-gray-600">
                      {nftname}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="pr-2  rounded flex items-center justify-between">
                    <div className="flex justify-center items-center text-black">
                      <FaEthereum />
                      <h1 className="text-xl font-bold pl-2 text-gray-600">
                        81.3
                      </h1>
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded w-6 h-7 ml-2 flex items-center justify-center">
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 2C7.45 2 7 2.45 7 3C7 3.55 7.45 4 8 4C8.55 4 9 3.55 9 3C9 2.45 8.55 2 8 2ZM8 12C7.45 12 7 12.45 7 13C7 13.55 7.45 14 8 14C8.55 14 9 13.55 9 13C9 12.45 8.55 12 8 12ZM8 7C7.45 7 7 7.45 7 8C7 8.55 7.45 9 8 9C8.55 9 9 8.55 9 8C9 7.45 8.55 7 8 7Z"
                        fill="#4B5563"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 flex items-center justify-between">
              <div className="bg-transparent rounded p-3">
                <div className="flex items-center">
                  <div className="pr-2 bg-transparent rounded flex items-center justify-between">
                    <div className="w-6 h-7 mr-3 flex items-center justify-center text-black font-bold text-2xl">
                      Total
                    </div>

                    <div className="flex justify-center items-center ml-2">
                      <FaEthereum />
                      <h1 className="text-xl font-bold ">81.3</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <button className="text-xs font-semibold py-3 px-6 bg-gray-300 rounded focus:outline-none hover:bg-gray-400 leading-3 text-black">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
