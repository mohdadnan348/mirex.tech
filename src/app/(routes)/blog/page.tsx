"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Calendar, Clock, BookOpen, ArrowRight } from "lucide-react";
import { blogs } from "@/data/blogsData";
import Card from "@/components/ui/Card";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Get unique list of categories from dataset
  const categories = useMemo(() => {
    const cats = new Set(blogs.map((b) => b.category));
    return ["all", ...Array.from(cats)];
  }, []);

  const filteredBlogs = useMemo(() => {
    return blogs.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCat = selectedCategory === "all" || post.category === selectedCategory;

      return matchesSearch && matchesCat;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="pt-32 pb-24 relative overflow-hidden">
      {/* Background spotlights */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-violet-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            MirexTech Blog
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base leading-relaxed">
            Stay ahead of the curve. Read technical guides on AI integration, ERP engineering, and SMM performance.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center mb-12">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-md"
                    : "bg-white/5 text-gray-400 hover:text-white border border-white/5"
                }`}
              >
                {cat === "all" ? "All Posts" : cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search articles..."
              className="w-full bg-white/5 border border-white/8 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white outline-none focus:border-cyan-400"
            />
          </div>
        </div>

        {/* Blog Listings Grid */}
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-16 border border-white/5 rounded-2xl glass-panel">
            <p className="text-gray-400">No blog posts found matching your parameters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((post) => (
              <Card key={post.slug} className="flex flex-col h-full overflow-hidden group" glowColor="rgba(6,182,212,0.06)">
                {/* Image */}
                <div className="relative h-48 w-full rounded-xl overflow-hidden mb-6 bg-gray-900">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-cyan-500 text-white text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                    {post.category}
                  </span>
                </div>

                {/* Metadata */}
                <div className="flex items-center gap-4 text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-6 flex-grow line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-6">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[9px] text-gray-500"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-violet-600 dark:text-cyan-400 hover:gap-3 transition-all duration-200 mt-auto"
                >
                  Read Article
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
