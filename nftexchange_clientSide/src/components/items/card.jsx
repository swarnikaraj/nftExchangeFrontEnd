import { MdFavoriteBorder } from "react-icons/md";
import { useState, useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Dropdown } from "../profile/dropdown";
import { Searchbox } from "../profile/searchbox";
import { FaEthereum } from "react-icons/fa";
import { contractContext } from "../../contexts/contractsContext";
import { filterContext } from "../../contexts/filterTrait";
import InfiniteScroll from "react-infinite-scroll-component";

export const Cards = ({ rows }) => {
  const [clicked, setClicked] = useState(false);
  const [nfts, setNfts] = useState([]);

  const { contractAddress } = useContext(contractContext);
  const { filterString, filterStrRef } = useContext(filterContext);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResult] = useState(0);

  useEffect(() => {
    fetchAndSetNft();
  }, [contractAddress, filterStrRef.current, page]);

  async function fetchAndSetNft() {
    let url = `http://127.0.0.1:1234/nft/${contractAddress}?page=${page}&size=16`;

    console.log(filterStrRef.current, "filterd string mai bs yhi pr hu");

    let urlFinal = filterStrRef.current
      ? url + `?${filterStrRef.current}`
      : url;
    setLoading(true);
    console.log(urlFinal, "i am final");
    const data = await fetch(urlFinal);
    const parsedData = await data.json();

    setNfts(parsedData.nft);
    setTotalResult(parsedData.totalResults);
    setLoading(false);
  }

  async function fetchMoreData() {
    setPage(page + 1);

    let url = `http://127.0.0.1:1234/nft/${contractAddress}?page=${page}&size=16`;

    console.log(filterStrRef.current, "filterd string mai bs yhi pr hu");

    let urlFinal = filterStrRef.current
      ? url + `?${filterStrRef.current}`
      : url;
    setLoading(true);
    console.log(urlFinal, "i am final");
    const data = await fetch(urlFinal);
    const parsedData = await data.json();

    setNfts(nfts.concat(parsedData.nft));

    setTotalResult(parsedData.totalResults);
    setLoading(false);
  }

  return (
    <>
      <div className="flex flex-col md:w-3/4">
        <div className="flex flex-wrap justify-center pl-4 pr-4 border-t ">
          <div className="w-1/2 m-1 mr-2">
            <Searchbox />
          </div>
          <div className="w-1/4 m-1 mr-2">
            <Dropdown
              optionName={"Single item"}
              dataArr={["All items", "bundles"]}
            />
          </div>
          <div className="w-1/4 m-1 mr-2">
            <Dropdown
              optionName={"Price: Low to High"}
              dataArr={["Recently created", "Recently Sold", "Recently open"]}
              width={"w-full"}
            />
          </div>
          <div></div>
        </div>

        <InfiniteScroll
          dataLength={nfts.length}
          next={fetchMoreData}
          hasMore={nfts.length !== totalResults}
          loader={<h4 style={{ margin: "10px", color: "blue" }}>Loading...</h4>}
        >
          <div className="ml-5 mr-5 w-8/10 ">
            <div className="container px-4 mx-auto my-12 border border-gray-200 md:px-3">
              <div className="flex flex-wrap -mx-1 lg:-mx-4">
                {nfts?.map((data) => (
                  <div
                    className="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
                    key={uuidv4()}
                  >
                    <article className="overflow-hidden rounded-lg shadow-lg">
                      <a href="#">
                        <img
                          alt="Placeholder"
                          className="block w-full h-auto"
                          src={data.imageURI}
                        />
                      </a>

                      <div className="flex items-center justify-between px-4 pt-2 leading-tight">
                        <h1 className="text-lg">
                          <a
                            className="text-black no-underline hover:underline"
                            href="#"
                          >
                            {data.name}
                          </a>
                        </h1>

                        <div className="flex items-center text-sm text-grey-darker">
                          <FaEthereum />
                          <span className="ml-1">0.933</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between px-4 py-1 leading-none">
                        <a
                          className="flex items-center text-black no-underline hover:underline"
                          href="#"
                        >
                          <p className="text-sm ">
                            {JSON.parse(data.tokenURI).name}
                          </p>
                        </a>
                        <a
                          className="no-underline text-grey-darker hover:text-red-dark"
                          href="#"
                        >
                          <span className="text-sm">45</span>
                          {/* <MdFavoriteBorder /> */}
                        </a>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};
