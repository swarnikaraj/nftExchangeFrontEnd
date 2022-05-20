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
  const [image, setimage] = useState("");
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
        console.log(res.nft);
        setMynft(res.nft);
        let t = JSON.parse(res.nft.metadata);

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
          setimage(image);
        }
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
      <div className="container flex flex-wrap items-center justify-between w-full mx-auto border-2 sm:overflow-x-hidden md:overflow-x-hidden">
        <div div className="items-center w-full lg:w-full ">
          <div className="mx-auto 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 border-5 ">
            <div className="flex flex-col items-center justify-center gap-8 lg:flex-row">
              <div className="items-center w-full sm:w-96 md:w-8/12 lg:w-6/12">
                <h2 className="mt-4 text-3xl font-semibold leading-7 text-gray-200 lg:text-4xl lg:leading-9">
                  {nftname}
                </h2>

                <div className="flex flex-row justify-between mt-5 ">
                  <a href={extLink} className="hover:text-black ">
                    <p className="text-base font-normal leading-4 text-gray-200 underline duration-100 cursor-pointer focus:outline-none hover:underline hover:text-gray-800">
                      {mynft.name}
                    </p>
                  </a>
                </div>

                <div className="grid grid-cols-4 gap-4 mt-6 leading-5 lg:leading-6 sm:grid-cols-2 md:grid-cols-3">
                  {attributes?.map(({ trait_type, value }) => (
                    <div className="p-2 border" key={uuidv4()}>
                      <p className="text-xl font-semibold text-gray-200 lg:text-xl ">
                        {trait_type}
                      </p>
                      <p className="text-gray-200 font-sm lg:text-sm ">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 lg:mt-11">
                  <hr className="w-full my-2 bg-gray-200 " />
                </div>

                <p>{des}</p>

                <button
                  onClick={() => {
                    setBuyPopUp(true);
                  }}
                  className="w-full py-5 mt-6 text-base font-medium leading-4 text-white bg-gray-800 focus:outline-none focus:ring-2 hover:bg-black focus:ring-offset-2 focus:ring-gray-800 lg:mt-10"
                >
                  Buy Now
                </button>

                <button
                  onClick={() => {
                    setBidPopUp(true);
                  }}
                  className="w-full py-5 mt-2 text-base font-medium leading-4 text-white bg-gray-800 focus:outline-none focus:ring-2 hover:bg-black focus:ring-offset-2 focus:ring-gray-800 lg:mt-2"
                >
                  Bid
                </button>
              </div>

              <div className="flex flex-col w-full gap-4 sm:w-96 md:w-8/12 lg:w-6/12 lg:flex-row lg:gap-8 sm:gap-6">
                <div className="flex items-center justify-center w-full bg-gray-100 lg:w-8/12">
                  <img src={image} alt="Nft image" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full m-8">
          <div className="items-center w-full lg:w-full ">
            {loadingHistory && <Loader />}

            {!loadingHistory && (
              <div className="w-full border-1">
                <div className="px-4 py-4 md:px-10 md:py-7">
                  <div className="items-center justify-between sm:flex">
                    <div className="mt-4 sm:mt-0">
                      <div className="inline-flex items-start justify-start px-6 py-3 rounded sm:ml-3 focus:outline-none">
                        <p className="text-sm font-medium leading-none text-white">
                          Item Activity
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-4 pb-5 bg-white md:px-10 ">
                  <div className="overflow-x-auto overflow-y-scroll max-h-60">
                    <table className="w-full whitespace-nowrap">
                      <thead className="text-semibold">
                        <tr
                          className="h-16 text-sm leading-none text-gray-600 text-semibold"
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
                                <p className="text-sm font-bold leading-none text-gray-800">
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
                            className="h-16 text-sm leading-none text-gray-600"
                            key={uuidv4()}
                          >
                            <td className="w-1/2">
                              <div className="flex items-center">
                                <div className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-sm">
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
        {/ my pop ups /}

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
                      setBuyPopUp(false);
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
      </div>
    </>
  );
};
