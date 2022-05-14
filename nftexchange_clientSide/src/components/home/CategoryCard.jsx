import "../../styles/common.css";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { v4 as uuidv4 } from "uuid";
import { contractContext } from "../../contexts/contractsContext";
import React from "react";
import { profileContext } from "../../contexts/profileContext";
import { MdFaceRetouchingOff } from "react-icons/md";
import { Link } from "react-router-dom";
export const CatCard = () => {
  const { contractAddress, addContractAddress } = useContext(contractContext);
  
  const { profile, addProfile } = useContext(profileContext);
  const [contracts, setContracts] = useState([]);
  const navigate = useNavigate();
  async function addimg(obj, address) {
    const res = await fetch(
      `https://api.opensea.io/api/v1/asset_contract/${address}`
    );
    const data = await res.json();
    obj.img = data.image_url;

    setContracts([...contracts, obj]);
    console.log(obj, "mjhe image url add ho gya");
  }

  useEffect(() => {
    fetch("http://localhost:1234/contract")
      .then((res) => res.json())
      .then((res) => {
        const arr = res.contract;

        console.log(arr, " ia m arr");

        for (let i = 0; i < arr.length; i++) {
          let add = arr[i].address;
          fetch(`https://api.opensea.io/api/v1/asset_contract/${add}`)
            .then((res) => res.json())
            .then((res) => {
              arr[i].img = res.image_url;
              console.log(arr[i], "edit ho rha hu mai to");
              setContracts([...arr]);
            });
        }

        console.log(arr, "i am edited arr");
        console.log(contracts, "edited contracts");
      });
  }, []);

 

  return (
    <>
      <div>
        <div className="container flex justify-center mx-auto pt-16">
          <div>
            <p className="text-gray-200 font-extrabold text-3xl text-center  pb-3">
              Browse By Contracts
            </p>
          </div>
        </div>

        <div className="w-full  px-10 pt-10">
          <div className="container mx-auto">
            <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
              {contracts?.map((item) => (
                <div
                  className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5 cursor-pointer"
                  key={uuidv4()}
                  
                >
                  <div className="rounded overflow-hidden shadow-md bg-[#655D8A]">
                  <Link to={`/profile/${item.address}`}>
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
                      <div className="text-gray-200 text-sm text-center font-bold">
                       
                        <p>{item.name}</p>
                        
                      </div>
                     
                    </div>
                    </Link>
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
