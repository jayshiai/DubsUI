import { Button } from "./Button";

export default { title: "DubsUI/Button" };
import { ChevronRight } from "lucide-react";
import { Loader2 } from "lucide-react";
export const Primary = () => <Button variant="default">Primary</Button>;

export const Variant = () => {
  return (
    <div className="flex flex-col items-center font-bold ">
      Variants
      <div className="space-y-2 flex flex-col items-center">
        <div className="space-x-2">
          {/* Default */}
          <Button>Primary</Button>

          {/* Ghost */}
          <Button variant="ghost">Ghost</Button>

          {/* Link */}
          <Button variant="link">Link</Button>
        </div>
        <div className="space-x-2">
          {/* Secondary */}
          <Button variant="secondary">Secondary</Button>

          {/* Outline */}
          <Button variant="outline"> Outline </Button>

          {/* Destructive */}
          <Button variant="destructive">Destructive</Button>
        </div>
      </div>
      Sizes
      <div className="space-x-2 flex items-center">
        {/* Normal */}
        <Button variant="outline">Primary</Button>

        {/* Icon Size */}
        <Button variant="outline" size="icon">
          <ChevronRight className="h-4 w-4" />
        </Button>

        {/* Small */}
        <Button variant="outline" size="sm">
          Small
        </Button>

        {/* Large */}
        <Button variant="outline" size="lg">
          Large
        </Button>
      </div>
      Disabled
      <div>
        {/* Disabled */}
        <Button disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </Button>
      </div>
      Custom Component
      <div>
        <Button asChild>
          <a href="/login">Login</a>
        </Button>
      </div>
    </div>
  );
};
