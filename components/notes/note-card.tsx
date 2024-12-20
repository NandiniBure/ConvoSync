import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Note } from "@prisma/client";
import { Trash } from "lucide-react";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Preview } from "../preview";

interface NoteCardProps {
  note: Note;
  index: number;
}

export const NoteCard = ({ note, index }: NoteCardProps) => {
  return (
    <div className="">
      {note.id.length > 0 && (
        <Card className="hover:bg-gray-500  relative h-[5rem] w-full ">
        <CardTitle className=" w-full max-h-[5rem] text-sm flex text-clip overflow-hidden  justify-start">  
          {/* <Preview value={note.text} /> */}
          </CardTitle>
          <CardDescription className="text-xs  absolute right-0 p-1 top-[3.5rem] ">
           {note.createdAt.toString()}
          </CardDescription> 
        </Card>
      )}
    </div>
  );
};
