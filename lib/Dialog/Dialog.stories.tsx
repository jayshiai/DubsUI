import {
    DialogRoot,
    // DialogPortal,
    // DialogOverlay,
    // DialogClose,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogDescription,
} from "./Dialog"

import { Button } from "../Button"

export default { title: 'DubsUI/Dialog' };



export const Primary = () => {
    return (
        <DialogRoot>
            <DialogTrigger>Open</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                    <Button variant={"outline"}>Cancle</Button>
                </DialogFooter>
            </DialogContent>
        </DialogRoot>
    )
}