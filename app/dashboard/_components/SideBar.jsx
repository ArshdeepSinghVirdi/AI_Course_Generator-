"use client";
import React, { useContext } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { Progress } from "@/components/ui/progress";
import {
  HiHome,
  HiMiniSquare3Stack3D,
  HiMiniShieldCheck,
  HiMiniPower,
} from "react-icons/hi2";
import { UserCourseListContext } from "@/app/_context/UserCourseList";

function SideBar() {
  const { signOut } = useAuth();
  const { userCourseList } = useContext(UserCourseListContext);

  const Menu = [
    { id: 1, name: "Home", icon: <HiHome />, path: "/dashboard" },
    { id: 2, name: "Explore", icon: <HiMiniSquare3Stack3D />, path: "/dashboard/explore" },
    { id: 3, name: "Upgrade", icon: <HiMiniShieldCheck />, path: "/dashboard/upgrade" },
  ];

  const path = usePathname();

  const handleLogout = async () => {
    try {
      await signOut();
      window.location.href = "/";
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };
  return (
    <div className="fixed h-full md:w-64 p-5 shadow-md">
      <Image src={"/Logo.png"} width={160} height={100} alt={"Logo"} />
      <hr className="my-3" />
      <ul>
        {Menu.map((item) => (
          <Link href={item.path} key={item.id}>
            <div
              className={`flex items-center gap-2 text-gray-600 p-4 cursor-pointer hover:bg-gray-100 hover:text-black rounded-lg mb-3 ${
                item.path === path && "bg-gray-100 text-black"
              }`}
            >
              <div className="text-2xl">{item.icon}</div>
              <h2>{item.name}</h2>
            </div>
          </Link>
        ))}
        <div
          className="flex items-center gap-2 text-gray-600 p-4 cursor-pointer hover:bg-gray-100 hover:text-black rounded-lg mb-3"
          onClick={handleLogout}
        >
          <div className="text-2xl">
            <HiMiniPower />
          </div>
          <h2>Logout</h2>
        </div>
      </ul>
      <div className="absolute bottom-10 w-[80%]">
        <Progress value={(userCourseList?.length / 5) * 100} />
        <h2 className="text-sm my-2">{userCourseList?.length} out of 5 courses created</h2>
        <h2 className="text-xs text-gray-500">Upgrade your plan for unlimited course generation</h2>
      </div>
    </div>
  );
}

export default SideBar;
