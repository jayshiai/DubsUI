import { ToggleGroup, ToggleGroupRoot, ToggleGroupItem } from "./ToggleGroup";
import { useEffect, useState } from "react";
export default { title: "DubsUI/ToggleGroup" };

export const Primary = () => {
  const [value, setValue] = useState<string>();

  useEffect(() => {
    console.log(value);
  }, [value]);
  return (
    <ToggleGroupRoot value={value} onValueChange={setValue} type="single">
      <ToggleGroupItem value="a">A</ToggleGroupItem>
      <ToggleGroupItem value="b">B</ToggleGroupItem>
      <ToggleGroupItem value="c">C</ToggleGroupItem>
    </ToggleGroupRoot>
  );
};

export const Multiple = () => {
  const [value, setValue] = useState<string[]>([]);
  useEffect(() => {
    console.log(value);
  }, [value]);
  return (
    <ToggleGroup value={value} onValueChange={setValue} type="multiple">
      <div data-value={"a"}>A</div>
      <div data-value={"b"}>B</div>
      <div data-value={"c"}>C</div>
    </ToggleGroup>
  );
};
