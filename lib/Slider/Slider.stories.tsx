import { Slider } from "./Slider"

export default { title: "DubsUI/Slider" }

export const Primary = () => {
    return (
        <Slider defaultValue={[33]} max={100} step={1} />
    )
}