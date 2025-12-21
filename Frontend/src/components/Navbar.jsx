import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    function handleLogout(){
        localStorage.removeItem("access_token")
        navigate("/login")
    }

  return (
    <nav className="w-full bg-gray-900 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo / Brand */}
        <h1 className="text-white text-xl font-semibold">
          MyBlog
        </h1>

        {/* Nav Links */}
        <ul className="flex gap-4">
          <li>
            <NavLink
                to={"/home"}
                className={({isActive})=>{
                    return `px-4 py-2 rounded-full text-white ${isActive ? "bg-blue-500" : "bg-gray-700"} hover:bg-blue-500`
                }}
                >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
                to={"/create"}
                className={({isActive})=>{
                    return `px-4 py-2 rounded-full text-white ${isActive ? "bg-blue-500" : "bg-gray-700"} hover:bg-blue-500`
                }}
                >
              Create Blog
            </NavLink>
          </li>
          <li>
            <NavLink
                to={"/about"}
                className={({isActive})=>{
                    return `px-4 py-2 rounded-full text-white ${isActive ? "bg-blue-500" : "bg-gray-700"} hover:bg-blue-500`
                }}
                
                >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
                to={"/profile"}
                className={({isActive})=>{
                    return `px-4 py-2 rounded-full text-white ${isActive ? "bg-blue-500" : "bg-gray-700"} hover:bg-blue-500`
                }}
                
                >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
                to={"/login"}
                onClick={handleLogout}
                className={({isActive})=>{
                    return `px-4 py-2 rounded-full text-white bg-gray-700 hover:bg-blue-500`
                }}
                
                >
              Logout
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};


export default Navbar;
