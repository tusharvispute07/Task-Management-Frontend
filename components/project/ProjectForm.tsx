'use client';

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import DatePicker from "../ui/date-picker"
import { useState } from "react"
import { Button } from "../ui/button";

export default function ProjectForm({ initialData }: { initialData?: any }) {

    type FormData = {
        title: string
        description: string
        priority: "low" | "medium" | "high"
        status: "toDo" | "inProgress" | "completed"
        dueDate?: Date
    }

    const defaultData = initialData ? {
        title: initialData.name || "",
        description: initialData.description || "",
        priority: "low",
        status: initialData.status === "In Progress" ? "inProgress" : 
                initialData.status === "Completed" ? "completed" : "toDo",
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
        console.log("form submitted")
    }

    return (
        <div className="p-2">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit} >
                <input className="border p-2 rounded"
                    name="title"
                    placeholder="Title"
                    value={formData.title}
                    onChange={handleChange}
                />
                <textarea className="border p-2 rounded h-24 resize-none"
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                />
                <div className="flex gap-2">
                    <Select
                        value={formData.priority}
                        onValueChange={(value: FormData["priority"]) =>
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

                <DatePicker value={formData.dueDate} onChange={(date: Date | undefined) =>
                    setFormData(prev => ({ ...prev, dueDate: date }))
                } />
                <Button type="submit">Save</Button>
            </form>
        </div >
    )
}