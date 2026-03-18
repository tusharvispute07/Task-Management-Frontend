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
        priority: initialData.priority ? initialData.priority.toLowerCase() : "low",
        status: initialData.status === "In Progress" ? "inProgress" :
            (initialData.status === "Completed" || initialData.status === "Done") ? "completed" : "toDo",
        dueDate: initialData.dueDate ? new Date(initialData.dueDate) : undefined
    } : {
        title: "",
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

    return (
        <div className="p-2">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <input
                    name="title"
                    className="border p-2 rounded"
                    placeholder="Title"
                    value={formData.title}
                    onChange={handleChange}
                />
                <textarea
                    className="border p-2 rounded h-24 resize-none"
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                />

                <Select
                    value={formData.project}
                    onValueChange={(value: string) =>
                        setFormData(prev => ({ ...prev, project: value }))
                    }
                >
                    <SelectTrigger className="bg-background">
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

                <div className="flex gap-2">
                    <Select
                        value={formData.priority}
                        onValueChange={(value: FormData['priority']) =>
                            setFormData(prev => ({ ...prev, priority: value }))
                        }
                    >
                        <SelectTrigger className="bg-background">
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

                    <Select
                        value={formData.status}
                        onValueChange={(value: FormData["status"]) =>
                            setFormData(prev => ({ ...prev, status: value }))
                        }
                    >
                        <SelectTrigger className="bg-background">
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

                <DatePicker
                    value={formData.dueDate} onChange={(date: Date | undefined) =>
                        setFormData(prev => ({ ...prev, dueDate: date }))
                    }
                />

                <Button type="submit">Save</Button>

            </form>
        </div>
    )
}