import Image from "next/image";
import React from "react";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { HiEllipsisVertical } from "react-icons/hi2";
import DropdownOption from "./DropdownOption";
import { db } from "@/configs/db";
import { CourseList } from "@/configs/schema";
import { eq } from "drizzle-orm";
import Link from "next/link";

function CourseCard({ course, refreshData, displayUser=false }) {
  const handleOnDelete = async () => {
    try {
      const res = await db
        .delete(CourseList)
        .where(eq(CourseList.id, course?.id))
        .returning({ id: CourseList?.id });

      if (res.length > 0) {
        refreshData(); 
      }
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  return (
    <div className="shadow-sm rounded-lg border p-2 hover:scale-105 transition-all cursor-pointer mt-3 hover:border-primary">
      <Link href={"/course/" + course?.courseId}>
        <Image
          src={course?.courseBanner}
          width={300}
          height={200}
          className="w-full h-[200px] object-cover rounded-lg"
          alt="Course Banner"
        />
      </Link>
      <div className="p-2">
        <h2 className="font-medium text-lg flex justify-between items-center">
          {course?.courseOutput?.courseName}
          {!displayUser&&<DropdownOption handleOnDelete={handleOnDelete}>
            <HiEllipsisVertical className="text-xl font-semibold" />
          </DropdownOption>}
        </h2>
        <p className="text-sm text-gray-400 p-1 my-1">{course?.category}</p>
        <div className="flex items-center justify-between">
          <h2 className="flex gap-2 items-center p-1 bg-purple-50 text-primary text-sm rounded-sm">
            <HiOutlineBookOpen />
            {course?.courseOutput?.noOfChapters} Chapters
          </h2>
          <h2 className="text-sm bg-purple-50 text-primary p-1 rounded-sm">
            {course?.level} Level
          </h2>
        </div>
        {displayUser &&<div className='flex gap-2 items-center mt-2'>
          <Image src={course?.userProfileImage} height={35} width={35} alt='bb'
          className="rounded-full"
          />
          <h2 className='text-sm'>{course?.userName}</h2>
        </div>}
      </div>
    </div>
  );
}

export default CourseCard;
