import React from "react";
import { HiOutlineClock, HiOutlineBookOpen, HiOutlineChartBar, HiOutlinePlay } from "react-icons/hi";

function CourseDetail({ course }) {
  return (
    <div className="border p-6 rounded-xl shadow-sm mt-5 mb-2">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        <div className="flex gap-2">
          <HiOutlineChartBar className="text-4xl text-primary" />
          <div>
            <h2 className="text-xs text-gray-600">Skill Level</h2>
            <h2 className="font-medium text-md">{course?.level}</h2>
          </div>
        </div>
        <div className="flex gap-2">
          <HiOutlineClock className="text-4xl text-primary" />
          <div>
            <h2 className="text-xs text-gray-600">Duration</h2>
            <h2 className="font-medium text-md">{course?.courseOutput?.duration}</h2>
          </div>
        </div>
        <div className="flex gap-2">
          <HiOutlineBookOpen className="text-4xl text-primary" />
          <div>
            <h2 className="text-xs text-gray-600">No of Chapters</h2>
            <h2 className="font-medium text-md">{course?.courseOutput?.noOfChapters}</h2>
          </div>
        </div>
        <div className="flex gap-2">
          <HiOutlinePlay className="text-4xl text-primary" />
          <div>
            <h2 className="text-xs text-gray-600">Video Included?</h2>
            <h2 className="font-medium text-md">{course?.includeVideo}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;
