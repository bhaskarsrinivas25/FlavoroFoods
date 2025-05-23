import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";
import { logout } from "../redux/slices/AuthSlice";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  // Live time state
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className="flex flex-col lg:flex-row justify-between py-3 mx-6 mb-10">
      <div>
        <div className="flex items-center gap-4">
          <h3 className="text-xl font-bold text-gray-600">
            {new Date().toUTCString().slice(0, 16)}
          </h3>
          <span className="text-lg text-gray-500 font-semibold">
            {time.toLocaleTimeString()}
          </span>
        </div>
        <h1 className="text-2xl font-bold ">Flavoro Foods</h1>
      </div>
      <div className="flex gap-4 items-center">
        <input
          type="search"
          name="search"
          placeholder="Search for food"
          autoComplete="off"
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="p-2 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[15vw]"
        />
        {isAuthenticated && (
          <>
            <span className="font-bold text-gray-1000">
              Hello Flavoro Customer
            </span>
            <button
              onClick={handleLogout}
              className="px-3 py-2 bg-red-500 text-white rounded-lg font-bold"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;