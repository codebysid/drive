import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { Button } from "../components/ui/button";
import FolderInput from "./FolderInput";
const FileInput = dynamic(() => import('./CustomFileInput'))


type TAddComponent = {
  title: string;
};

const AddComponent: React.FC<TAddComponent> = ({ title }) => {
  const [openDialog, setOpenDialog] = useState(false)
  const isFolder = title.toLowerCase().includes("folder")
  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger asChild>
        <Button variant="navItem" className="w-full md:text-xl lg:text-xl md:text-primary lg:text-primary md:underline md:underline-offset-8 lg:underline lg:underline-offset-8">
          {title}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {
          isFolder ? <FolderInput /> : <FileInput setOpenDialog={setOpenDialog} />
        }
      </DialogContent>
    </Dialog>
  );
};

export default AddComponent;
