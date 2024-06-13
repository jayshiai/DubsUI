import { HoverCard, HoverCardTrigger, HoverCardContent } from "./HoverCard"


export default { title: 'DubsUI/HoverCard' };


export const Primary = () => {
    return (
        <HoverCard>
            <HoverCardTrigger>Hover</HoverCardTrigger>
            <HoverCardContent>
                The React Framework – created and maintained by @vercel.
            </HoverCardContent>
        </HoverCard>

    )
}