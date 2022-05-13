import "../../styles/common.css";

export const InfoBanner = () => {
  return (
    <>
      <div className="overflow-y-hidden ">
        <div className="mx-auto container f-f-p px-4 xl:px-0 py-24">
          <h1 className="focus:outline-none text-center text-3xl lg:text-4xl font-extrabold lg:leading-9 tracking-wider text-gray-200">
            How it works?
          </h1>
          <div className="md:mt-24 f-f-p">
            <div className=" md:flex justify-center w-full">
              <div className="flex flex-col items-center md:items-end md:pr-12 md:border-r-4 border-gray-300 relative md:w-1/2">
                <div aria-label="Create a Wallet" role="img">
                  <img
                    className="focus:outline-none mt-10"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg5.svg"
                    alt="how it work"
                  />
                </div>

                <div className="flex mt-12 flex-col items-center lg:items-end md:w-8/12">
                  <h1 className="focus:outline-none text-xl font-bold leading-5">
                    Add Your Nfts
                  </h1>
                  <h2 className="focus:outline-none text-gray-500 mt-3 pl-3 text-center md:text-right text-base leading-6 tracking-wide">
                    Upload your work (image, video, audio, or 3D art), add a
                    title and description, and customize your NFTs with
                    properties, stats, and unlockable content..{" "}
                  </h2>
                </div>
                <div aria-label="transactions" role="img">
                  <img
                    className="focus:outline-none mt-24"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg3.svg"
                    alt="list nfts"
                  />
                </div>

                <img
                  className="hidden md:block absolute right-0 top-0 -mt-2 -mr-1"
                  src="https://cdn.tuk.dev/assets/components/111220/Fs7/line.png"
                  alt="nft exchange"
                />
              </div>

              <div className="flex flex-col items-center md:items-start md:pl-12 lg:border-gray-400 mt-20 md:mt-0 md:w-1/2">
                <div className="flex mt-6 flex-col items-center md:items-start md:w-8/12">
                  <h1 className="focus:outline-none text-xl font-bold leading-5">
                    Create a Wallet
                  </h1>
                  <h2 className="focus:outline-none text-gray-500 mt-3 text-base leading-6 tracking-wide">
                    Once you’ve set up your wallet of choice, connect it to
                    OpenSea by clicking the wallet icon in the top right corner.{" "}
                  </h2>
                </div>

                <div aria-label="wallet" role="img">
                  <img
                    className="focus:outline-none mt-32"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg5.svg"
                    alt="wallet"
                  />
                </div>

                <div className="flex mt-6 flex-col items-center md:items-start md:w-8/12">
                  <h1 className="focus:outline-none text-xl font-bold leading-5">
                    List them for Sale
                  </h1>
                  <h2 className="focus:outline-none text-gray-500 mt-3 text-base leading-6 tracking-wide">
                    Choose between auctions, fixed-price listings, and
                    declining-price listings. You choose how you want to sell
                    your NFTs, and we help you sell them!
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
