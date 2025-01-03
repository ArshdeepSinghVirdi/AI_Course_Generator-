"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import {
  HiMiniSquares2X2,
  HiLightBulb,
  HiClipboardDocumentCheck,
} from "react-icons/hi2";
import { useContext } from "react";
import { Button } from "@/components/ui/button";
import SelectCategory from "./_components/SelectCategory";
import TopicDescription from "./_components/TopicDescription";
import SelectOption from "./_components/SelectOption";
import { UserInputContext } from "../_context/UserInputContext";
import { GenerateCourseLayout_AI } from "@/configs/AiModel";
import LoadingDialog from "./_components/LoadingDialog";
import uuid4 from "uuid4";
import { useUser } from "@clerk/nextjs";
import { CourseList } from "@/configs/schema";
import { db } from "@/configs/db";
import { useRouter } from "next/navigation";

function CreateCourse() {
  const Stepper = [
    {
      id: 1,
      name: "Category",
      icon: <HiMiniSquares2X2 />,
    },
    {
      id: 2,
      name: "Topic",
      icon: <HiLightBulb />,
    },
    {
      id: 3,
      name: "Options",
      icon: <HiClipboardDocumentCheck />,
    },
  ];

   const {userCourseInput,setUserCourseInput}=useContext(UserInputContext);

   const {user}=useUser();
   const router = useRouter();

  const [activeIndex, setActiveIndex] = useState(0);
  const [loading,setLoading]=useState(false);                   

  useEffect(()=>{
    console.log(userCourseInput)
  },[])

  const checkStatus=()=>{
    if(userCourseInput?.length==0){
      return true;
    }
    if(activeIndex==0 &&(userCourseInput?.category?.length==0 || userCourseInput?.category==undefined)){
      return true;
    }
    if(activeIndex==1 &&(userCourseInput?.topic?.length==0 || userCourseInput?.topic==undefined)){
      return true;
    }
    else if(activeIndex==2 && (userCourseInput?.level==undefined || userCourseInput?.duration==undefined || userCourseInput?.displayVideo==undefined || userCourseInput?.noOfChapter==undefined)){
      return false;
    }
      return false;
  }

  const GenerateCourseLayout= async()=>{
    setLoading(true)
    const BASIC_PROMPT='Generate a course tutorial on following detail with field as Course Name, Description, Along with Chapter Name, About, Duration:';
    const USER_INPUT_PROMPT='Category: '+userCourseInput?.category+', Topic: '+userCourseInput?.topic+' , Level: '+userCourseInput?.level+', Duration: '
    +userCourseInput?.duration+', NoOf Chapters: '+userCourseInput?.noOfChapters+', in JSON Format';
    const FINAL_PROMPT = BASIC_PROMPT+USER_INPUT_PROMPT;
    console.log(FINAL_PROMPT);
    const result=await GenerateCourseLayout_AI.sendMessage(FINAL_PROMPT);
    console.log(result.response?.text());
    console.log(JSON.parse(result.response?.text()));
    setLoading(false);
    SaveCourseLayout(JSON.parse(result.response?.text()));
  }

  const SaveCourseLayout=async(courseLayout)=>{
    var id = uuid4(); // Course Id
    setLoading(true);
    const result = await db.insert(CourseList).values({
      courseId: id,
      name:userCourseInput?.topic,
      level:userCourseInput?.level,
      category:userCourseInput?.category,
      courseOutput: courseLayout,
      createdBy: user?.primaryEmailAddress?.emailAddress,
      userName:user?.fullName,
      userProfileImage:user?.imageUrl
    })
    console.log("Done");
    router.replace('/create-course/'+id)
    setLoading(false);
  }


  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-10">
        <h2
          className="text-4xl text-primary font-medium
        "
        >
          Create Course
        </h2>
        <div className="flex gap-5 mt-10">
          {Stepper.map((item, index) => (
            <div className="flex items-center">
              <div className="flex flex-col items-center w-[50px] md-w-[100px] gap-2">
                <div
                  className={`bg-gray-200 p-3 rounded-full text-white ${
                    activeIndex >= index && "bg-purple-500"
                  }`}
                >
                  {item.icon}
                </div>
                <h2 className="hidden md:block md:text-sm">{item.name}</h2>
              </div>
              {index != Stepper?.length - 1 && (
                <div
                  className={`h-1 w-[50px] md:w-[100px] rounded-full lg:w-[170px] bg-gray-300 ${
                    activeIndex - 1 >= index && "bg-purple-500"
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="px-10 md:px-20 lg:px-44 mt-10">
        {activeIndex == 0 ? (
          <SelectCategory />
        ) : activeIndex == 1 ? (
          <TopicDescription />
        ) : (
          <SelectOption />
        )}

        <div className="flex justify-between mt-10">
          <Button
            disabled={activeIndex == 0}
            variant="outline"
            onClick={() => setActiveIndex(activeIndex - 1)}
          >
            Previous
          </Button>
          {activeIndex < 2 && (
            <Button disabled={checkStatus()} onClick={() => setActiveIndex(activeIndex + 1)}>
              Next
            </Button>
          )}
          {activeIndex == 2 && (
            <Button disabled={checkStatus()}  onClick={() => GenerateCourseLayout()}>
              Generate Course Layout
            </Button>
          )}
        </div>
      </div>
      <LoadingDialog loading={loading}/>
    </div>
  );
}

export default CreateCourse;
