import React from 'react';
import { Calendar, Folder, MoreVertical, Clock } from 'lucide-react';

export interface Project {
    id: number | string;
    name: string;
    description: string;
    status: string;
    progress: number;
    dueDate: string;
    members: number;
}

interface ProjectCardProps {
    project: Project;
}

const getStatusStyles = (status: string) => {
    switch (status) {
        case "Completed": return "bg-emerald-50 text-emerald-700 border-emerald-200";
        case "In Progress": return "bg-blue-50 text-blue-700 border-blue-200";
        case "Planning": return "bg-amber-50 text-amber-700 border-amber-200";
        default: return "bg-slate-50 text-slate-700 border-slate-200";
    }
};

const getAvatarColor = (index: number) => {
    const colors = [
        "bg-blue-100 text-blue-700 border-blue-200",
        "bg-emerald-100 text-emerald-700 border-emerald-200",
        "bg-amber-100 text-amber-700 border-amber-200",
        "bg-purple-100 text-purple-700 border-purple-200",
        "bg-pink-100 text-pink-700 border-pink-200",
    ];
    return colors[index % colors.length];
};

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="w-full bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all group flex flex-col justify-between overflow-hidden cursor-pointer">
            <div className="p-6">
                {/* Header Section */}
                <div className="flex justify-between items-start gap-4">
                    <div className="flex items-start gap-4 flex-1">
                        <div className="mt-0.5 h-11 w-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-800 shrink-0">
                            <Folder className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h2 className="text-lg font-bold text-slate-900 truncate group-hover:text-indigo-600 transition-colors tracking-tight" title={project.name}>
                                {project.name}
                            </h2>
                            <p className="mt-1.5 text-sm text-slate-500 line-clamp-2 leading-relaxed">
                                {project.description}
                            </p>
                        </div>
                    </div>
                    <button className="text-slate-400 hover:text-slate-600 p-1.5 rounded-md hover:bg-slate-100 transition-colors shrink-0">
                        <MoreVertical className="w-5 h-5" />
                    </button>
                </div>

                {/* Sub-info */}
                <div className="mt-6 flex items-center justify-between gap-2">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${getStatusStyles(project.status)}`}>
                        {project.status === "In Progress" && <Clock className="w-3 h-3 mr-1.5" />}
                        {project.status}
                    </span>
                    <div className="flex items-center text-xs font-semibold text-slate-500 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100">
                        <Calendar className="w-3.5 h-3.5 mr-1.5 text-slate-400" />
                        {project.dueDate.split(',')[0]}
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="px-6 py-5 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between mt-auto">
                {/* Progress Bar */}
                <div className="flex-1 max-w-[140px]">
                    <div className="flex justify-between items-end mb-1.5">
                        <span className="text-xs font-semibold text-slate-700">Progress</span>
                        <span className="text-[10px] font-bold text-slate-500">
                            {project.progress}%
                        </span>
                    </div>
                    <div className="relative w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                        <div
                            style={{ width: `${project.progress}%` }}
                            className={`h-full rounded-full transition-all duration-500 ${project.progress < 40 ? "bg-red-500" : project.progress < 75 ? "bg-amber-500" : "bg-emerald-500"
                                }`}
                        />
                    </div>
                </div>

                {/* Members Visual */}
                <div className="flex -space-x-1.5 items-center mt-1">
                    {[...Array(Math.min(project.members, 3))].map((_, i) => (
                        <div key={i} className={`h-7 w-7 rounded-full ring-2 ring-white border flex items-center justify-center text-[10px] font-bold shadow-sm ${getAvatarColor(i)}`}>
                            {String.fromCharCode(65 + i)}
                        </div>
                    ))}
                    {project.members > 3 && (
                        <div className="h-7 w-7 rounded-full ring-2 ring-white bg-slate-100 border border-slate-200 flex items-center justify-center text-[10px] text-slate-600 font-bold shadow-sm">
                            +{project.members - 3}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
