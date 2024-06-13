import { Progress } from "./Progress"



export default { title: 'DubsUI/Progress' };

export const Primary = () => {
    return (
        <div className="dark bg-black  h-[calc(100vh-2rem)]   flex justify-center items-center">
            <div className="w-[200px]"><Progress value={33} /></div>
        </div >
    )
}