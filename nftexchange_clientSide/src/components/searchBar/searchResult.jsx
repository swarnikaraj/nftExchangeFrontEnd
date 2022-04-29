import { useEffect, useState } from "react";

export const SearchResult = ({ res }) => {
  const [response, setResponse] = useState([]);
  useEffect(() => {
    setResponse(res);
  }, [res]);
  return (
    <>
      <div>
        {response?.map((item) => (
          <div>{item.name}</div>
        ))}
      </div>
    </>
  );
};
