import React from 'react';

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
        case "Completed": return "bg-emerald-100 text-emerald-700";
        case "In Progress": return "bg-blue-100 text-blue-700";
        case "Planning": return "bg-amber-100 text-amber-700";
        default: return "bg-gray-100 text-gray-700";
    }
};

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="w-full p-5 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
                {/* Top Section */}
                <div className="flex justify-between items-start gap-2">
                    <h2 className="text-lg font-bold text-gray-800 truncate" title={project.name}>
                        {project.name}
                    </h2>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium whitespace-nowrap ${getStatusStyles(project.status)}`}>
                        {project.status}
                    </span>
                </div>

                {/* Mid Section */}
                <div className="mt-4">
                    <div className="flex justify-between text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        <span>Team: {project.members}</span>
                        <span>Due: {project.dueDate.split(',')[0]}</span>
                    </div>

                    <p className="mt-3 text-sm text-gray-600 line-clamp-2 leading-relaxed h-10">
                        {project.description}
                    </p>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                {/* Progress Bar */}
                <div className="flex-1 max-w-[140px]">
                    <div className="relative w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                            style={{ width: `${project.progress}%` }}
                            className={`h-full transition-all duration-500 ${project.progress < 40 ? "bg-red-400" : project.progress < 75 ? "bg-amber-400" : "bg-emerald-400"
                                }`}
                        />
                    </div>
                    <span className="text-[10px] font-bold text-gray-500 mt-1 block">
                        {project.progress}% Complete
                    </span>
                </div>

                {/* Members Visual (Dynamic Logic) */}
                <div className="flex -space-x-2">
                    {[...Array(Math.min(project.members, 3))].map((_, i) => (
                        <div key={i} className="h-7 w-7 rounded-full ring-2 ring-white bg-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-600">
                            U{i + 1}
                        </div>
                    ))}
                    {project.members > 3 && (
                        <div className="h-7 w-7 rounded-full ring-2 ring-white bg-indigo-50 flex items-center justify-center text-[10px] text-indigo-600 font-bold">
                            +{project.members - 3}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
