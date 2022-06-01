import { FaEthereum } from "react-icons/fa";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
export const CollectedCard = ({ collects }) => {
  return (
    <>
      <div className="w-full ">
        {/* <InfiniteScroll
          dataLength={nfts.length}
          next={fetchMoreData}
          hasMore={nfts.length !== totalResults}
          loader={<h4 style={{ margin: "10px", color: "blue" }}>Loading...</h4>}
          scrollableTarget="scrollableDiv"
        > */}
        <div className="ml-5 mr-5 w-8/10 ">
          <div className="container px-4 mx-auto   md:px-3">
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
              {collects?.map((data) => (
                <div
                  className="w-full  px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4  dark:bg-transparent-800"
                  key={uuidv4()}
                >
                  <Link to="">
                    <article className="overflow-hidden rounded-lg shadow-lg shadow-[rgb(101,93,138,0.4)] cursor-pointer">
                      <img
                        alt="Placeholder"
                        className="block w-full h-auto"
                        src={data.token_uri}
                      />

                      <div className="flex items-center justify-between px-4 pt-2 leading-tight ">
                        <h1 className="text-lg text-gray-200 no-underline hover:underline">
                          {data.name}
                        </h1>

                        <div className="flex items-center text-sm text-grey-darker">
                          <FaEthereum />
                          <span className="ml-1">0.399</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between px-4 py-1 leading-none">
                        <p className="text-sm ">
                          tokenURI name
                          {/* {JSON.parse(data.tokenURI).name} */}
                        </p>

                        <span className="text-sm">45</span>
                      </div>
                    </article>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* </InfiniteScroll> */}
      </div>
    </>
  );
};
