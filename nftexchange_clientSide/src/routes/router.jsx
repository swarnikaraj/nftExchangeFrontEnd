import { Routes, Route } from "react-router-dom";

import { Nav } from "../components/navbar/navbar";
import { Profile } from "../components/profile/profile";

import { HomePage } from "../components/home/homePage";
import { SingleNft } from "../components/singleNft/single";
import { Account } from "../components/account/account";
import { Login } from "../components/auth/login";
import { PrivateRoute } from "../components/auth/privateRouter";

export const Router = () => {
  return (
    <>
      <Routes>
        {/* <Route
          path="/account"
          element={
            <PrivateRoute>
              <Account />
            </PrivateRoute>
          }
        /> */}

        <Route path="/collection/:address" element={<Profile />} />

        <Route path="/collection/:address/:index" element={<SingleNft />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/account" element={<Account />} />

        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </>
  );
};
