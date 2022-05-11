import { Link } from "react-router-dom";
import "../../styles/common.css";

export const Btn2 = () => {
  return (
    <>
      <Link
        to="/"
        className="bg-[rgb(101,92,138)] hover:bg-[rgb(145,118,255)] text-white py-2 px-4 rounded inline-flex items-center"
      >
        Button
      </Link>
    </>
  );
};
