"use client";
import React, { useEffect, useState } from "react";
import { db } from "@/configs/db";
import { and, eq } from "drizzle-orm";
import { Chapters, CourseList } from "@/configs/schema";
import { useUser } from "@clerk/nextjs";
import CourseBasicInfo from "./_components/CourseBasicInfo";
import { use } from "react";
import CourseDetail from "./_components/CourseDetail";
import ChapterList from "./_components/ChapterList";
import { Button } from "@/components/ui/button";
import { GenerateChapterContent_AI } from "@/configs/AiModel";
import LoadingDialog from "../_components/LoadingDialog";
import service from "@/configs/service";
import { useRouter } from "next/navigation";


function CourseLayout({ params }) {
  const { user } = useUser();
  const [course, setCourse] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

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

  const GenerateChapterContent = async () => {
    setLoading(true);
    const chapters = course?.courseOutput?.chapters;

    try {
      const insertPromises = chapters.map(async (chapter, index) => {
        const PROMPT = `Explain the concept in Detail on Topic: ${course?.name}, Chapter: ${chapter?.chapterName}, in JSON Format with a list of arrays with fields as title, description in detail, Code Example (Code field in <precode> format) if applicable`;

        console.log(PROMPT);

        let videoId = "";
        try {
          // Generate video URL
          const videoRes = await service.getVideos(
            `${course?.name}:${chapter?.chapterName}`
          );
          videoId = videoRes[0]?.id?.videoId || "";

          // Generate chapter content
          const result = await GenerateChapterContent_AI.sendMessage(PROMPT);
          const content = JSON.parse(result?.response?.text());
          await db.insert(Chapters).values({
            chapterId: index,
            courseId: course?.courseId,
            content,
            videoId,
          });
        } catch (err) {
          console.error(
            `Error generating content for chapter ${index + 1}:`,
            err
          );
          throw err; 
        }
      });
      await Promise.all(insertPromises);
      router.replace(`/create-course/${course?.courseId}/finish`);
      await db.update(CourseList).set({
        publish:true
      })
    } catch (err) {
      console.error("Error generating chapter content:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-8 px-7 md:px-20 lg:px-44">
      <h2 className="font-bold text-center text-3xl">Course Layout</h2>
      <LoadingDialog loading={loading} />
      <CourseBasicInfo course={course} refreshData={() => GetCourse()} />
      <CourseDetail course={course} />
      <ChapterList course={course} refreshData={() => GetCourse()} />
      <Button onClick={GenerateChapterContent} className="my-10">
        Generate Course Content
      </Button>
    </div>
  );
}

export default CourseLayout;
