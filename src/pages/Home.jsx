import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
// import AppRoutes from "./AppRoutes";

const Home = () => {

 return (
    <div className="flex flex-col justify-center items-center p-8 bg-slate-900 text-white h-screen ">
      <h2 className="text-7xl font-bold ">
        Welcome to Github Profile View
      </h2>
      <h4 className="text-2xl">
        Now, you can find anyone with their GitHub username
      </h4>
    </div>
  );
}

export default Home;