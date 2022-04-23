import { Cards } from "./card";
import { Sidebar } from "./sideBar";

export const ItemList = () => {
  return (
    <>
      <div className="flex justify-center flex-wrap">
        <Sidebar />
        <Cards dataArr={[1, 2, 3, 4, 5, 6]} />
      </div>
    </>
  );
};
