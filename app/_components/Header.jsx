import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function Header() {
  return (
    <div className="flex items-center justify-between p-2">
      <Image src={"/Logo.png"} width={150} height={110} />
      <Button className="ml-auto">Get Started</Button>
    </div>
  );
}

export default Header;
