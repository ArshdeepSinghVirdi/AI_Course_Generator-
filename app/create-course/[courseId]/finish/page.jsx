"use client";
import { db } from "@/configs/db";
import { CourseList } from "@/configs/schema";
import { useUser } from "@clerk/nextjs";
import { and, eq } from "drizzle-orm";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import CourseBasicInfo from "../_components/CourseBasicInfo";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";

function FinishScreen({ params }) {
  const { user } = useUser();
  const [course, setCourse] = useState([]);
  const [copySuccess, setCopySuccess] = useState(""); 
  const router = useRouter();

  const courseId = params.courseId;

  useEffect(() => {
    if (courseId && user) {
      GetCourse();
    }
  }, [courseId, user]);

  const GetCourse = async () => {
    try {
      const result = await db
        .select()
        .from(CourseList)
        .where(
          and(
            eq(CourseList.courseId, courseId),
            eq(CourseList?.createdBy, user?.primaryEmailAddress?.emailAddress)
          )
        );

      setCourse(result[0]);
      console.log(result);
    } catch (error) {
      console.error("Error fetching course:", error);
    }
  };

  const handleCopyToClipboard = async () => {
    try {
      const courseURL = `${process.env.NEXT_PUBLIC_HOST_NAME}/course/view/${course?.courseId}`;
      await navigator.clipboard.writeText(courseURL);
      setCopySuccess("Course URL copied to clipboard!");
      setTimeout(() => setCopySuccess(""), 3000); 
    } catch (error) {
      console.error("Failed to copy URL:", error);
    }
  };

  return (
    <div className="px-10 md:px-20 lg:px-44 my-7">
      <h2 className="text-center font-bold text-2xl my-3 text-primary">
        Congrats! Your Course is Ready
      </h2>
      <CourseBasicInfo course={course} refreshData={() => console.log()} />
      <h2 className="mt-3 font-semibold">Course URL:</h2>
      <div className="text-center text-gray-400 border p-2 round flex gap-5 items-center">
        {process.env.NEXT_PUBLIC_HOST_NAME}/course/view/{course?.courseId}
        <HiOutlineClipboardDocumentCheck
          className="h-5 w-5 cursor-pointer"
          onClick={handleCopyToClipboard}
        />
      </div>
      {copySuccess && ( 
        <p className="text-primary text-center mt-2">{copySuccess}</p>
      )}
    </div>
  );
}

export default FinishScreen;
