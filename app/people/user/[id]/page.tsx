import React from 'react';
import Link from 'next/link';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
    ChevronRight, Save, User, Mail, Shield,
    CheckCircle2, MessageSquare, Activity, Briefcase, Calendar, Clock
} from "lucide-react";

export default function SingleUser() {
    // Dummy Data mapped from app/people/page.tsx
    const user = {
        firstName: "Tushar",
        lastName: "Vispute",
        email: "tusharvispute07@gmail.com",
        role: "Admin",
        initials: "TV",
        status: "Active",
        joinedDate: "Mar 15, 2024",
        lastActive: "2 hours ago",
        teams: ["Backend", "DevOps"]
    };

    const assignedProjects = [
        { id: 1, name: "Website Redesign", role: "Lead Developer", progress: 65, status: "In Progress" },
        { id: 2, name: "Backend Migration", role: "Architect", progress: 30, status: "Critical" }
    ];

    const recentActivity = [
        { id: 1, action: "completed task", target: "Design landing page", time: "2 hours ago", icon: <CheckCircle2 className="w-4 h-4 text-emerald-500" /> },
        { id: 2, action: "commented on", target: "Backend Migration", time: "5 hours ago", icon: <MessageSquare className="w-4 h-4 text-blue-500" /> },
        { id: 3, action: "assigned task to", target: "Rahul Sharma", time: "1 day ago", icon: <User className="w-4 h-4 text-amber-500" /> },
    ];

    const getRoleColor = (role: string) => {
        return role === "Admin" ? "bg-blue-100 text-blue-700 border-blue-200" : "bg-slate-100 text-slate-700 border-slate-200";
    };

    return (
        <div className="flex flex-col gap-8 max-w-6xl mx-auto w-full pb-12">

            {/* Hero Banner */}
            <div className="relative rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm">
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
                <div className="relative p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex flex-1 items-center gap-6">
                        {/* Avatar */}
                        <div className="h-20 w-20 shrink-0 rounded-full flex items-center justify-center text-2xl font-bold bg-indigo-100 text-indigo-700 border-2 border-white shadow-md">
                            {user.initials}
                        </div>

                        <div className="space-y-3 flex-1">
                            {/* Breadcrumbs */}
                            <div className="flex items-center text-sm font-medium text-slate-500">
                                <Link href="/people" className="hover:text-slate-900 transition-colors">People</Link>
                                <ChevronRight className="w-4 h-4 mx-2 text-slate-400" />
                                <span className="text-slate-900">{user.firstName} {user.lastName}</span>
                            </div>

                            <div>
                                <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">
                                    {user.firstName} {user.lastName}
                                </h1>
                                <div className="flex flex-wrap items-center gap-3">
                                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border bg-emerald-50 text-emerald-700 border-emerald-200">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse"></div>
                                        {user.status}
                                    </span>
                                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${getRoleColor(user.role)}`}>
                                        <Shield className="w-3.5 h-3.5 mr-1.5" />
                                        {user.role}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3 shrink-0">
                        <Button variant="outline" className="text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700 hover:border-red-300 transition-colors">
                            Deactivate
                        </Button>
                        <Button className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-sm font-medium transition-all shadow-sm">
                            <Save className="w-4 h-4 mr-2" /> Save Changes
                        </Button>
                    </div>
                </div>
            </div>

            {/* Main Content Layout grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Left Column (Main Info - 70%) */}
                <div className="lg:col-span-2 flex flex-col gap-8">

                    {/* Personal Information Form */}
                    <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                        <div className="p-5 border-b border-slate-200 bg-slate-50/50">
                            <h2 className="text-lg font-bold tracking-tight text-slate-900 flex items-center">
                                <User className="w-5 h-5 text-slate-700 mr-2" />
                                Personal Information
                            </h2>
                        </div>

                        <div className="p-6 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* First Name */}
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700">First Name</label>
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        defaultValue={user.firstName}
                                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all shadow-sm"
                                    />
                                </div>

                                {/* Last Name */}
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700">Last Name</label>
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        defaultValue={user.lastName}
                                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all shadow-sm"
                                    />
                                </div>

                                {/* Email */}
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-sm font-semibold text-slate-700">Email Address</label>
                                    <div className="relative">
                                        <Mail className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            defaultValue={user.email}
                                            className="w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all shadow-sm"
                                        />
                                    </div>
                                </div>

                                {/* Role Selection */}
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700">Role</label>
                                    <Select defaultValue={user.role.toLowerCase()}>
                                        <SelectTrigger className="w-full rounded-xl border-slate-200 h-10.5 shadow-sm">
                                            <SelectValue placeholder="Select a role" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Site Roles</SelectLabel>
                                                <SelectItem value="admin">Admin</SelectItem>
                                                <SelectItem value="member">Member</SelectItem>
                                                <SelectItem value="viewer">Viewer</SelectItem>
                                                <SelectItem value="guest">Guest</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Teams Selection */}
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700">Assign to Team</label>
                                    <Select defaultValue={user.teams[0].toLowerCase()}>
                                        <SelectTrigger className="w-full rounded-xl border-slate-200 h-10.5 shadow-sm">
                                            <SelectValue placeholder="Select a team" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Available Teams</SelectLabel>
                                                <SelectItem value="backend">Backend</SelectItem>
                                                <SelectItem value="frontend">Frontend</SelectItem>
                                                <SelectItem value="devops">DevOps</SelectItem>
                                                <SelectItem value="design">Design</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {user.teams.map((team, idx) => (
                                            <span key={idx} className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                                                {team}
                                                <button className="ml-1.5 text-slate-400 hover:text-red-500 transition-colors">
                                                    &times;
                                                </button>
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Activity Timeline */}
                    <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                        <div className="p-5 border-b border-slate-200 bg-slate-50/50">
                            <h2 className="text-lg font-bold tracking-tight text-slate-900 flex items-center">
                                <Activity className="w-5 h-5 text-slate-700 mr-2" />
                                Recent Activity
                            </h2>
                        </div>

                        <div className="p-6">
                            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[15px] before:-translate-x-px before:h-full before:w-0.5 before:bg-slate-100">
                                {recentActivity.map((act) => (
                                    <div key={act.id} className="relative flex items-start gap-4">
                                        <div className="relative z-10 w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm shrink-0">
                                            {act.icon}
                                        </div>
                                        <div className="pt-1.5 flex flex-col w-full">
                                            <div className="flex justify-between items-start">
                                                <p className="text-sm text-slate-600 leading-snug">
                                                    <span className="font-semibold text-slate-900">{user.firstName}</span> {act.action} <span className="font-medium text-slate-900">{act.target}</span>
                                                </p>
                                                <span className="text-xs font-medium text-slate-400 shrink-0 mt-0.5">{act.time}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

                {/* Right Column (Sidebar Cards - 30%) */}
                <div className="col-span-1 flex flex-col gap-6">

                    {/* Account Settings / Meta */}
                    <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                        <div className="p-5 border-b border-slate-200 bg-slate-50/50">
                            <h3 className="text-sm font-bold tracking-tight text-slate-900">Account Details</h3>
                        </div>
                        <div className="p-6 space-y-6">
                            <div>
                                <p className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wider">Member Since</p>
                                <div className="flex items-center text-sm font-medium text-slate-900">
                                    <Calendar className="w-4 h-4 mr-2.5 text-slate-400" />
                                    {user.joinedDate}
                                </div>
                            </div>

                            <div className="pt-5 border-t border-slate-100">
                                <p className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wider">Last Active</p>
                                <div className="flex items-center text-sm font-medium text-slate-900">
                                    <Clock className="w-4 h-4 mr-2.5 text-slate-400" />
                                    {user.lastActive}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Assigned Projects */}
                    <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                        <div className="p-5 border-b border-slate-200 bg-slate-50/50">
                            <h3 className="text-sm font-bold tracking-tight text-slate-900 flex items-center">
                                <Briefcase className="w-4 h-4 text-slate-700 mr-2" />
                                Current Projects
                            </h3>
                        </div>
                        <div className="p-2">
                            {assignedProjects.map((proj) => (
                                <Link key={proj.id} href={`/projects/${proj.id}`}>
                                    <div className="p-4 hover:bg-slate-50/70 rounded-lg transition-colors group cursor-pointer border-b border-transparent hover:border-slate-100 flex flex-col gap-3">
                                        <div>
                                            <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">{proj.name}</h4>
                                            <p className="text-xs text-slate-500 flex items-center">
                                                <User className="w-3 h-3 mr-1.5" />
                                                {proj.role}
                                            </p>
                                        </div>
                                        <div className="space-y-1.5">
                                            <div className="flex justify-between text-xs font-medium">
                                                <span className={`${proj.status === 'Critical' ? 'text-red-600' : 'text-slate-600'}`}>{proj.status}</span>
                                                <span className="text-slate-900">{proj.progress}%</span>
                                            </div>
                                            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full rounded-full ${proj.status === 'Critical' ? 'bg-red-500' : 'bg-slate-900'}`}
                                                    style={{ width: `${proj.progress}%` }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}