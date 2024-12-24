"use client"
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

function Header() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/dashboard"); 
  };
  return (
    <div className="flex items-center justify-between p-2">
      <Image src={"/Logo.png"} width={150} height={110} alt='Hero' />
      <Button   onClick={handleClick} className="ml-auto">Get Started</Button>
    </div>
  );
}

export default Header;
