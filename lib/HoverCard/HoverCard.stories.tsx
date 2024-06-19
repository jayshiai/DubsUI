import {
  HoverCard,
  HoverCardRoot,
  HoverCardTrigger,
  HoverCardContent,
} from "./HoverCard";
import { CalendarDays } from "lucide-react";
import { Button } from "../Button/Button";
import { Avatar, AvatarFallback, AvatarImage } from "../Avatar/Avatar";

export default { title: "DubsUI/HoverCard" };

export const Primary = () => {
  return (
    <HoverCardRoot>
      <HoverCardTrigger>Hover</HoverCardTrigger>
      <HoverCardContent>
        The React Framework – created and maintained by @vercel.
      </HoverCardContent>
    </HoverCardRoot>
  );
};

export const Main = () => {
  return (
    <HoverCard trigger={<Button variant="link">@jayshiai</Button>}>
      <div className="flex justify-between space-x-4">
        <Avatar>
          <AvatarImage src="https://github.com/vercel.png" />
          <AvatarFallback>VC</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <h4 className="text-sm font-semibold">@nextjs</h4>
          <p className="text-sm">
            The React Framework – created and maintained by @vercel.
          </p>
          <div className="flex items-center pt-2">
            <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
            <span className="text-xs text-muted-foreground">
              Joined December 2021
            </span>
          </div>
        </div>
      </div>
    </HoverCard>
  );
};
