import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import paymentBg from "../assets/bg.png";

const Payment = () => {
  const [method, setMethod] = useState("cod");
  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();
    // You can add payment logic here
    if (method === "online") {
      // Simulate online payment success
      setTimeout(() => navigate("/success"), 1000);
    } else {
      // Cash on Delivery
      navigate("/success");
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={{
        backgroundImage: `url(${paymentBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Choose Payment Method</h2>
        <form onSubmit={handlePayment} className="flex flex-col gap-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="payment"
              value="cod"
              checked={method === "cod"}
              onChange={() => setMethod("cod")}
            />
            Cash on Delivery
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="payment"
              value="online"
              checked={method === "online"}
              onChange={() => setMethod("online")}
            />
            Online Payment
          </label>
          <button
            type="submit"
            className="bg-green-500 text-white font-bold py-2 rounded-lg hover:bg-green-600"
          >
            Proceed
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;