"use client"
import React,{useEffect, useState} from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CourseList } from "@/configs/schema";
import { db } from "@/configs/db";
import { eq } from "drizzle-orm";

function EditCourseBasicInfo({course,refreshData}) {

    const [name,setName]=useState();
    const [description,setDescription]=useState();

    useEffect(() => {
        if (course?.courseOutput) {
          setName(course.courseOutput.courseName || "");
          setDescription(course.courseOutput.description || "");
        }
      }, [course]);

    const onUpdateHandler= async()=>{
        course.courseOutput.courseName=name;
        course.courseOutput.description=description;
        const result=await db.update(CourseList).set({
            courseOutput:course?.courseOutput
        }).where(eq(CourseList?.id,course?.id))
        .returning({id:CourseList.id});
        console.log(result);
        refreshData(true);
    }

  return (
    <Dialog>
      <DialogTrigger><HiMiniPencilSquare /></DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Course Title & Description</DialogTitle>
          <DialogDescription>
            <div className='mt-3'>
                <label>Course Title</label>
                <Input defaultValue={course?.courseOutput?.courseName} onChange={(e)=>setName(e?.target.value)}/>
            </div>
            <div className='mt-2'>
                <label>Description</label>
                <Textarea className='h-40' defaultValue={course?.courseOutput?.description}
                onChange={(e)=>setDescription(e?.target.value)}/>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
            <DialogClose>
                <Button onClick={onUpdateHandler}>Update</Button>
            </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default EditCourseBasicInfo;
