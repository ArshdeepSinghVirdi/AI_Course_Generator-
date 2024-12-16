"use client";
import React from "react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function AddCourse() {
  const { user } = useUser();
  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-2xl">
          Hello, <span className="font-bold">{user?.fullName}</span>
        </h2>
        <p className="text-sm text-gray-500">
          Create new course with AI and share it with your friends and earn from
          it.
        </p>
      </div>
      <Link href={"/create-course"}>
        <Button>+ Create AI Course</Button>
      </Link>
    </div>
  );
}

export default AddCourse;
