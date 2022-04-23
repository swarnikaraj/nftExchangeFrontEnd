import { useEffect, useState } from "react";

export const Searchbox = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log(text);
  }, [text]);

  return (
    <>
      <input
        placeholder="Search Items, collections and accounts"
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
        className="border border-gray-600 bg-gray-100 w-3/6 pt-2 pb-2 pl-4 pr-4"
      />
    </>
  );
};
