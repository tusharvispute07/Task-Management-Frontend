import TeamCard from "@/components/people/TeamCard"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PeoplePage() {
    const cols = ["Name", "Email", "Role", "Teams", "Actions"]

    const users = [
        {
            id: 1,
            name: "Tushar Vispute",
            email: "tushar@example.com",
            role: "Admin",
            teams: ["Backend", "DevOps"]
        },
        {
            id: 2,
            name: "Rahul Sharma",
            email: "rahul@example.com",
            role: "Member",
            teams: ["Design"]
        }
    ]

    return (
        <div className="flex flex-col gap-8 max-w-6xl mx-auto w-full">

            {/* Header */}
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">People</h1>
            </div>

            <Tabs defaultValue="users">
                <TabsList variant="line">
                    <TabsTrigger value="users">Users</TabsTrigger>
                    <TabsTrigger value="team">Teams</TabsTrigger>
                </TabsList>

                {/* USERS TAB */}
                <TabsContent value="users">
                    <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                        <div className="overflow-x-auto w-full">
                            <table className="w-full text-sm">

                                {/* HEADER */}
                                <thead className="bg-slate-50 border-b">
                                    <tr>
                                        {cols.map((col, index) => (
                                            <th
                                                key={index}
                                                className="px-6 py-3 text-left font-medium text-slate-500"
                                            >
                                                {col}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>

                                {/* BODY */}
                                <tbody>
                                    {users.map((user) => (
                                        <tr
                                            key={user.id}
                                            className="border-b hover:bg-slate-50 transition"
                                        >
                                            {/* Name */}
                                            <td className="px-6 py-4 font-medium text-slate-900">
                                                {user.name}
                                            </td>

                                            {/* Email */}
                                            <td className="px-6 py-4 text-slate-500">
                                                {user.email}
                                            </td>

                                            {/* Role */}
                                            <td className="px-6 py-4">
                                                <span className={`px-2 py-1 text-xs rounded-full font-medium 
                                                    ${user.role === "Admin"
                                                        ? "bg-blue-100 text-blue-600"
                                                        : "bg-slate-100 text-slate-600"
                                                    }`}>
                                                    {user.role}
                                                </span>
                                            </td>

                                            {/* Teams */}
                                            <td className="px-6 py-4">
                                                <div className="flex flex-wrap gap-2">
                                                    {user.teams.map((team, i) => (
                                                        <span
                                                            key={i}
                                                            className="px-2 py-1 text-xs rounded-md bg-slate-100 text-slate-600"
                                                        >
                                                            {team}
                                                        </span>
                                                    ))}
                                                </div>
                                            </td>

                                            {/* Actions */}
                                            <td className="px-6 py-4">
                                                <button className="text-blue-600 text-sm hover:underline">
                                                    Edit
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>

                            </table>
                        </div>
                    </div>
                </TabsContent>

                {/* TEAMS TAB */}
                <TabsContent value="team">
                    <div className="p-6 text-slate-500">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            <TeamCard />
                        </div>
                    </div>
                </TabsContent>

            </Tabs>
        </div>
    )
}