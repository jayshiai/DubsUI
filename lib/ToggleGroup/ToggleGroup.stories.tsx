import { ToggleGroup, ToggleGroupRoot, ToggleGroupItem } from "./ToggleGroup";
export default { title: "DubsUI/ToggleGroup" };

export const Primary = () => {
  return (
    <ToggleGroupRoot type="single">
      <ToggleGroupItem value="a">A</ToggleGroupItem>
      <ToggleGroupItem value="b">B</ToggleGroupItem>
      <ToggleGroupItem value="c">C</ToggleGroupItem>
    </ToggleGroupRoot>
  );
};

export const Multiple = () => {
  return <ToggleGroup type="single">A B C</ToggleGroup>;
};
