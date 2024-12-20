"use client";

import Image from "next/image";
import Link from "next/link";
import { IconBadge } from "./icon-badge";
import { BookOpen } from "lucide-react";
import { formatPrice } from "@/lib/format";
import { Progress } from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";
import {
  CourseProgress,
  colorByVariant,
  sizeByVariant,
} from "./courseProgress";

interface CourseCardProps {
  id: string;
  title: string;
  imageUrl: string;
  chaptersLength: number;
  price: number;
  progress: number | null;
  category: string;
}

export const CourseCard = ({
  category,
  chaptersLength,
  id,
  imageUrl,
  price,
  progress,
  title,
}: CourseCardProps) => {
  return (
    <Link href={`/study/courses/${id}`}>
      <div className="group-hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h-full">
        <div className="relative w-full aspect-video rounded-md overflow-hidden">
          <Image fill className="object-contain" alt={title} src={imageUrl} />
        </div>
        <div className="flex flex-col pt-2">
          <div className="text-lg md:text-base font-medium group-hover:text-sky-700 transition line-clamp-2">
            {title}
          </div>
          <p className="text-xs text-slate-700">{category}</p>
          <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
            <div className="flex items-center gap-x-1 text-slate-500">
              <IconBadge icon={BookOpen} size="sm" />
              <span>
                {chaptersLength} {chaptersLength === 1 ? "Chapter" : "Chapters"}
              </span>
            </div>
          </div>
          {progress !== null ? (
            <CourseProgress
              size="sm"
              variant={progress === 100 ? "success" : "default"}
              value={progress}
            />
          ) : (
            <p className="text-lg md:text-sm font-medium text-slate-700">
                {"₹"}{formatPrice(price).split("$")[1]}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};
