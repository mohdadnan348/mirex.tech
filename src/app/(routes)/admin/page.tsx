"use client";

import React, { useState, useEffect } from "react";
import { Lock, LogOut, LayoutDashboard, FolderKanban, BookOpen, Quote, MessageSquare, ClipboardList, Plus, Trash2 } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { projects as initialProjects } from "@/data/projectsData";
import { blogs as initialBlogs } from "@/data/blogsData";

type Tab = "projects" | "blogs" | "messages" | "quotes";

export default function AdminDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("projects");

  // Admin CMS lists
  const [projectsList, setProjectsList] = useState(initialProjects);
  const [blogsList, setBlogsList] = useState(initialBlogs);
  const [messagesList, setMessagesList] = useState<any[]>([]);
  const [quotesList, setQuotesList] = useState<any[]>([]);

  // Add Item States
  const [showAddProject, setShowAddProject] = useState(false);
  const [newProject, setNewProject] = useState({
    title: "",
    client: "",
    duration: "",
    description: "",
    techTags: "",
  });

  // Check login state
  useEffect(() => {
    const adminToken = sessionStorage.getItem("mirex-admin-token");
    if (adminToken === "authenticated") {
      setIsLoggedIn(true);
    }

    // Load mock submissions
    setMessagesList([
      { id: 1, name: "Amit Verma", email: "amit@homedecor.in", subject: "SEO Boost Check", message: "Need SEO rankings audit." },
      { id: 2, name: "Priya Patel", email: "priya@glamup.in", subject: "SMM Quote", message: "Instagram marketing pricing." },
    ]);

    setQuotesList([
      { id: 1, name: "Rahul Sharma", email: "rahul@techstart.co", budget: "₹1,00,000+", details: "Custom ERP build in 4 weeks." },
    ]);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "admin" && password === "mirex123") {
      sessionStorage.setItem("mirex-admin-token", "authenticated");
      setIsLoggedIn(true);
      setLoginError(false);
    } else {
      setLoginError(true);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("mirex-admin-token");
    setIsLoggedIn(false);
  };

  const handleAddProjectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProject.title || !newProject.client) return;

    const added = {
      id: projectsList.length + 1,
      slug: newProject.title.toLowerCase().replace(/\s+/g, "-"),
      title: newProject.title,
      client: newProject.client,
      duration: newProject.duration,
      description: newProject.description,
      techTags: newProject.techTags.split(",").map((t) => t.trim()),
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      problem: "Client wanted automated workflow builds.",
      solution: "Engineered scalable Next.js layers.",
      result: "100% Client satisfaction.",
      screenshots: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"],
    };

    setProjectsList([added, ...projectsList]);
    setNewProject({ title: "", client: "", duration: "", description: "", techTags: "" });
    setShowAddProject(false);
  };

  const handleDeleteProject = (id: number) => {
    setProjectsList(projectsList.filter((p) => p.id !== id));
  };

  const handleDeleteBlog = (slug: string) => {
    setBlogsList(blogsList.filter((b) => b.slug !== slug));
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#030014] flex items-center justify-center relative overflow-hidden px-6">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-violet-600/10 blur-[120px] pointer-events-none" />

        <div className="relative z-10 w-full max-w-sm">
          <Card className="p-8 border border-white/5 bg-white/5" interactive={false}>
            <div className="w-12 h-12 rounded-xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center mx-auto mb-6">
              <Lock className="w-6 h-6 text-cyan-400" />
            </div>

            <h1 className="text-center font-extrabold text-2xl text-white mb-2">
              Mirex CMS Admin Portal
            </h1>
            <p className="text-center text-[10px] text-gray-500 uppercase tracking-widest mb-8">
              Authenticate to edit content
            </p>

            <form onSubmit={handleLogin} className="flex flex-col gap-4">
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1.5">
                  Username
                </label>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="admin"
                  className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-2.5 text-xs text-white outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1.5">
                  Password
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-2.5 text-xs text-white outline-none focus:border-cyan-400"
                />
              </div>

              {loginError && (
                <p className="text-[11px] text-red-400 text-center">
                  Invalid username or password credentials. (Hint: admin / mirex123)
                </p>
              )}

              <Button type="submit" className="w-full mt-2">
                Login to Dashboard
              </Button>
            </form>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#030014] text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header toolbar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12 border-b border-white/5 pb-8">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
              <LayoutDashboard className="w-4 h-4" />
              <span>Admin Management</span>
            </div>
            <h1 className="text-3xl font-extrabold">MirexTech CMS Dashboard</h1>
          </div>

          <Button variant="outline" size="sm" onClick={handleLogout} className="gap-2 text-red-400 hover:border-red-500 hover:bg-red-500/5">
            <LogOut className="w-4 h-4" />
            Logout Session
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Tabs */}
          <div className="flex flex-col gap-2">
            {[
              { id: "projects", label: "Projects CMS", icon: FolderKanban },
              { id: "blogs", label: "Blogs CMS", icon: BookOpen },
              { id: "messages", label: "Messages Inbox", icon: MessageSquare },
              { id: "quotes", label: "Quotes Inbox", icon: ClipboardList },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as Tab)}
                  className={`flex items-center gap-3 p-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-violet-600 to-cyan-600 text-white border-transparent shadow-lg"
                      : "bg-white/5 border-white/5 text-gray-400 hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Content Block */}
          <div className="lg:col-span-3">
            {/* PROJECTS CMS */}
            {activeTab === "projects" && (
              <Card className="p-6 border border-white/5 bg-white/5" interactive={false}>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-extrabold text-xl">Manage Projects</h3>
                  <Button size="sm" onClick={() => setShowAddProject(!showAddProject)} className="gap-1">
                    <Plus className="w-4 h-4" /> Add Project
                  </Button>
                </div>

                {showAddProject && (
                  <form onSubmit={handleAddProjectSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 border border-white/10 rounded-xl p-4 mb-6 bg-black/25">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Project Title"
                        value={newProject.title}
                        onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-xs text-white"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Client Name"
                        value={newProject.client}
                        onChange={(e) => setNewProject({ ...newProject, client: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-xs text-white"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Duration (e.g. 4 Weeks)"
                        value={newProject.duration}
                        onChange={(e) => setNewProject({ ...newProject, duration: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-xs text-white"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Tech Tags (Comma separated)"
                        value={newProject.techTags}
                        onChange={(e) => setNewProject({ ...newProject, techTags: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-xs text-white"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <textarea
                        rows={2}
                        placeholder="Short description..."
                        value={newProject.description}
                        onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-xs text-white"
                      />
                    </div>
                    <div className="sm:col-span-2 flex gap-2 justify-end">
                      <button type="button" onClick={() => setShowAddProject(false)} className="text-xs text-gray-400 px-3 py-1">Cancel</button>
                      <Button type="submit" size="sm">Save Project</Button>
                    </div>
                  </form>
                )}

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-white/10 text-gray-400">
                        <th className="pb-3">Title</th>
                        <th className="pb-3">Client</th>
                        <th className="pb-3">Duration</th>
                        <th className="pb-3 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {projectsList.map((p) => (
                        <tr key={p.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                          <td className="py-3.5 font-bold">{p.title}</td>
                          <td className="py-3.5">{p.client}</td>
                          <td className="py-3.5">{p.duration}</td>
                          <td className="py-3.5 text-right">
                            <button onClick={() => handleDeleteProject(p.id)} className="text-red-400 hover:text-red-300 p-1" title="Delete">
                              <Trash2 className="w-4 h-4 inline" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            )}

            {/* BLOGS CMS */}
            {activeTab === "blogs" && (
              <Card className="p-6 border border-white/5 bg-white/5" interactive={false}>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-extrabold text-xl">Manage Articles</h3>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-white/10 text-gray-400">
                        <th className="pb-3">Title</th>
                        <th className="pb-3">Category</th>
                        <th className="pb-3">Read Time</th>
                        <th className="pb-3 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {blogsList.map((b) => (
                        <tr key={b.slug} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                          <td className="py-3.5 font-bold">{b.title}</td>
                          <td className="py-3.5">{b.category}</td>
                          <td className="py-3.5">{b.readTime}</td>
                          <td className="py-3.5 text-right">
                            <button onClick={() => handleDeleteBlog(b.slug)} className="text-red-400 hover:text-red-300 p-1">
                              <Trash2 className="w-4 h-4 inline" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            )}

            {/* MESSAGES INBOX */}
            {activeTab === "messages" && (
              <Card className="p-6 border border-white/5 bg-white/5" interactive={false}>
                <h3 className="font-extrabold text-xl mb-6">Inquiries Inbox</h3>
                <div className="flex flex-col gap-4">
                  {messagesList.map((msg) => (
                    <div key={msg.id} className="p-4 rounded-xl border border-white/5 bg-white/5 text-xs">
                      <div className="flex justify-between mb-2">
                        <span className="font-bold text-cyan-400">{msg.name} ({msg.email})</span>
                        <span className="text-[10px] text-gray-500 uppercase font-bold">{msg.subject}</span>
                      </div>
                      <p className="text-gray-400 leading-relaxed">{msg.message}</p>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {/* QUOTES INBOX */}
            {activeTab === "quotes" && (
              <Card className="p-6 border border-white/5 bg-white/5" interactive={false}>
                <h3 className="font-extrabold text-xl mb-6">Quote Requests</h3>
                <div className="flex flex-col gap-4">
                  {quotesList.map((q) => (
                    <div key={q.id} className="p-4 rounded-xl border border-white/5 bg-white/5 text-xs">
                      <div className="flex justify-between mb-2">
                        <span className="font-bold text-violet-400">{q.name} ({q.email})</span>
                        <span className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-2 py-0.5 rounded text-[9px] font-bold">{q.budget}</span>
                      </div>
                      <p className="text-gray-400 leading-relaxed mt-2"><span className="text-white font-semibold">Features:</span> {q.details}</p>
                    </div>
                  ))}
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
