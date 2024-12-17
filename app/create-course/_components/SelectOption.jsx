import React,{useContext} from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { UserInputContext } from "@/app/_context/UserInputContext";

function SelectOption() {
  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);

  const handleInputChange = (fieldName, value) => {
    setUserCourseInput((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };
  return (
    <div className="px-10 md:px-10 lg:px-44">
      <div className="grid grid-cols-2 gap-10">
        <div>
          <label className="text-l">📈Difficulty Level</label>
          <Select onValueChange={(value)=>handleInputChange('level',value)} defaultValue={userCourseInput?.level}>
            <SelectTrigger className="h-14 text-lg">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Beginner">Beginner</SelectItem>
              <SelectItem value="Intermediate">Intermediate</SelectItem>
              <SelectItem value="Advance">Advance</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-l">📅Course Duration</label>
          <Select 
          defaultValue={userCourseInput?.duration}onValueChange={(value)=>handleInputChange('duration',value)}>
            <SelectTrigger className="h-14 text-lg">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1 Hour">1 Hour</SelectItem>
              <SelectItem value="2 Hours">2 Hours</SelectItem>
              <SelectItem value="More than 3 Hours">
                More than 3 Hours
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-l">🎥Add Video</label>
          <Select
          defaultValue={userCourseInput?.displayVideo} onValueChange={(value)=>handleInputChange('displayVideo',value)}>
            <SelectTrigger className="h-14 text-lg">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Yes">Yes</SelectItem>
              <SelectItem value="No">No</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-l">📖Number of Chapters</label>
          <Input type="number" className='h-14 text-lg' 
          defaultValue={userCourseInput?.noOfChapter}onChange={(e)=>handleInputChange('noOfChapters',e.target.value)}/>
        </div>
      </div>
    </div>
  );
}

export default SelectOption;
