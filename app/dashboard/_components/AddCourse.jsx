"use client";
import React, { useContext } from "react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UserCourseListContext } from "@/app/_context/UserCourseList";

function AddCourse() {
  const { user } = useUser();
  const { userCourseList } = useContext(UserCourseListContext);

  const createCourseLink =
    userCourseList?.length < 5 ? "/create-course" : "/dashboard/upgrade";

  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-2xl">
          Hello, <span className="font-bold">{user?.fullName}</span>
        </h2>
        <p className="text-sm text-gray-500">
          Create new course with AI, share it with your friends, and earn from
          it.
        </p>
      </div>
      <Link href={createCourseLink}>
        <Button disabled={userCourseList?.length >= 5}>
          + Create AI Course
        </Button>
      </Link>
    </div>
  );
}

export default AddCourse;
