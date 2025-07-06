"use client"
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Header() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/dashboard"); 
  };
  return (
    <div className="flex items-center justify-between p-2">
      <Image src={"/Logo.png"} width={150} height={110} alt='Hero' />
      <button
        onClick={handleClick}
        className="group relative inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-purple-500 rounded-xl shadow-lg hover:shadow-purple-500/25 transform transition-all duration-300 hover:scale-105 overflow-hidden ml-auto"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        <span className="relative flex items-center space-x-2">
          <span>Get Started</span>
        </span>
      </button>
    </div>
  );
}

export default Header;
