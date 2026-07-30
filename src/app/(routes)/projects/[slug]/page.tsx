"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github, Sparkles, AlertCircle, Cpu, ClipboardCheck } from "lucide-react";
import { projects } from "@/data/projectsData";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function ProjectDetail({ params }: PageProps) {
  const { slug } = params;

  const project = React.useMemo(() => {
    return projects.find((p) => p.slug === slug);
  }, [slug]);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 relative overflow-hidden">
      {/* Background neon glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-cyan-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Breadcrumb Back Link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-white uppercase tracking-wider mb-12 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        {/* Title Block */}
        <div className="mb-12">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block mb-2">
            MirexTech Case Study
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
            {project.title}
          </h1>
          <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-3xl">
            {project.description}
          </p>
        </div>

        {/* Dynamic Project Meta details */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 p-6 rounded-2xl border border-white/5 bg-white/5">
          <div>
            <span className="block text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-1">
              Client
            </span>
            <span className="font-semibold text-xs md:text-sm text-gray-900 dark:text-white">
              {project.client}
            </span>
          </div>
          <div>
            <span className="block text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-1">
              Timeline Duration
            </span>
            <span className="font-semibold text-xs md:text-sm text-gray-900 dark:text-white">
              {project.duration}
            </span>
          </div>
          <div>
            <span className="block text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-1">
              Key Technology
            </span>
            <span className="font-semibold text-xs md:text-sm text-gray-900 dark:text-white">
              {project.techTags[0]}
            </span>
          </div>
          <div>
            <span className="block text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-1">
              Code Repository
            </span>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-cyan-400 hover:underline flex items-center gap-1"
            >
              GitHub Repo <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Case Study Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 space-y-8">
            {/* The Problem */}
            <Card className="p-8 border border-white/5 bg-white/5" interactive={false}>
              <div className="flex items-center gap-2.5 text-rose-400 mb-4">
                <AlertCircle className="w-5 h-5" />
                <h3 className="font-bold text-gray-900 dark:text-white text-base md:text-lg">
                  The Problem
                </h3>
              </div>
              <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {project.problem}
              </p>
            </Card>

            {/* The Solution */}
            <Card className="p-8 border border-white/5 bg-white/5" interactive={false}>
              <div className="flex items-center gap-2.5 text-cyan-400 mb-4">
                <Cpu className="w-5 h-5" />
                <h3 className="font-bold text-gray-900 dark:text-white text-base md:text-lg">
                  Our Engineering Solution
                </h3>
              </div>
              <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {project.solution}
              </p>
            </Card>

            {/* The Result */}
            <Card className="p-8 border border-white/5 bg-white/5" interactive={false}>
              <div className="flex items-center gap-2.5 text-emerald-400 mb-4">
                <ClipboardCheck className="w-5 h-5" />
                <h3 className="font-bold text-gray-900 dark:text-white text-base md:text-lg">
                  The Result & ROI
                </h3>
              </div>
              <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {project.result}
              </p>
            </Card>
          </div>

          {/* Right sidebar */}
          <div className="space-y-6">
            <Card className="p-6 border border-white/5 bg-white/5" interactive={false}>
              <h4 className="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-4">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded bg-white/5 border border-white/10 text-xs text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>

            {project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <Button className="w-full gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Launch Live Demo
                </Button>
              </a>
            )}

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Button variant="outline" className="w-full gap-2">
                <Github className="w-4 h-4" />
                Inspect GitHub Code
              </Button>
            </a>
          </div>
        </div>

        {/* Screenshots Showcase */}
        <div>
          <h3 className="font-bold text-gray-900 dark:text-white text-lg md:text-xl mb-6 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            Screenshots & Interface Design
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.screenshots.map((url, idx) => (
              <div key={idx} className="relative h-60 rounded-xl overflow-hidden border border-white/10 bg-gray-950">
                <Image
                  src={url}
                  alt={`${project.title} screen ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
