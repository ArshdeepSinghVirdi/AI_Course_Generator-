"use client";
import React, { useEffect, useState } from "react";
import { db } from "@/configs/db";
import { and, eq } from "drizzle-orm";
import { CourseList } from "@/configs/schema";
import { useUser } from "@clerk/nextjs";
import CourseBasicInfo from "./_components/CourseBasicInfo";
import { use } from "react";
import CourseDetail from "./_components/CourseDetail";
import ChapterList from "./_components/ChapterList";
import { Button } from "@/components/ui/button";
import { GenerateChapterContent_AI } from "@/configs/AiModel";
import LoadingDialog from "../_components/LoadingDialog";

function CourseLayout({ params }) {
  const { user } = useUser();
  const [course, setCourse] = useState([]);
  const [loading,setLoading]=useState(false);

  const { courseId } = use(params);

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

  const GenerateChapterContent=()=>{
    setLoading(true);
    const chapters=course?.courseOutput?.chapters;
    chapters.forEach(async(chapter,index)=>{
      const PROMPT='Explain the concept in Detail on Topic: '+course?.name+', Chapter: '+chapter?.chapterName+', in JSON Format with list of array with field as title, description in detail, Code Example(Code field in <precode> format) if applicable';
      console.log(PROMPT)
      if(index==0){
        try{
          const result=await GenerateChapterContent_AI.sendMessage(PROMPT);
          console.log(result?.response?.text());
          setLoading(false);
        }catch(e)
        {
          setLoading(false);
          console.log(e)
        }
      }
    })
  }

  return (
    <div className="mt-8 px-7 md:px-20 lg:px-44">
      <h2 className="font-bold text-center text-3xl">Course Layout</h2>
      <LoadingDialog loading={loading}/>
      <CourseBasicInfo course={course} refreshData={()=>GetCourse()} />
      <CourseDetail course={course}/>
      <ChapterList course={course} refreshData={()=>GetCourse()}/>
      <Button onClick={GenerateChapterContent}className='my-10'>Generate Course Content</Button>
    </div>
  );
}

export default CourseLayout;
