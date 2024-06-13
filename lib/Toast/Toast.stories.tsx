

import { useToast } from "./use-toast";
import { Button } from "../Button";
import { Toaster } from "./Toaster";
export default { title: 'DubsUI/Toast' };


export const Primary = () => {
    const { toast } = useToast()

    return (
        <div className="h-[calc(100vh-2rem)]   flex justify-center items-center">
            <Toaster />
            <Button
                onClick={() => {
                    toast({
                        title: "Scheduled: Catch up",
                        description: "Friday, February 10, 2023 at 5:57 PM",
                    })
                }}
            >
                Show Toast
            </Button>
        </div>
    )
}