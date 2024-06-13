import {
    Breadcrumb,
    BreadcrumbRoot,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator,
    BreadcrumbEllipsis,
} from './Breadcrumb';
export default {
    title: 'DubsUI/Breadcrumb',
};


export const Primary = () => {
    return (
        <>
            <div className='dark bg-black h-[calc(100vh-2rem)]   flex justify-center items-center'>
                <BreadcrumbRoot>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <a href="/">Home</a>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbEllipsis />
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <a href="/docs/components">Components</a>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </BreadcrumbRoot>
            </div>
        </>
    )
}


export const Abstract = () => {
    const breadcrumbItems: BreadcrumbItem[] = [
        { href: "/", label: "Home" },
        { href: "/docs", label: "Docs" },
        {
            label: "Components",
            items: [
                { href: "/docs/components", label: "Components" },
                { href: "/docs/components/breadcrumb", label: "Breadcrumb" },
                { href: "/docs/components/button", label: "Button" },
                {
                    href: "/docs/components/dropdown-menu", label: "Dropdown Menu",

                    items: [
                        { href: "/docs/components/alert-dialog", label: "Alert Dialog" },
                        { href: "/docs/components/tooltip", label: "Tooltip" },
                        { href: "/docs/components/popover", label: "Popover" },
                    ]
                },
            ]
        },
        { label: "Breadcrumb" }
    ];
    return (
        <div className='dark bg-black h-[calc(100vh-2rem)]   flex justify-center items-center'>
            <Breadcrumb items={breadcrumbItems}
            />
        </div>
    )
}