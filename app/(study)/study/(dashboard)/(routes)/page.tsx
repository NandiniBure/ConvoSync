import { getDashboardCourses } from "@/actions/get-dashboard";
import { CoursesList } from "@/components/coursesList";
import { UserButton, auth } from "@clerk/nextjs";
import { CheckCircle, Clock } from "lucide-react";
import { NextResponse } from "next/server";
import { InfoCard } from "./_components/info_card";
import { useRouter } from "next/navigation";

const DashBoard = async () => {
  const { userId } = auth();
  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }
 
  const { completedCourses, coursesInProgress } = await getDashboardCourses(
    userId
  );
  return (
    <div className="p-6 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
       
      </div>
     
    </div>
  );
};

export default DashBoard;
