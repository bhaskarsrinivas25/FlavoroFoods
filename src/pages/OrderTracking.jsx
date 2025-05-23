import React, { useEffect, useState } from "react";
import trackingBg from "../assets/bg1.png"; 
const steps = [
  "Order Placed",
  "Preparing Food",
  "Out for Delivery",
  "Delivered"
];

const OrderTracking = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (currentStep < steps.length - 1) {
      const timer = setTimeout(() => setCurrentStep(currentStep + 1), 2000);
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={{
        backgroundImage: `url(${trackingBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-600">Order Tracking</h2>
        <ol className="relative border-l border-gray-300 ml-4 mb-8">
          {steps.map((step, idx) => (
            <li key={step} className="mb-8 ml-6">
              <span
                className={`absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full
                  ${idx <= currentStep ? "bg-green-500 text-white" : "bg-gray-300 text-gray-600"}
                `}
              >
                {idx + 1}
              </span>
              <span className={`font-semibold ${idx <= currentStep ? "text-green-700" : "text-gray-500"}`}>
                {step}
              </span>
              {idx === currentStep && (
                <div className="text-xs text-gray-400 mt-1">In progress...</div>
              )}
              {idx < currentStep && (
                <div className="text-xs text-green-400 mt-1">Completed</div>
              )}
            </li>
          ))}
        </ol>
        {currentStep === steps.length - 1 && (
          <div className="text-center text-green-600 font-bold mt-4">
            Your order has been delivered! Enjoy your meal.
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderTracking;