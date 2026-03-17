import React from 'react';
import Modal from '@/components/ui/Modal';
import ProjectModal from '@/components/project/ProjectModal';

export default function ProjectsPage() {
    const projects = [
        {
            id: 1,
            name: "Website Redesign",
            description: "Overhaul the main marketing site with new branding and modern design.",
            status: "In Progress",
            progress: 65,
            dueDate: "Oct 24, 2026",
            members: 4
        },
        {
            id: 2,
            name: "Mobile App V2",
            description: "Develop the next major version of the iOS and Android applications.",
            status: "Planning",
            progress: 15,
            dueDate: "Nov 12, 2026",
            members: 6
        },
        {
            id: 3,
            name: "Q4 Marketing Campaign",
            description: "Prepare assets and overall strategy for the Q4 advertising push.",
            status: "Completed",
            progress: 100,
            dueDate: "Sep 30, 2026",
            members: 3
        },
        {
            id: 4,
            name: "Database Migration",
            description: "Migrate user data to the new distributed database safely.",
            status: "In Progress",
            progress: 40,
            dueDate: "Oct 15, 2026",
            members: 2
        },
        {
            id: 5,
            name: "Payment Gateway",
            description: "Integrate Stripe and PayPal for seamless user checkouts.",
            status: "Planning",
            progress: 5,
            dueDate: "Dec 01, 2026",
            members: 3
        },
        {
            id: 6,
            name: "Analytics Dashboard",
            description: "Build a comprehensive dashboard to visualize user engagement metrics.",
            status: "In Progress",
            progress: 80,
            dueDate: "Oct 10, 2026",
            members: 5
        }
    ];

    // Helper for dynamic badge styling
    const getStatusStyles = (status) => {
        switch (status) {
            case "Completed": return "bg-emerald-100 text-emerald-700";
            case "In Progress": return "bg-blue-100 text-blue-700";
            case "Planning": return "bg-amber-100 text-amber-700";
            default: return "bg-gray-100 text-gray-700";
        }
    };

    return (
        <div className="flex flex-col gap-8 max-w-6xl mx-auto w-full p-6">
            {/* Header Area */}
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='text-2xl font-bold text-gray-900'>Projects</h1>
                    <p className='text-gray-500 mt-1'>Manage and track all your active projects.</p>
                </div>

                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                    New Project
                </button>
            </div>

            {/* Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <div key={project.id} className="w-full p-5 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">

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
                ))}
            </div>

            <Modal>
                <ProjectModal />
            </Modal>

        </div>


    );
}