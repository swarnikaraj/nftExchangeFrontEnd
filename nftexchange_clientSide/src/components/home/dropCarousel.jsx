import "../../styles/common.css";
import React from "react";
export const Carousel = () => {
  return (
    <>
      <div className="mx-auto container flex justify-center items-center py-12 px-4 sm:px-6 2xl:px-0 mt-4">
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0">
          <div className="w-80 sm:w-auto flex flex-col justify-start items-start">
            <div>
              <p className="text-3xl xl:text-4xl font-semibold leading-9 text-gray-200">
                Notable Drops Lorems
              </p>
            </div>
            <div className="mt-4 lg:w-4/5 xl:w-3/5">
              <p className="text-base leading-6 text-gray-600">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
                voluptates!
              </p>
            </div>

            <div className="mt-16 w-full">
              <button className="px-4 bg-gray-900 flex justify-between items-center w-full lg:w-72 h-14 text-white hover:bg-gray-700">
                <p className="text-xl font-medium leading-5">See More</p>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.66663 16H25.3333"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 21.3333L25.3333 16"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 10.6667L25.3333 16"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row jusitfy-center items-center sm:space-x-5 xl:space-x-8 space-y-4 sm:space-y-0">
            <div>
              <img
                className="block h-60 "
                src="https://lh3.googleusercontent.com/51ADjK-OruSkpYwOhLbW5bjc4nCwgMJG_qVx8-NbWpyUJLz_DjHZ9_1zEDTzeWTXqWa2IEJrSEOfbN02u_SJagDEpN2igIUGHtRBzA=s550"
                alt="notable drops"
              />
            </div>

            <div className="flex flex-col justify-center items-center space-y-4 sm:space-y-0 sm:space-y-5 lg:space-y-5 xl:space-y-8">
              <div>
                <img
                  className="block h-60 lg:w-80"
                  src="https://lh3.googleusercontent.com/51ADjK-OruSkpYwOhLbW5bjc4nCwgMJG_qVx8-NbWpyUJLz_DjHZ9_1zEDTzeWTXqWa2IEJrSEOfbN02u_SJagDEpN2igIUGHtRBzA=s550"
                  alt="notable drops"
                />
              </div>

              <div>
                <img
                  className="block h-60 lg:w-80"
                  src="https://lh3.googleusercontent.com/51ADjK-OruSkpYwOhLbW5bjc4nCwgMJG_qVx8-NbWpyUJLz_DjHZ9_1zEDTzeWTXqWa2IEJrSEOfbN02u_SJagDEpN2igIUGHtRBzA=s550"
                  alt="notable drops"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
