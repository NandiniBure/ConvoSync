import Link from "next/link";
import { Logo } from "./logo";
import { SidebarRoutes } from "./sidebarRoutes";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export const Sidebar = () => {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
      <div className="p-6">
        <Button
          variant="ghost"
          className="flex gap-x-2 items-center justify-center"
        >
          <Link href="/" className="flex gap-x-2 items-center justify-center">
            <ArrowLeft className="h-4 w-4" /> Return to Verse
          </Link>
        </Button>
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  );
};
