"use client";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { HiOutlineTrash } from "react-icons/hi2";

function DropdownOption({ children, handleOnDelete }) {
  const [openAlert, setOpenAlert] = useState(false);

  const handleDeleteClick = () => {
    handleOnDelete(); // Perform the delete operation
    setOpenAlert(false); // Close the dialog
  };

  const handleCancelClick = () => {
    setOpenAlert(false); // Reset the dialog state on cancel
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => setOpenAlert(true)}>
            <div className="flex items-center gap-1">
              <HiOutlineTrash />
              Delete
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <AlertDialog open={openAlert} onOpenChange={setOpenAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete this
              course.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={handleCancelClick}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteClick}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default DropdownOption;
