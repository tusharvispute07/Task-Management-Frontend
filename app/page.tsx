import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 max-w-6xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-gray-800 tracking-tight">Welcome User!</h1>
        <p className="text-gray-500 mt-1">Here's what's happening with your projects today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100/50 flex flex-col justify-between h-32">
          <span className="text-sm font-medium text-gray-500">Total Tasks</span>
          <span className="text-3xl font-bold text-gray-800">24</span>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100/50 flex flex-col justify-between h-32">
          <span className="text-sm font-medium text-gray-500">In Progress</span>
          <span className="text-3xl font-bold text-indigo-600">8</span>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100/50 flex flex-col justify-between h-32">
          <span className="text-sm font-medium text-gray-500">Completed</span>
          <span className="text-3xl font-bold text-emerald-600">16</span>
        </div>
      </div>

      <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-100/50 min-h-[400px] flex items-center justify-center">
        <p className="text-gray-400 font-medium">Main Content Area</p>
      </div>
    </div>
  );
}
