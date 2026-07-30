"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Sparkles } from "lucide-react";
import { blogs } from "@/data/blogsData";
import Card from "@/components/ui/Card";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function BlogDetail({ params }: PageProps) {
  const { slug } = params;

  const post = React.useMemo(() => {
    return blogs.find((b) => b.slug === slug);
  }, [slug]);

  if (!post) {
    notFound();
  }

  // Simple Markdown inline parser to convert text headings and bullets
  const renderContent = (content: string) => {
    const lines = content.split("\n");
    return lines.map((line, idx) => {
      const trimmed = line.trim();
      if (trimmed.startsWith("# ")) {
        return (
          <h1 key={idx} className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mt-12 mb-6">
            {trimmed.slice(2)}
          </h1>
        );
      }
      if (trimmed.startsWith("## ")) {
        return (
          <h2 key={idx} className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mt-10 mb-4">
            {trimmed.slice(3)}
          </h2>
        );
      }
      if (trimmed.startsWith("### ")) {
        return (
          <h3 key={idx} className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-3">
            {trimmed.slice(4)}
          </h3>
        );
      }
      if (trimmed.startsWith("- ")) {
        return (
          <li key={idx} className="list-disc list-inside ml-4 text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-2 leading-relaxed">
            {trimmed.slice(2)}
          </li>
        );
      }
      if (trimmed === "") {
        return <div key={idx} className="h-4" />;
      }
      return (
        <p key={idx} className="text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
          {trimmed}
        </p>
      );
    });
  };

  return (
    <div className="pt-32 pb-24 relative overflow-hidden">
      {/* Background spotlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-violet-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-white uppercase tracking-wider mb-12 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        {/* Header Block */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-[10px] font-bold text-gray-300 tracking-wider uppercase">
              {post.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex items-center gap-6 text-xs text-gray-500 uppercase font-bold tracking-wider">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-cyan-400" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-violet-400" />
              {post.readTime}
            </span>
          </div>
        </div>

        {/* Cover Image */}
        <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12 border border-white/10 bg-gray-950">
          <Image src={post.imageUrl} alt={post.title} fill className="object-cover" />
        </div>

        {/* Reading Content */}
        <Card className="p-8 border border-white/5 bg-white/5" interactive={false}>
          <article className="prose prose-invert max-w-none">
            {renderContent(post.content)}
          </article>
        </Card>
      </div>
    </div>
  );
}
