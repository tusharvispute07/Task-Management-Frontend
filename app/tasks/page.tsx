'use client'

import React from "react";
import Modal from "@/components/ui/Modal";
import TaskForm from "@/components/task/TaskForm";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Circle, Clock, ArrowUp, ArrowRight, ArrowDown, Calendar } from "lucide-react";

export default function TasksPage() {
    const tasks = [
        {
            id: 1,
            title: "Design landing page",
            project: "Website Redesign",
            status: "In Progress",
            priority: "High",
            dueDate: "Oct 10, 2026",
            assignee: "A"
        },
        {
            id: 2,
            title: "Fix login bug",
            project: "Mobile App V2",
            status: "Todo",
            priority: "Medium",
            dueDate: "Oct 12, 2026",
            assignee: "B"
        },
        {
            id: 3,
            title: "Prepare ad creatives",
            project: "Q4 Marketing Campaign",
            status: "Done",
            priority: "Low",
            dueDate: "Sep 30, 2026",
            assignee: "C"
        },
        {
            id: 4,
            title: "Migrate user tables",
            project: "Database Migration",
            status: "In Progress",
            priority: "High",
            dueDate: "Oct 15, 2026",
            assignee: "D"
        },
        {
            id: 5,
            title: "Integrate Stripe API",
            project: "Payment Gateway",
            status: "Todo",
            priority: "High",
            dueDate: "Dec 01, 2026",
            assignee: "E"
        },
        {
            id: 6,
            title: "Build analytics charts",
            project: "Analytics Dashboard",
            status: "In Progress",
            priority: "Medium",
            dueDate: "Oct 10, 2026",
            assignee: "F"
        }
    ];

    const cols = [
        "Task",
        "Project",
        "Status",
        "Priority",
        "Due Date",
        "Assignee"
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

    return (
        <div className="flex flex-col gap-8 max-w-6xl mx-auto w-full ">

            {/* Header */}
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-slate-900">Tasks</h1>
                    <p className="text-slate-500 mt-1.5">Manage and track all your tasks across projects.</p>
                </div>

                <Modal
                    trigger={<Button className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-sm font-medium transition-all shadow-sm">New Task</Button>}
                    title="Create Task"
                >
                    <TaskForm />
                </Modal>
            </div>

            {/* Table */}
            <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                <div className="overflow-x-auto w-full">
                    <table className="w-full caption-bottom text-sm">
                        <thead className="[&_tr]:border-b bg-slate-50/50">
                            <tr className="border-b transition-colors">
                                {cols.map((value, index) => (
                                    <th key={index} className="h-12 px-6 text-left align-middle font-medium text-slate-500">
                                        {value}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="[&_tr:last-child]:border-0 bg-white">
                            {tasks.map((task) => {
                                const statusDesign = getStatusDesign(task.status);
                                const priorityDesign = getPriorityDesign(task.priority);

                                return (
                                    <Modal
                                        key={task.id}
                                        trigger={
                                            <tr className="border-b transition-colors hover:bg-slate-50/70 cursor-pointer group">
                                                <td className="p-6 align-middle font-medium text-slate-900 group-hover:text-blue-600 transition-colors">
                                                    {task.title}
                                                </td>

                                                <td className="p-6 align-middle text-slate-500">
                                                    {task.project}
                                                </td>

                                                {/* Status */}
                                                <td className="p-6 align-middle">
                                                    <span
                                                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${statusDesign.classes}`}
                                                    >
                                                        {statusDesign.icon}
                                                        {task.status}
                                                    </span>
                                                </td>

                                                {/* Priority */}
                                                <td className="p-6 align-middle">
                                                    <span
                                                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${priorityDesign.classes}`}
                                                    >
                                                        {priorityDesign.icon}
                                                        {task.priority}
                                                    </span>
                                                </td>

                                                {/* Due Date */}
                                                <td className="p-6 align-middle text-slate-500 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <Calendar className="w-4 h-4 mr-2 text-slate-400" />
                                                        {task.dueDate}
                                                    </div>
                                                </td>

                                                {/* Assignee */}
                                                <td className="p-6 align-middle">
                                                    <div className="flex">
                                                        <div className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold border shadow-sm ${getAssigneeColor(task.assignee)}`}>
                                                            {task.assignee}
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        }
                                        title="Edit Task"
                                    >
                                        <TaskForm initialData={task} />
                                    </Modal>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
