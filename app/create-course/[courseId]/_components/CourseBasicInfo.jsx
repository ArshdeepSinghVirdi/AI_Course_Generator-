"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React,{useState} from "react";
import { HiOutlinePuzzle } from "react-icons/hi";
import EditCourseBasicInfo from "./EditCourseBasicInfo";
import { storage } from "@/configs/firebaseConfig";
import { getDownloadURL } from "firebase/storage";
import { db } from "@/configs/db";
import { eq } from "drizzle-orm";
import { CourseList } from "@/configs/schema";

function CourseBasicInfo({ course, refreshData}) {

    const [selectedFile,setSelectedFile]=useState();
    /**
     * Select file and upload to Firebase Storage
     * @param {*} event 
     */
    const onFileSelected=async(event)=>{
        const file=event.target.files[0];
        setSelectedFile(URL.createObjectURL(file))
        const fileName=Date.now()+'.jpg'
        const storageRef=ref(storage,'images/'+fileName)
        await uploadBytes(storageRef,file).then((snapshot)=>{
            console.log("Upload File completed")
        }).then(resp=>{
            getDownloadURL(storageRef).then(async(downloadUrl)=>{
               console.log(downloadUrl); 
               await db.update(CourseList).set({
                courseBanner:downloadUrl
               }).where(eq(CourseList.id,course?.id))
               
            })
        })
    } 

  return (
    <div className='p-8 border rounded-xl shadow-sm mt-7 '>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <h2 className="text-3xl font-bold">
            {course?.courseOutput?.courseName || "Course name not provided"} <EditCourseBasicInfo course={course} refreshData={()=>refreshData(true)}/>
          </h2>
          <p className="text-gray-600 text-l mt-3">
            {course?.courseOutput?.description || "No description available"}
          </p>
          <h2 className='font-medium mt-2 flex gap-2 items-center text-primary text-xl'><HiOutlinePuzzle className='text-2xl'/>{course?.category || "No category there"}</h2>
          <Button className='w-full mt-12 text-xl'>Start</Button>
        </div>
        <div>
            <label htmlFor="upload-image">
            <Image src={selectedFile?selectedFile:'/placeholder.jpeg'} width={500} height={500} className='w-full rounded-xl h-[350px] object-cover cursor-pointer'/> 
            </label>
            <input type="file" id="upload-image" className='opacity-0' onChange={onFileSelected}/>
        </div>
      </div>
    </div>
  );
}

export default CourseBasicInfo;
