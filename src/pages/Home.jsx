import React from "react";
import Navbar from "../components/Navbar";
import CategoryMenu from "../components/CategoryMenu";
import FoodItems from "../components/FoodItems";
import Cart from "../components/Cart";
import menuBg from "../assets/bg1.png";

const Home = () => {      
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: `url(${menuBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Navbar />
      <CategoryMenu />
      <FoodItems />
      <Cart />
    </div>
  );
};

export default Home;