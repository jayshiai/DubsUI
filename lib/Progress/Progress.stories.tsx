import { Progress } from "./Progress";
import { useState, useEffect } from "react";
export default { title: "DubsUI/Progress" };

export const Primary = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev + 1) % 101);
    }, 100);
    if (progress === 100) clearInterval(interval);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="dark bg-black  h-[calc(100vh-2rem)]   flex justify-center items-center">
      <div className="w-[200px]">
        <Progress value={progress} />
      </div>
    </div>
  );
};
