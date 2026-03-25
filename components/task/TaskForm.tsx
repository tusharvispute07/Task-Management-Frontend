import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";
import DatePicker from "../ui/date-picker";
import { Button } from "../ui/button";
import { useState } from "react";

export default function TaskForm({ initialData }: { initialData?: any }) {

    type FormData = {
        title: string
        project: string
        description: string
        priority: "low" | "medium" | "high"
        status: "toDo" | "inProgress" | "completed"
        dueDate?: Date
    }

    const defaultData = initialData ? {
        title: initialData.title || initialData.name || "",
        description: initialData.description || "",
        project: initialData.project || "",
        priority: initialData.priority ? initialData.priority.toLowerCase() : "low",
        status: initialData.status === "In Progress" ? "inProgress" :
            (initialData.status === "Completed" || initialData.status === "Done") ? "completed" : "toDo",
        dueDate: initialData.dueDate ? new Date(initialData.dueDate) : undefined
    } : {
        title: "",
        project: "",
        description: "",
        priority: "low",
        status: "toDo",
        dueDate: undefined
    };

    const [formData, setFormData] = useState<FormData>(defaultData as FormData)

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setFormData(
            (prev) => (
                {
                    ...prev,
                    [name]: value,
                }
            )
        )
    }

    const handleSubmit = (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();
        console.log("Form Submitted")
    }

    const inputClasses = "w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all bg-slate-50/50 hover:bg-slate-50 focus:bg-white shadow-sm";
    const labelClasses = "text-xs font-bold text-slate-700 uppercase tracking-widest mb-1.5 block";

    return (
        <div className="p-1">
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>

                <div>
                    <label className={labelClasses}>Task Title</label>
                    <input
                        name="title"
                        className={inputClasses}
                        placeholder="e.g. Design Landing Page"
                        value={formData.title}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label className={labelClasses}>Project</label>
                    <Select
                        value={formData.project}
                        onValueChange={(value: string) =>
                            setFormData(prev => ({ ...prev, project: value }))
                        }
                    >
                        <SelectTrigger className={`${inputClasses} h-auto`}>
                            <SelectValue placeholder="Select Project" />
                        </SelectTrigger>

                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Project</SelectLabel>
                                <SelectItem value='Website Redesign'>Website Redesign</SelectItem>
                                <SelectItem value='Mobile App V2'>Mobile App V2</SelectItem>
                                <SelectItem value='Q4 Marketing Campaign'>Q4 Marketing Campaign</SelectItem>
                                <SelectItem value='Database Migration'>Database Migration</SelectItem>
                                <SelectItem value='Payment Gateway'>Payment Gateway</SelectItem>
                                <SelectItem value='Analytics Dashboard'>Analytics Dashboard</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                <div>
                    <label className={labelClasses}>Description</label>
                    <textarea
                        className={`${inputClasses} h-28 resize-none`}
                        name="description"
                        placeholder="Details about this task..."
                        value={formData.description}
                        onChange={handleChange}
                    />
                </div>

                <div className="flex gap-4">
                    <div className="flex-1">
                        <label className={labelClasses}>Priority</label>
                        <Select
                            value={formData.priority}
                            onValueChange={(value: FormData['priority']) =>
                                setFormData(prev => ({ ...prev, priority: value }))
                            }
                        >
                            <SelectTrigger className={`${inputClasses} h-auto`}>
                                <SelectValue placeholder="Select Priority" />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Priority</SelectLabel>
                                    <SelectItem value='low'>Low</SelectItem>
                                    <SelectItem value='medium'>Medium</SelectItem>
                                    <SelectItem value='high'>High</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="flex-1">
                        <label className={labelClasses}>Status</label>
                        <Select
                            value={formData.status}
                            onValueChange={(value: FormData["status"]) =>
                                setFormData(prev => ({ ...prev, status: value }))
                            }
                        >
                            <SelectTrigger className={`${inputClasses} h-auto`}>
                                <SelectValue placeholder="Select Status" />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Status</SelectLabel>
                                    <SelectItem value='toDo'>To Do</SelectItem>
                                    <SelectItem value='inProgress'>In Progress</SelectItem>
                                    <SelectItem value='completed'>Completed</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div>
                    <label className={labelClasses}>Due Date</label>
                    <div className="w-full">
                        <DatePicker
                            value={formData.dueDate} onChange={(date: Date | undefined) =>
                                setFormData(prev => ({ ...prev, dueDate: date }))
                            }
                        />
                    </div>
                </div>

                <Button type="submit" className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium h-11 rounded-lg mt-2 shadow-sm transition-all focus:ring-2 focus:ring-slate-900/20">
                    Save Task
                </Button>

            </form>
        </div>
    )
}