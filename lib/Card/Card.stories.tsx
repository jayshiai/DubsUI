import { CardRoot, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "./Card"

export default { title: 'DubsUI/Card' };

export const Primary = () => {
    return (
        <div className="bg-black dark  h-[calc(100vh-2rem)]   flex justify-center items-center">
            <CardRoot className="w-[350px]">
                <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </CardRoot>
        </div>

    )
}