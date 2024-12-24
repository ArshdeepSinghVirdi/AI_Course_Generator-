"use client";
import { db } from "@/configs/db";
import { CourseList } from "@/configs/schema";
import { useUser } from "@clerk/nextjs";
import React, { useContext, useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import { eq } from "drizzle-orm";
import { UserCourseListContext } from "@/app/_context/UserCourseList";

function UserCourseList() {
  const [courseList, setCourseList] = useState([]);
  const {UserCourseList,setUserCourseList}=useContext(UserCourseListContext)
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      getUserCourses();
    }
  }, [user]);

  const getUserCourses = async () => {
    try {
      const result = await db
        .select()
        .from(CourseList)
        .where(eq(CourseList.createdBy, user?.primaryEmailAddress?.emailAddress));
      setCourseList(result);
      setUserCourseList(result);
    } catch (error) {
      console.error("Error fetching user courses:", error);
    }
  };

  return (
    <div className="mt-10">
      <h2 className="font-medium text-xl mb-4">My AI Courses</h2>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {courseList.length > 0 ? (
          courseList.map((course, index) => (
            <CourseCard course={course} key={index} refreshData={() => getUserCourses()} />
          ))
        ) : (
          <>
            <p className="text-gray-500 col-span-full text-center">
              No courses available.
            </p>
            {[1, 2, 3, 4, 5].map((item, index) => (
              <div
                key={index}
                className="w-full mt-5 bg-slate-200 animate-pulse rounded-lg h-[270px]"
              ></div>
            ))}
          </>
        )}
      </div>
    </div>
  );  
}

export default UserCourseList;
