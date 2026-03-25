import { Users, MoreVertical, ArrowRight, Shield, Code, Palette } from "lucide-react";

export default function TeamCard() {
    const teamMembers = [
        { name: "Tushar Vispute", role: "Lead", icon: <Shield className="w-3.5 h-3.5" />, className: "bg-blue-50 text-blue-700 border-blue-200" },
        { name: "Silky Vispute", role: "Design", icon: <Palette className="w-3.5 h-3.5" />, className: "bg-emerald-50 text-emerald-700 border-emerald-200" },
        { name: "Rahul Sharma", role: "Dev", icon: <Code className="w-3.5 h-3.5" />, className: "bg-amber-50 text-amber-700 border-amber-200" },
    ];

    return (
        <div className="w-full bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all group flex flex-col overflow-hidden">
            <div className="p-6">
                {/* Header */}
                <div className="flex justify-between items-start">
                    <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105">
                            <Users className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-900 group-hover:text-slate-700 transition-colors text-lg tracking-tight">Engineering</h3>
                            <p className="text-sm text-slate-500 mt-0.5">Core Product Team</p>
                        </div>
                    </div>
                    <button className="text-slate-400 hover:text-slate-600 transition-colors p-1.5 rounded-md hover:bg-slate-100">
                        <MoreVertical className="w-5 h-5" />
                    </button>
                </div>

                {/* Team Members Chips instead of Circular Avatars */}
                <div className="mt-8 flex flex-col gap-3">
                    <div className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">Members ({teamMembers.length})</div>
                    <div className="flex flex-wrap gap-2">
                        {teamMembers.map((member, i) => (
                            <div
                                key={i}
                                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border transition-all hover:-translate-y-0.5 hover:shadow-sm cursor-default ${member.className}`}
                            >
                                <span className="opacity-70">{member.icon}</span>
                                <span className="text-xs font-semibold tracking-tight">{member.name}</span>
                            </div>
                        ))}
                        <button className="flex items-center justify-center px-3 py-1.5 rounded-lg border border-dashed border-slate-300 text-slate-400 hover:text-slate-600 hover:border-slate-400 transition-colors text-xs font-semibold bg-slate-50">
                            + Invite
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="bg-slate-50/50 px-6 py-4 border-t border-slate-100 flex items-center justify-between mt-auto hover:bg-slate-50 transition-colors cursor-pointer group/footer">
                <span className="text-slate-600 font-medium text-sm group-hover/footer:text-slate-900 transition-colors">
                    View team details
                </span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover/footer:translate-x-1 group-hover/footer:text-slate-900 transition-all" />
            </div>
        </div>
    );
}