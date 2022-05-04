import { Routes, Route } from "react-router-dom";

import { Nav } from "../components/navbar/navbar";
import { Profile } from "../components/profile/profile";


export const Router=()=>{

  return (
      <>
      <Routes>

        <Route path="/profile" element={<Profile/>} />
        
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>


      </>
  )






}