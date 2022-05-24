import { MdFavoriteBorder } from "react-icons/md";
import { useState, useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Dropdown } from "../profile/dropdown";
import { Searchbox } from "../searchBar/search";
import { FaEthereum } from "react-icons/fa";
import { contractContext } from "../../contexts/contractsContext";
import { singleNftContext } from "../../contexts/singleNft";
import { filterContext } from "../../contexts/filterTrait";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export const Cards = ({ rows }) => {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();
  const [nfts, setNfts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResult] = useState(0);
  const [arr, setArr] = useState([]);
  const [filters, setFilters] = useState([]);
  const { contractAddress } = useContext(contractContext);
  const { nft, addNft } = useContext(singleNftContext);

  const { filterString, updateFilterString } = useContext(filterContext);

  useEffect(() => {
    fetchAndSetNft();
    console.log("i am running on chngind address");
  }, [contractAddress, filterString, page]);

  async function fetchAndSetNft() {
    let url = `http://127.0.0.1:1234/nft/${contractAddress}?`;

    console.log(filterString, "filterd string mai bs yhi pr hu");

    let urlFinal = filterString
      ? url + `${filterString}` + `&page=${page}&size=15`
      : url + `&page=${page}&size=15`;
    setLoading(true);
    console.log(urlFinal, "i am final");
    const data = await fetch(urlFinal);
    const parsedData = await data.json();
    console.log(37, parsedData);
    setNfts(parsedData.nft);
    console.log(nfts, "39");

    setTotalResult(parsedData.totalResults);
    setLoading(false);
  }

  async function fetchMoreData() {
    setPage(page + 1);

    let url = `http://127.0.0.1:1234/nft/${contractAddress}`;

    console.log(filterString, "filterd string mai bs yhi pr hu");

    let urlFinal = filterString
      ? url + `?${filterString}` + `&page=${page}&size=15`
      : url + `&page=${page}&size=15`;
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
              {nfts?.map((data) => (
                <div
                  className="w-full  px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4  dark:bg-transparent-800"
                  key={uuidv4()}
                >
                  <Link to={`/collection/${data.address}/${data.index}`}>
                    <article className="overflow-hidden rounded-lg shadow-lg shadow-[rgb(101,93,138,0.4)] cursor-pointer">
                      <img
                        alt="Placeholder"
                        className="block w-full h-auto"
                        src={data.imageURI}
                      />

                      <div className="flex items-center justify-between px-4 pt-2 leading-tight ">
                        <h1 className="text-lg text-gray-200 no-underline hover:underline">
                          {data.name}
                        </h1>

                        <div className="flex items-center text-sm text-grey-darker">
                          <FaEthereum />
                          <span className="ml-1">0.933</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between px-4 py-1 leading-none">
                        <p className="text-sm ">
                          {data.index}
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
