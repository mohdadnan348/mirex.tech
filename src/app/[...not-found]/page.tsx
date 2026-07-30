"use client";

import React from "react";
import Link from "next/link";
import { AlertTriangle, Home } from "lucide-react";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#030014] flex items-center justify-center relative overflow-hidden px-6 text-center">
      {/* Background neon elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-violet-600/10 blur-[130px] pointer-events-none animate-pulse-slow" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-violet-500/10 rounded-full flex items-center justify-center animate-spin" style={{ animationDuration: "20s" }} />

      <div className="relative z-10 max-w-md mx-auto">
        {/* Warning Icon */}
        <div className="w-16 h-16 rounded-2xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center mx-auto mb-8 shadow-[0_0_20px_rgba(124,58,237,0.2)]">
          <AlertTriangle className="w-8 h-8 text-cyan-400" />
        </div>

        {/* Heading */}
        <h1 className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800 tracking-wider mb-4">
          404
        </h1>
        <h2 className="text-xl font-bold text-white mb-4">
          Space Void Encountered
        </h2>
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
          The coordinate path you requested does not exist in our website index. You might have typed an incorrect URL, or the page was moved.
        </p>

        <Link href="/">
          <Button size="md" className="gap-2 mx-auto">
            <Home className="w-4 h-4" />
            Return to Earth
          </Button>
        </Link>
      </div>
    </div>
  );
}
