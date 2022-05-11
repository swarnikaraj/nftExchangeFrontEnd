import "../../styles/common.css";
import { Searchbox } from "../searchBar/search";

import { BackgroundAnimation } from "./Animation";
import { Btn1 } from "./btn1";
import { Btn2 } from "./btn2";
export const Banner1 = (props) => {
  const commonStyles =
    "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] font-semibold flex justify-center items-center border-[8px] text-gradient2 border-900 text-sm white-glassmorphism ";
  return (
    <>
      <div className="w-full flex md:justify-center sm:justify-center justify-between items-center p-2">
        <Searchbox />
      </div>
      <div className="h-40 -mt-20">
        <BackgroundAnimation />
      </div>

      <div className="w-full flex md:justify-center sm:justify-center justify-between items-center p-2  -mt-100">
        <div className="sm:w-full md:w-2/5 ">
          <h1 className="font-extrabold  text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 ">
            NFT Exchange Space
          </h1>
          <h1 className="font-extrabold  text-transparent text-3xl bg-clip-text bg-gradient-to-r from-gray-200 to-green-200 p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, labore.
          </h1>

          <p className="p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            quaerat!
          </p>
          <div>
            <Btn2 />
          </div>
        </div>

        <div className="sm:w-full md:w-2/5  ">
          <div class="bg-white rounded-lg shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1600054800747-be294a6a0d26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80"
              alt=""
              class="rounded-t-lg"
            />
            <div class="p-6">
              <h2 class="font-bold mb-2 text-2xl text-purple-800">
                Beanz Official
              </h2>
              <p class="text-purple-700 mb-2">by azuki</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
