import {
    TooltipRoot,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "./Tooltip"

export default { title: 'DubsUI/Tooltip' };



export const Primary = () => {
    return (
        <TooltipProvider>
            <TooltipRoot>
                <TooltipTrigger>Hover</TooltipTrigger>
                <TooltipContent>
                    <p>Add to library</p>
                </TooltipContent>
            </TooltipRoot>
        </TooltipProvider>

    )
}