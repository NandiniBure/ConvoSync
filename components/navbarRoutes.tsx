"use client";

import { UserButton, useAuth } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { SearchInput } from "./searchInput";

export const NavbarRoutes = () => {
  const pathname = usePathname();

  const isTeacherPage = pathname?.startsWith("/teacher");
  const isCoursePage = pathname?.includes("/courses");
  const isSearchPage = pathname === "/search";
  const { userId } = useAuth();
  return (
    <>
      {isSearchPage && (
        <div className="hidden md:flex">
          <SearchInput />
        </div>
      )}
      <div className="flex gap-x-2 ml-auto">
        {isCoursePage ? (
          <Link href="/study">
            <Button size="sm" variant="ghost">
              <LogOut className="h-4 w-4 mr-2" />
              Exit
            </Button>
          </Link>
        ) : (
          <Link href="/study/teacher/courses">
            <Button size="sm" variant="ghost">
              Teacher mode
            </Button>
          </Link>
        ) }
        <UserButton afterSignOutUrl="/" />
      </div>
    </>
  );
};
