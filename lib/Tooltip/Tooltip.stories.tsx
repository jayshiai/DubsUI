import { Button } from "../Button";
import {
  Tooltip,
  TooltipRoot,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./Tooltip";

export default { title: "DubsUI/Tooltip" };

export const Primary = () => {
  return (
    <Tooltip trigger={<Button variant="ghost">Tip</Button>}>
      This is a tooltip
    </Tooltip>
  );
};
