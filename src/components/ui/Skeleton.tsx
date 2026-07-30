"use client";

import React from "react";
import { cn } from "@/utils/cn";

export default function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-lg bg-gray-200 dark:bg-white/5",
        className
      )}
    />
  );
}
