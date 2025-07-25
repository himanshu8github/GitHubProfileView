import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import AppRoutes from "./AppRoutes";

const Home = () => {



    
      
 return (
    <Router>
      <Navbar />
      <AppRoutes />
    </Router>
  );
}

export default Home;