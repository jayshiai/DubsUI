
import { PopoverRoot, PopoverTrigger, PopoverContent } from "./Popover"
import { Button } from "../Button/Button"

export default { title: 'DubsUI/Popover' };


export const Primary = () => {
    return (
        <div className=" bg-black h-[calc(100vh-2rem)]   flex justify-center items-center">
            <PopoverRoot>
                <PopoverTrigger className="dark ">Open</PopoverTrigger>
                <PopoverContent className="dark ">Place content for the popover here.</PopoverContent>
            </PopoverRoot>
        </div>
    )
}

export const Fancy = () => {
    return (
        <PopoverRoot>
            <PopoverTrigger asChild>
                <Button variant="outline">Open popover</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
                <div className="grid gap-4">
                    <div className="space-y-2">
                        <h4 className="font-medium leading-none">Dimensions</h4>
                        <p className="text-sm text-muted-foreground">
                            Set the dimensions for the layer.
                        </p>
                    </div>
                    <div className="grid gap-2">
                        <div className="grid grid-cols-3 items-center gap-4">
                            <label htmlFor="width">Width</label>
                            <input
                                id="width"
                                defaultValue="100%"
                                className="col-span-2 h-8"
                            />
                        </div>

                        <div className="grid grid-cols-3 items-center gap-4">
                            <label htmlFor="height">Height</label>
                            <input
                                id="height"
                                defaultValue="25px"
                                className="col-span-2 h-8"
                            />
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                            <label htmlFor="maxHeight">Max. height</label>
                            <input
                                id="maxHeight"
                                defaultValue="none"
                                className="col-span-2 h-8"
                            />
                        </div>
                    </div>
                </div>
            </PopoverContent>
        </PopoverRoot>
    )
}