"use client";

import { BarChart, Compass, Home, Layout, List } from "lucide-react";
import { SidebarItem } from "./sidebarItem";
import { usePathname } from "next/navigation";

const guestRoutes = [
  { icon: Home, label: "Home", href: "/study" },
  { icon: Compass, label: "Browse", href: "/study/search" },
];
const teacherRoutes = [
  { icon: List, label: "Courses", href: "/study/teacher/courses" },
  { icon: BarChart, label: "Analytics", href: "/study/teacher/analytics" },
];

export const SidebarRoutes = () => {
  const pathname = usePathname();
  const isTeacherPage = pathname?.includes("/teacher");
  const routes = isTeacherPage ? teacherRoutes : guestRoutes;
  return (
    <div className="flex flex-col w-full ">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};
