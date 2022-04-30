import { useEffect, useState } from "react";

export const SearchResult = ({ res }) => {
  const [response, setResponse] = useState([]);
  useEffect(() => {
    setResponse(res);
    console.log(res);
  }, [res]);
  return (
    <>
      <div>
        <span>response</span>
        {response?.map((item) => (
          <div className="w-50 h-50 bg-cyan-800">
            <div>search results</div>
            <div>{item.name}</div>
          </div>
        ))}
      </div>
    </>
  );
};
