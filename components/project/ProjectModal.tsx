
import { Field, FieldLabel } from "@/components/ui/field"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function ProjectModal() {
    return (
        <div className="p-2">
            <form className="flex flex-col gap-4">
                <input className="border p-2 rounded" placeholder="Title" />
                <textarea className="border p-2 rounded h-24 resize-none" placeholder="Description" />
                <Field>
                    <FieldLabel>SelectPriority</FieldLabel>
                </Field>
                <Select>
                    <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Select Priority" />
                    </SelectTrigger>

                    <SelectContent>
                        <SelectItem>Low</SelectItem>
                        <SelectItem>Medium</SelectItem>
                        <SelectItem>High</SelectItem>
                    </SelectContent>
                    {/* Select Priority */}
                    {/* </option>
                <option>Low</option>
                <option>Medium</option>
                <option>HIgh</option> */}
                </Select>
                <select className="border p-2 rounded" defaultValue="">
                    <option value="" disabled>
                        Select Status
                    </option>
                    <option>To Do</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                </select>
                <input type="date" placeholder="Due Date" />
            </form>
        </div >
    )
}