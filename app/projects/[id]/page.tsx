import React from 'react';
import Link from 'next/link';
import {
    Calendar, CheckCircle2, Clock, Circle, ArrowUp, ArrowRight, ArrowDown,
    MoreHorizontal, Plus, Activity,
    ChevronRight, PenLine, CheckSquare
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SingleProject() {
    // Dummy Data
    const project = {
        title: "Website Redesign",
        description: "Overhaul the main marketing site with new branding, modern design, and optimized conversion funnels to improve user engagement and sales.",
        status: "In Progress",
        priority: "High",
        progress: 65,
        dueDate: "Oct 24, 2026",
        daysLeft: 14,
        members: ["Tushar", "Rahul", "Anita"],
    };

    const tasks = [
        { id: 1, title: "Design landing page", status: "Done", priority: "High", assignee: "T" },
        { id: 2, title: "Implement hero section", status: "In Progress", priority: "Medium", assignee: "R" },
        { id: 3, title: "Optimize all SVG and PNG assets", status: "Todo", priority: "Low", assignee: "A" },
        { id: 4, title: "Setup responsive routing layout", status: "Done", priority: "High", assignee: "T" },
    ];

    const activities = [
        { id: 1, user: "Tushar", action: "completed task", target: "Design landing page", time: "2 hours ago", icon: <CheckCircle2 className="w-4 h-4 text-emerald-500" /> },
        { id: 2, user: "Rahul", action: "changed priority on", target: "Implement hero section", time: "5 hours ago", icon: <ArrowUp className="w-4 h-4 text-red-500" /> },
        { id: 3, user: "Anita", action: "changed due date for", target: "Optimize all SVG and PNG assets", time: "1 day ago", icon: <Calendar className="w-4 h-4 text-amber-500" /> },
    ];

    // Helper functions synchronized with TasksPage
    const getStatusDesign = (status: string) => {
        switch (status) {
            case "Done":
                return { icon: <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" />, classes: "bg-emerald-50 text-emerald-700 border-emerald-200" };
            case "In Progress":
                return { icon: <Clock className="w-3.5 h-3.5 mr-1.5" />, classes: "bg-blue-50 text-blue-700 border-blue-200" };
            case "Todo":
            default:
                return { icon: <Circle className="w-3.5 h-3.5 mr-1.5" />, classes: "bg-slate-50 text-slate-700 border-slate-200" };
        }
    };

    const getPriorityDesign = (priority: string) => {
        switch (priority) {
            case "High":
                return { icon: <ArrowUp className="w-3.5 h-3.5 mr-1.5 text-red-500" />, classes: "bg-red-50 text-red-700 border-red-200" };
            case "Medium":
                return { icon: <ArrowRight className="w-3.5 h-3.5 mr-1.5 text-amber-500" />, classes: "bg-amber-50 text-amber-700 border-amber-200" };
            case "Low":
            default:
                return { icon: <ArrowDown className="w-3.5 h-3.5 mr-1.5 text-slate-500" />, classes: "bg-slate-50 text-slate-700 border-slate-200" };
        }
    };

    const getAssigneeColor = (assignee: string) => {
        const colors = [
            "bg-blue-100 text-blue-700 border-blue-200",
            "bg-emerald-100 text-emerald-700 border-emerald-200",
            "bg-amber-100 text-amber-700 border-amber-200",
            "bg-purple-100 text-purple-700 border-purple-200",
            "bg-pink-100 text-pink-700 border-pink-200",
            "bg-indigo-100 text-indigo-700 border-indigo-200"
        ];
        const charCode = assignee.charCodeAt(0) || 0;
        return colors[charCode % colors.length];
    };

    const projectStatus = getStatusDesign(project.status);
    const projectPriority = getPriorityDesign(project.priority);

    return (
        <div className="flex flex-col gap-8 max-w-6xl mx-auto w-full pb-12">

            {/* Unique Hero Banner matching styling but adding flair */}
            <div className="relative rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm">
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
                <div className="relative p-8 md:p-10 flex flex-col md:flex-row md:items-start justify-between gap-6">
                    <div className="flex-1 space-y-4">
                        {/* Breadcrumbs */}
                        <div className="flex items-center text-sm font-medium text-slate-500">
                            <Link href="/projects" className="hover:text-slate-900 transition-colors">Projects</Link>
                            <ChevronRight className="w-4 h-4 mx-2 text-slate-400" />
                            <span className="text-slate-900">{project.title}</span>
                        </div>

                        <div>
                            <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-3">{project.title}</h1>
                            <div className="flex flex-wrap items-center gap-3">
                                <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${projectStatus.classes}`}>
                                    {projectStatus.icon}
                                    {project.status}
                                </span>
                                <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${projectPriority.classes}`}>
                                    {projectPriority.icon}
                                    {project.priority} Priority
                                </span>
                            </div>
                        </div>

                        <p className="text-slate-500 leading-relaxed max-w-2xl text-base">
                            {project.description}
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3 shrink-0">
                        <Button variant="outline" className="text-slate-700 border-slate-300 hover:bg-slate-50">
                            <PenLine className="w-4 h-4 mr-2" /> Edit
                        </Button>
                        <Button className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-sm font-medium transition-all shadow-sm">
                            <CheckCircle2 className="w-4 h-4 mr-2" /> Complete Project
                        </Button>
                    </div>
                </div>

                {/* Progress Bar locked to bottom of hero */}
                <div className="w-full bg-slate-100 h-2">
                    <div className="bg-slate-900 h-full transition-all duration-1000" style={{ width: `${project.progress}%` }} />
                </div>
            </div>

            {/* Main Content Layout grid matching other pages */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Left Column (Main Info - 70%) */}
                <div className="lg:col-span-2 flex flex-col gap-8">

                    {/* Consistent Table Container matching TasksPage */}
                    <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                        <div className="p-5 border-b border-slate-200 flex justify-between items-end bg-slate-50/50">
                            <div>
                                <h2 className="text-lg font-bold tracking-tight text-slate-900 flex items-center">
                                    <CheckSquare className="w-5 h-5 mr-no text-slate-700 mr-2" />
                                    Project Tasks
                                </h2>
                            </div>
                            <Button className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-sm font-medium transition-all shadow-sm">
                                <Plus className="w-4 h-4 mr-1.5" /> Add Task
                            </Button>
                        </div>

                        <div className="overflow-x-auto w-full">
                            <table className="w-full caption-bottom text-sm">
                                <thead className="[&_tr]:border-b bg-slate-50/50">
                                    <tr className="border-b transition-colors">
                                        <th className="h-12 px-6 text-left align-middle font-medium text-slate-500">Task</th>
                                        <th className="h-12 px-6 text-left align-middle font-medium text-slate-500">Status</th>
                                        <th className="h-12 px-6 text-left align-middle font-medium text-slate-500">Priority</th>
                                        <th className="h-12 px-6 text-left align-middle font-medium text-slate-500">Assignee</th>
                                    </tr>
                                </thead>
                                <tbody className="[&_tr:last-child]:border-0 bg-white">
                                    {tasks.map((task) => {
                                        const statusObj = getStatusDesign(task.status);
                                        const priorityObj = getPriorityDesign(task.priority);

                                        return (
                                            <tr
                                                key={task.id}
                                                className="border-b transition-colors hover:bg-slate-50/70 cursor-pointer group relative"
                                            >
                                                <td className="p-6 align-middle font-medium text-slate-900 group-hover:text-blue-600 transition-colors">
                                                    <Link href={`/tasks/${task.id}`} className="absolute inset-0 z-0" />
                                                    <span className="relative z-10">{task.title}</span>
                                                </td>
                                                <td className="p-6 align-middle">
                                                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border whitespace-nowrap ${statusObj.classes}`}>
                                                        {statusObj.icon}
                                                        {task.status}
                                                    </span>
                                                </td>
                                                <td className="p-6 align-middle">
                                                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border whitespace-nowrap ${priorityObj.classes}`}>
                                                        {priorityObj.icon}
                                                        {task.priority}
                                                    </span>
                                                </td>
                                                <td className="p-6 align-middle">
                                                    <div className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold border shadow-sm ${getAssigneeColor(task.assignee)}`}>
                                                        {task.assignee}
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Right Column (Sidebar Cards - 30%) */}
                <div className="col-span-1 flex flex-col gap-6">

                    {/* Unique layout for team & meta */}
                    <div className="rounded-xl border border-slate-200 bg-white shadow-sm p-6 space-y-6">
                        <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                            <div>
                                <p className="text-sm font-medium text-slate-500 mb-1">Due Date</p>
                                <div className="flex items-center font-bold text-slate-900">
                                    <Calendar className="w-4 h-4 mr-2 text-slate-400" />
                                    {project.dueDate}
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-sm font-medium text-slate-500 mb-1">Progress</p>
                                <div className="font-bold text-slate-900">
                                    {project.progress}% Complete
                                </div>
                            </div>
                        </div>

                        <div>
                            <p className="text-sm font-medium text-slate-500 mb-3">Project Team</p>
                            <div className="flex flex-wrap gap-2">
                                {project.members.map((member, idx) => (
                                    <div key={idx} className="flex items-center rounded-full border border-slate-200 bg-slate-50 pl-1 pr-3 py-1 gap-2 shadow-sm">
                                        <div className={`h-6 w-6 rounded-full flex items-center justify-center text-[10px] font-bold border ${getAssigneeColor(member[0])}`}>
                                            {member[0]}
                                        </div>
                                        <span className="text-sm font-medium text-slate-700">{member}</span>
                                    </div>
                                ))}
                                <Button variant="outline" size="sm" className="rounded-full border-dashed h-8 px-3 text-slate-500">
                                    <Plus className="w-3.5 h-3.5 mr-1" /> Add
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Timeline matching overall aesthetic */}
                    <div className="rounded-xl border border-slate-200 bg-white shadow-sm p-6">
                        <h3 className="text-sm font-bold tracking-tight text-slate-900 mb-6 flex items-center">
                            <Activity className="w-4 h-4 mr-2 text-slate-400" />
                            Recent Activity
                        </h3>

                        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[15px] before:-translate-x-px before:h-full before:w-0.5 before:bg-slate-100">
                            {activities.map((act) => (
                                <div key={act.id} className="relative flex items-start gap-4">
                                    <div className="relative z-10 w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm shrink-0">
                                        {act.icon}
                                    </div>
                                    <div className="pt-1.5 flex flex-col">
                                        <p className="text-sm text-slate-600 leading-snug">
                                            <span className="font-semibold text-slate-900">{act.user}</span> {act.action} <span className="font-medium text-slate-900">{act.target}</span>
                                        </p>
                                        <span className="text-xs font-medium text-slate-400 mt-1">{act.time}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}