import React from "react";

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

    return (
        <div className="flex flex-col gap-8 max-w-6xl mx-auto w-full">

            {/* Header */}
            <div className="flex justify-between">
                <div>
                    <h1 className="text-2xl font-bold">Tasks</h1>
                    <p className="mt-1">Manage and track all your tasks.</p>
                </div>

                <div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm">
                        New Task
                    </button>
                </div>
            </div>

            {/* Table */}
            <div>

                {/* Header Row */}
                <div className="grid grid-cols-6 text-sm font-medium text-gray-600 pb-2">
                    {cols.map((value, index) => (
                        <div key={index} className="text-center">
                            {value}
                        </div>
                    ))}
                </div>

                {/* Table Rows */}
                <div className="space-y-1">
                    {tasks.map((task) => (
                        <div
                            key={task.id}
                            className="grid grid-cols-6 items-center p-2 rounded-md text-sm hover:bg-gray-100"
                        >
                            <div>{task.title}</div>

                            <div className="text-center">{task.project}</div>

                            {/* Status */}
                            <div className="text-center">
                                <span
                                    className={`px-2 py-1 rounded-md text-xs font-medium
                                    ${task.status === "Done"
                                            ? "bg-green-100 text-green-700"
                                            : task.status === "In Progress"
                                                ? "bg-blue-100 text-blue-700"
                                                : "bg-gray-100 text-gray-700"
                                        }`}
                                >
                                    {task.status}
                                </span>
                            </div>

                            {/* Priority */}
                            <div className="text-center">
                                <span
                                    className={`px-2 py-1 rounded-md text-xs font-medium
                                    ${task.priority === "High"
                                            ? "bg-red-100 text-red-700"
                                            : task.priority === "Medium"
                                                ? "bg-yellow-100 text-yellow-700"
                                                : "bg-gray-100 text-gray-700"
                                        }`}
                                >
                                    {task.priority}
                                </span>
                            </div>

                            <div className="text-center">{task.dueDate}</div>

                            <div className="flex justify-center">
                                <div className="h-7 w-7 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-semibold">
                                    {task.assignee}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
