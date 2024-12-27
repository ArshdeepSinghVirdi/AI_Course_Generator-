"use client";
import React, { useState } from "react";
import Script from "next/script";

const Upgrade = () => {
  const AMOUNT = 1500;
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async () => {
    setIsProcessing(true);

    try {
      const response = await fetch("/api", { method: "POST" });
      const data = await response.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: AMOUNT*100,
        currency: "INR",
        name: "CourseSphere",
        description:
          "Your ultimate destination for mastering any course with Artificial Intelligence!",
        order_id: data.orderId,
        handler: function (response) {
          console.log("Payment Successful", response);
        },
        prefill: {
          name: "John Doe",
          email: "johndoe@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#6B46C1", 
        },
      };
      const rzpl = new window.Razorpay(options);
      rzpl.open();
    } catch (error) {
      console.error("Payment Failed", error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <div className="p-8 bg-white rounded-lg shadow-lg w-full max-w-sm text-center">
        <h1 className="text-2xl font-bold text-purple-700 mb-4">Payment Page</h1>
        <p className="text-lg text-gray-600 mb-6">
          Amount to pay: <span className="font-semibold">{AMOUNT} INR</span>
        </p>
        <button
          onClick={handlePayment}
          disabled={isProcessing}
          className={`w-full py-2 px-4 text-lg font-semibold text-white rounded-lg ${
            isProcessing
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-purple-500 hover:bg-purple-600"
          }`}
        >
          {isProcessing ? "Processing..." : "Pay Now"}
        </button>
      </div>
    </div>
  );
};

export default Upgrade;
