import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;


  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/"); 
  };

  let buttons;

  if (pathname === "/login") {
    buttons = (
      <>
        <button
          onClick={() => navigate("/")}
          className="bg-white text-indigo-600 font-semibold py-1 px-4 rounded hover:bg-indigo-100 transition"
        >
          Home
        </button>
        <button
          onClick={() => navigate("/signup")}
          className="bg-white text-indigo-600 font-semibold py-1 px-4 rounded hover:bg-indigo-100 transition"
        >
          Signup
        </button>
      </>
    );
  } else if (pathname === "/signup") {
    buttons = (
      <>
        <button
          onClick={() => navigate("/")}
          className="bg-white text-indigo-600 font-semibold py-1 px-4 rounded hover:bg-indigo-100 transition"
        >
          Home
        </button>
        <button
          onClick={() => navigate("/login")}
          className="bg-white text-indigo-600 font-semibold py-1 px-4 rounded hover:bg-indigo-100 transition"
        >
          Login
        </button>
      </>
    );
  } else if (pathname === "/dashboard") {
    buttons = (
      <>
        <button
          onClick={() => navigate("/")}
          className="bg-white text-indigo-600 font-semibold py-1 px-4 rounded hover:bg-indigo-100 transition"
        >
          Home
        </button>
        <button
          onClick={handleLogout}
          className="bg-white text-indigo-600 font-semibold py-1 px-4 rounded hover:bg-indigo-100 transition"
        >
          Logout
        </button>
      </>
    );
  } else {
 
    buttons = (
      <>
        <button
          onClick={() => navigate("/home")}
          className="bg-white text-indigo-600 font-semibold py-1 px-4 rounded hover:bg-indigo-100 transition"
        >
          Home
        </button>
        <button
          onClick={() => navigate("/login")}
          className="bg-white text-indigo-600 font-semibold py-1 px-4 rounded hover:bg-indigo-100 transition"
        >
          Login
        </button>
        <button
          onClick={() => navigate("/signup")}
          className="bg-white text-indigo-600 font-semibold py-1 px-4 rounded hover:bg-indigo-100 transition"
        >
          Signup
        </button>
      </>
    );
  }

  return (
    <nav className="bg-indigo-600 h-16 flex items-center justify-between px-6 shadow-md">
      <h1 className="text-white text-2xl font-bold">Github User Fetching</h1>
      <div className="flex gap-4">{buttons}</div>
    </nav>
  );
};

export default Navbar;
