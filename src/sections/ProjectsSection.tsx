"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ExternalLink, ArrowRight, Github } from "lucide-react";
import { projects } from "@/data/projectsData";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

type FilterTab = "all" | "ai" | "web" | "mobile" | "erp";

export default function ProjectsSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState<FilterTab>("all");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Search match
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.techTags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      // Tab match
      let matchesTab = true;
      if (activeTab === "ai") {
        matchesTab = project.techTags.some((tag) => tag.toLowerCase().includes("ai") || tag.toLowerCase().includes("deepseek"));
      } else if (activeTab === "web") {
        matchesTab = project.techTags.some((tag) => tag.toLowerCase().includes("react.js") || tag.toLowerCase().includes("next.js")) &&
          !project.techTags.some((tag) => tag.toLowerCase().includes("native"));
      } else if (activeTab === "mobile") {
        matchesTab = project.techTags.some((tag) => tag.toLowerCase().includes("native") || tag.toLowerCase().includes("mobile"));
      } else if (activeTab === "erp") {
        matchesTab = project.title.toLowerCase().includes("erp") || project.title.toLowerCase().includes("salon") || project.slug.includes("glam");
      }

      return matchesSearch && matchesTab;
    });
  }, [searchTerm, activeTab]);

  return (
    <section className="py-24 relative overflow-hidden" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
              Featured Work
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm max-w-md leading-relaxed">
              We don&apos;t just code – we build scalable, AI-driven ecosystems that automate businesses.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:max-w-xs">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search technologies or titles..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-sm outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(6,182,212,0.1)] transition-all"
            />
          </div>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {(["all", "ai", "web", "mobile", "erp"] as FilterTab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === tab
                  ? "bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-lg"
                  : "bg-white/5 text-gray-400 hover:text-white border border-white/5"
              }`}
            >
              {tab === "all" ? "All Projects" : tab === "ai" ? "AI & Automation" : tab === "web" ? "Next.js/React Web" : tab === "mobile" ? "Mobile Apps" : "ERP & B2B"}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 glass-panel rounded-2xl border border-white/5">
            <p className="text-gray-400">No projects match your search criteria. Try typing another tech stack.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group flex flex-col h-full overflow-hidden" glowColor="rgba(124,58,237,0.06)">
                {/* Image */}
                <div className="relative h-48 w-full rounded-xl overflow-hidden mb-6 bg-gray-900">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div className="flex gap-2">
                      {project.liveUrl !== "#" && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-cyan-500 text-white hover:bg-cyan-600 transition-colors"
                          title="Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors"
                        title="GitHub Repo"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Metadata */}
                <div className="flex items-center justify-between text-[10px] text-cyan-400 font-bold uppercase tracking-wider mb-2">
                  <span>{project.client}</span>
                  <span>{project.duration}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                {/* Short description */}
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-6 leading-relaxed flex-grow">
                  {project.description.slice(0, 140)}...
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techTags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[10px] text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.techTags.length > 4 && (
                    <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[10px] text-gray-400">
                      +{project.techTags.length - 4} more
                    </span>
                  )}
                </div>

                {/* View Case Study */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-violet-600 dark:text-cyan-400 hover:gap-3 transition-all duration-200 mt-auto"
                >
                  View Case Study
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
