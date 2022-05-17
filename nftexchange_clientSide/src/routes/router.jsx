import { Routes, Route } from "react-router-dom";

import { Nav } from "../components/navbar/navbar";
import { Profile } from "../components/profile/profile";


import { HomePage } from "../components/home/homePage";
import { SingleNft } from "../components/singleNft/single";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/collection/:address" element={<Profile />} />
        <Route path="/collection/:address/:index" element={<SingleNft />} />
        <Route path="/" element={<HomePage />} />

        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </>
  );
};
