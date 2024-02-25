import React from "react";
import { Button } from "../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FolderPlus, Paperclip } from "lucide-react";
import FolderInput from "./FolderInput";
import FileInput from "./CustomFileInput";

type TAddComponent = {
  title: string;
};

const AddComponent: React.FC<TAddComponent> = ({ title }) => {
  const isFolder = title.toLowerCase().includes("folder")
  return (
    <Dialog>
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
          isFolder ? <FolderInput /> : <FileInput />
        }
      </DialogContent>
    </Dialog>
  );
};

export default AddComponent;
