"use client";

import React from "react";
import { Instagram, Linkedin, Github } from "lucide-react";
import { cn } from "@/utils/cn";

export default function SocialIcons({ className }: { className?: string }) {
  const socials = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/mirextech", // placeholder / example
      icon: Linkedin,
      color: "hover:text-blue-500",
    },
    {
      name: "Instagram",
      href: "https://instagram.com/mirex.tech",
      icon: Instagram,
      color: "hover:text-pink-500",
    },
    {
      name: "GitHub",
      href: "https://github.com/mohdadnan348",
      icon: Github,
      color: "hover:text-gray-400",
    },
  ];

  return (
    <div className={cn("flex gap-4", className)}>
      {socials.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn("text-gray-400 transition-colors duration-200", social.color)}
            aria-label={social.name}
          >
            <Icon className="w-5 h-5" />
          </a>
        );
      })}
    </div>
  );
}
