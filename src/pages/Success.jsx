import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import successBg from "../assets/bg1.png"; 

const Success = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div
      className="flex flex-col items-center justify-center h-screen"
      style={{
        backgroundImage: `url(${successBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {loading ? (
        <PropagateLoader color="#36d7b7" />
      ) : (
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-semibold mb-4 text-center text-black">
            Order Successful!
          </h2>
          <p className="text-black mb-4">Your order has been sucessfully placed</p>
          <button
            onClick={() => navigate("/track")}
            className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600"
          >
            Track Order
          </button>
        </div>
      )}
    </div>
  );
};

export default Success;