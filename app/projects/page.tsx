import React from 'react';
import Modal from '@/components/ui/Modal';
import ProjectForm from '@/components/project/ProjectForm';
import ProjectCard from '@/components/project/ProjectCard';
import { Button } from '@/components/ui/button';

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

    return (
        <div className="flex flex-col gap-8 max-w-6xl mx-auto w-full">
            {/* Header Area */}
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='text-2xl font-bold text-gray-900'>Projects</h1>
                    <p className='text-gray-500 mt-1'>Manage and track all your active projects.</p>
                </div>

                <Modal
                    trigger={
                        <Button className="bg-indigo-600 hover:bg-black text-white px-4 py-2 font-medium transition-colors">
                            New Project
                        </Button>
                    }
                    title="Create Project"
                >
                    <ProjectForm />
                </Modal>
            </div>

            {/* Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <Modal
                        key={project.id}
                        trigger={
                            <div className="cursor-pointer h-full transition-transform active:scale-[0.98]">
                                <ProjectCard project={project} />
                            </div>
                        }
                        title="Edit Project"
                    >
                        <ProjectForm initialData={project} />
                    </Modal>
                ))}
            </div>

        </div>


    );
}