import { Routes, Route } from "react-router-dom";

import { Nav } from "../components/navbar/navbar";
import { Profile } from "../components/profile/profile";

import { SingleProduct } from "../components/singleNft/single";
import { HomePage } from "../components/home/homePage";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/single" element={<SingleProduct />} />
        <Route path="/" element={<HomePage />} />

        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </>
  );
};
