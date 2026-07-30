"use client";

import React from "react";
import { cn } from "@/utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "glass";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export default function Button({
  className,
  variant = "primary",
  size = "md",
  isLoading,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled || isLoading}
      className={cn(
        "relative inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50",
        // Sizes
        {
          "px-4 py-2 text-xs": size === "sm",
          "px-6 py-3 text-sm": size === "md",
          "px-8 py-4 text-base": size === "lg",
        },
        // Variants
        {
          // Primary: Neon Purple/Cyan Gradient
          "bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-[0_0_15px_rgba(124,58,237,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] border-0":
            variant === "primary",
          // Secondary: Cyan Gradient
          "bg-gradient-to-r from-cyan-600 to-teal-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(20,184,166,0.5)] border-0":
            variant === "secondary",
          // Outline: Transparent with Border Glow
          "border border-gray-300 dark:border-gray-800 bg-transparent text-gray-800 dark:text-gray-200 hover:border-violet-500 dark:hover:border-cyan-400 hover:bg-white/5":
            variant === "outline",
          // Glass: Apple/Vercel Translucent
          "bg-white/5 dark:bg-white/5 backdrop-blur-md border border-white/10 text-gray-800 dark:text-white hover:bg-white/10 dark:hover:bg-white/10":
            variant === "glass",
        },
        className
      )}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <svg
            className="animate-spin -ml-1 mr-3 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  );
}
