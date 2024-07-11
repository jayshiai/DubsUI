import { Slider } from "./Slider";
import { useEffect, useState } from "react";
export default { title: "DubsUI/Slider" };

export const Primary = () => {
  const [value, setValue] = useState([33]);

  useEffect(() => {
    console.log(value);
  }, [value]);
  return (
    <Slider
      value={value}
      onValueChange={setValue}
      defaultValue={[33]}
      max={100}
      step={1}
    />
  );
};
