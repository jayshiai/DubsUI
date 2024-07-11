//@ts-ignore
import { Torus } from "./Torus";

export default {
  title: "Extras/Torus",
};

export const Primary = () => {
  return (
    <div className="w-[500px] h-[500px] ">
      <Torus
        text={"3Dubs"}
        scale={[0.75, 3.25, 0]}
        color={"white"}
        textColor="black"
      />
    </div>
  );
};
