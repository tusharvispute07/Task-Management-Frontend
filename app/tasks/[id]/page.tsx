import React from 'react';
import Link from 'next/link';
import {
    Calendar, CheckCircle2, Clock, Circle, ArrowUp, ArrowRight, ArrowDown,
    ChevronRight, PenLine, FolderClosed, MessageSquare, Paperclip
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Modal from '@/components/ui/Modal';
import TaskForm from '@/components/task/TaskForm';

export default function SingleTask() {
    // Dummy Data
    const task = {
        title: "Design landing page",
        description: "Create high-fidelity mockups for the new marketing landing page. Ensure the design aligns with our new brand guidelines and is optimized for conversions.",
        project: "Website Redesign",
        status: "In Progress",
        priority: "High",
        dueDate: "Oct 24, 2026",
        assignee: "Tushar",
        reporter: "Rahul",
        createdAt: "2 days ago"
    };

    const comments = [
        { id: 1, user: "Rahul", action: "added a comment", time: "2 hours ago", content: "The hero section looks great! Let's make sure the CTA button pops out a bit more.", icon: <MessageSquare className="w-4 h-4 text-blue-500" /> },
        { id: 2, user: "Tushar", action: "changed status from", target: "Todo to In Progress", time: "5 hours ago", icon: <Clock className="w-4 h-4 text-amber-500" /> },
        { id: 3, user: "Anita", action: "attached a file", target: "brand-assets.zip", time: "1 day ago", icon: <Paperclip className="w-4 h-4 text-purple-500" /> },
    ];

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

    const taskStatus = getStatusDesign(task.status);
    const taskPriority = getPriorityDesign(task.priority);

    return (
        <div className="flex flex-col gap-8 max-w-6xl mx-auto w-full pb-12">

            {/* Hero Banner */}
            <div className="relative rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm">
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
                <div className="relative p-8 md:p-10 flex flex-col md:flex-row md:items-start justify-between gap-6">
                    <div className="flex-1 space-y-4">
                        {/* Breadcrumbs */}
                        <div className="flex items-center text-sm font-medium text-slate-500">
                            <Link href="/tasks" className="hover:text-slate-900 transition-colors">Tasks</Link>
                            <ChevronRight className="w-4 h-4 mx-2 text-slate-400" />
                            <span className="text-slate-900">{task.title}</span>
                        </div>

                        <div>
                            <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-3">{task.title}</h1>
                            <div className="flex flex-wrap items-center gap-3">
                                <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${taskStatus.classes}`}>
                                    {taskStatus.icon}
                                    {task.status}
                                </span>
                                <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${taskPriority.classes}`}>
                                    {taskPriority.icon}
                                    {task.priority} Priority
                                </span>
                            </div>
                        </div>

                        <p className="text-slate-500 leading-relaxed max-w-2xl text-base">
                            {task.description}
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3 shrink-0">
                        <Modal
                            trigger={<Button variant="outline" className="text-slate-700 border-slate-300 hover:bg-slate-50">
                                <PenLine className="w-4 h-4 mr-2" /> Edit
                            </Button>}
                            title='Edit Task'
                        >
                            <TaskForm />
                        </Modal>

                        <Button className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-sm font-medium transition-all shadow-sm">
                            <CheckCircle2 className="w-4 h-4 mr-2" /> Complete Task
                        </Button>
                    </div>
                </div>

            </div>

            {/* Main Content Layout grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Left Column (Main Info - 70%) */}
                <div className="lg:col-span-2 flex flex-col gap-8">

                    {/* Activity & Comments */}
                    <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                        <div className="p-5 border-b border-slate-200 bg-slate-50/50">
                            <h2 className="text-lg font-bold tracking-tight text-slate-900 flex items-center">
                                <MessageSquare className="w-5 h-5 text-slate-700 mr-2" />
                                Activity & Comments
                            </h2>
                        </div>

                        <div className="p-6">
                            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[15px] before:-translate-x-px before:h-full before:w-0.5 before:bg-slate-100">
                                {comments.map((act) => (
                                    <div key={act.id} className="relative flex items-start gap-4">
                                        <div className="relative z-10 w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm shrink-0">
                                            {act.icon}
                                        </div>
                                        <div className="pt-1.5 flex flex-col w-full">
                                            <div className="flex justify-between items-start">
                                                <p className="text-sm text-slate-600 leading-snug">
                                                    <span className="font-semibold text-slate-900">{act.user}</span> {act.action} {act.target && <span className="font-medium text-slate-900">{act.target}</span>}
                                                </p>
                                                <span className="text-xs font-medium text-slate-400 shrink-0 mt-0.5">{act.time}</span>
                                            </div>
                                            {act.content && (
                                                <div className="mt-3 p-4 rounded-xl bg-slate-50 border border-slate-100 text-sm text-slate-700 leading-relaxed shadow-sm">
                                                    {act.content}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Comment Input */}
                            <div className="mt-8 pt-6 border-t border-slate-100 flex gap-4">
                                <div className={`h-10 w-10 shrink-0 rounded-full flex items-center justify-center text-sm font-bold border shadow-sm ${getAssigneeColor("Tushar")}`}>
                                    T
                                </div>
                                <div className="flex-1 relative">
                                    <textarea
                                        placeholder="Add a comment or share an update..."
                                        className="w-full min-h-[120px] resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent placeholder:text-slate-400 transition-all shadow-sm"
                                    />
                                    <div className="absolute bottom-3 right-3 flex items-center gap-2">
                                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-slate-400 hover:text-slate-700">
                                            <Paperclip className="w-4 h-4" />
                                        </Button>
                                        <Button size="sm" className="bg-slate-900 text-white hover:bg-slate-800 rounded-lg px-4 shadow-sm">
                                            Post Comment
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Right Column (Sidebar Cards - 30%) */}
                <div className="col-span-1 flex flex-col gap-6">

                    {/* Task Details */}
                    <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                        <div className="p-5 border-b border-slate-200 bg-slate-50/50">
                            <h3 className="text-sm font-bold tracking-tight text-slate-900">Task Details</h3>
                        </div>
                        <div className="p-6 space-y-6">
                            <div>
                                <p className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wider">Project</p>
                                <div className="flex items-center text-sm font-medium text-slate-900 p-2 -mx-2 hover:bg-slate-50 rounded-lg transition-colors">
                                    <FolderClosed className="w-4 h-4 mr-2.5 text-slate-400" />
                                    <Link href="/projects/1" className="hover:text-blue-600 transition-colors">
                                        {task.project}
                                    </Link>
                                </div>
                            </div>

                            <div>
                                <p className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wider">Due Date</p>
                                <div className="flex items-center text-sm font-medium text-slate-900 p-2 -mx-2 hover:bg-slate-50 rounded-lg transition-colors">
                                    <Calendar className="w-4 h-4 mr-2.5 text-slate-400" />
                                    {task.dueDate}
                                </div>
                            </div>

                            <div className="pt-5 border-t border-slate-100">
                                <p className="text-xs font-semibold text-slate-500 mb-3 uppercase tracking-wider">Assignee</p>
                                <div className="flex items-center gap-3 p-2 -mx-2 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer">
                                    <div className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold border shadow-sm ${getAssigneeColor(task.assignee)}`}>
                                        {task.assignee[0]}
                                    </div>
                                    <span className="text-sm font-medium text-slate-900">{task.assignee}</span>
                                </div>
                            </div>

                            <div className="pt-5 border-t border-slate-100">
                                <p className="text-xs font-semibold text-slate-500 mb-3 uppercase tracking-wider">Reporter</p>
                                <div className="flex items-center gap-3 p-2 -mx-2 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer">
                                    <div className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold border shadow-sm ${getAssigneeColor(task.reporter)}`}>
                                        {task.reporter[0]}
                                    </div>
                                    <span className="text-sm font-medium text-slate-900">{task.reporter}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}