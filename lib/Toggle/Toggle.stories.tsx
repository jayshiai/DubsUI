import { Bold } from "lucide-react";
import {
  Toggle,
  // , toggleVariants
} from "./Toggle";
export default { title: "DubsUI/Toggle" };

export const Primary = () => {
  return <Toggle>Toggle</Toggle>;
};

export const Variant = () => {
  return (
    <div className="flex flex-col items-center font-bold ">
      Variants
      <div className="space-x-2">
        {/* Default */}
        <Toggle>Default</Toggle>

        {/* Outline*/}
        <Toggle variant="outline">Outline</Toggle>
      </div>
      Sizes
      <div className="space-x-2 flex items-center">
        {/* Normal */}
        <Toggle variant="outline">Normal</Toggle>

        {/* Small */}
        <Toggle variant="outline" size="sm">
          Small
        </Toggle>
        {/* Large */}
        <Toggle variant="outline" size="lg">
          Large
        </Toggle>
      </div>
      Disabled
      <div>
        {/* Disabled */}
        <Toggle variant="outline" disabled>
          B
        </Toggle>
      </div>
      Custom Component
      <div>
        <Toggle variant="outline">
          <Bold className="h-4 w-4 mr-2" /> Bold
        </Toggle>
      </div>
    </div>
  );
};
