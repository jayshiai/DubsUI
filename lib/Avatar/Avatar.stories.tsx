import { Avatar } from "./Avatar";

export default {
    title: 'DubsUI/Avatar',
};



export const Primary = () => {

    return (
        <Avatar className="w-24 h-24 rounded-none" src="https://github.com/shadcn.png" fallback="avatar" />
    )
}