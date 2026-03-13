import Link from "next/link"

export default function SideBar() {
    return (
        <div className="flex flex-col w-full h-full bg-white">
            <div className="h-16 flex items-center px-6 border-b border-gray-100 shrink-0">
                <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center">
                        <span className="text-white font-bold text-xl leading-none">T</span>
                    </div>
                    <h1 className="text-xl font-bold text-gray-900 tracking-tight">Tenant</h1>
                </div>
            </div>
            <nav className="flex flex-col gap-1 p-4 flex-1 overflow-y-auto">
                <Link className="px-3 py-2 text-gray-600 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors font-medium text-sm flex items-center gap-3" href="/">
                    Dashboard
                </Link>
                <Link className="px-3 py-2 text-gray-600 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors font-medium text-sm flex items-center gap-3" href="/projects">
                    Projects
                </Link>
                <Link className="px-3 py-2 text-gray-600 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors font-medium text-sm flex items-center gap-3" href="/tasks">
                    Tasks
                </Link>
                <Link className="px-3 py-2 text-gray-600 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors font-medium text-sm flex items-center gap-3" href="/settings">
                    Settings
                </Link>
            </nav>
        </div>
    )
}