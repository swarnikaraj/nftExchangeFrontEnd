import { Link } from "react-router-dom";
import "../../styles/common.css";

export const Btn1 = () => {
  return (
    <>
      <Link
        to="/"
        className="bg-[#343751] hover:bg-gray-200 text-[#50d71e] px-4 rounded inline-flex items-center"
      >
        Button
      </Link>
    </>
  );
};
