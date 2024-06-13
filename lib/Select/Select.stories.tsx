import {
    SelectRoot,
    // SelectGroup,
    SelectValue,
    SelectTrigger,
    SelectContent,
    // SelectLabel,
    SelectItem,
    // SelectSeparator,
    // SelectScrollUpButton,
    // SelectScrollDownButton,
} from "./Select"


export default { title: 'DubsUI/Select' };


export const Primary = () => {
    return (
        <SelectRoot>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
            </SelectContent>
        </SelectRoot>
    )
}