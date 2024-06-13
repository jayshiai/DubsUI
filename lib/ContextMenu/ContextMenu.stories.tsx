import {
    ContextMenu,
    ContextMenuRoot,
    ContextMenuTrigger,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuItemType,
    // ContextMenuCheckboxItem,
    // ContextMenuRadioItem,
    // ContextMenuLabel,
    // ContextMenuSeparator,
    // ContextMenuShortcut,
    // ContextMenuGroup,
    // ContextMenuPortal,
    // ContextMenuSub,
    // ContextMenuSubContent,
    // ContextMenuSubTrigger,
    // ContextMenuRadioGroup,
} from "./ContextMenu"

import {
    Cloud,
    CreditCard,
    Github,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users,
} from "lucide-react"

import { Accordion, AccordionRoot, AccordionItem, AccordionTrigger, AccordionContent } from '../Accordion';




export default { title: 'DubsUI/ContextMenu' };



export const Primary = () => {
    return (
        <div className=" h-[calc(100vh-2rem)]   flex justify-center items-center">
            < ContextMenuRoot  >
                <ContextMenuTrigger>
                    <AccordionRoot type="single" collapsible className="w-full ">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Is it accessible?</AccordionTrigger>
                            <AccordionContent>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Is it styled?</AccordionTrigger>
                            <AccordionContent>
                                Yes. It comes with default styles that matches the other
                                components&apos; aesthetic.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Is it animated?</AccordionTrigger>
                            <AccordionContent>
                                Yes. It&apos;s animated by default, but you can disable it if you
                                prefer.
                            </AccordionContent>
                        </AccordionItem>
                    </AccordionRoot>
                </ContextMenuTrigger>
                <ContextMenuContent >
                    <ContextMenuItem>Profile</ContextMenuItem>
                    <ContextMenuItem>Billing</ContextMenuItem>
                    <ContextMenuItem>Team</ContextMenuItem>
                    <ContextMenuItem>Subscription</ContextMenuItem>
                </ContextMenuContent>
            </ContextMenuRoot >
        </div >
    )
}


export const Abstract = () => {
    const items: ContextMenuItemType[] = [
        { label: 'Home', href: '/', icon: <Cloud className="mr-2 h-4 w-4" /> },
        {
            label: 'Products',
            icon: <CreditCard className="mr-2 h-4 w-4" />,
            items: [
                { label: 'Electronics', href: '/products/electronics', icon: <Github className="mr-2 h-4 w-4" /> },
                { label: 'Clothing', href: '/products/clothing', icon: <Keyboard className="mr-2 h-4 w-4" /> },
                {
                    label: 'More Categories',
                    icon: <LifeBuoy className="mr-2 h-4 w-4" />,
                    items: [
                        { label: 'Books', href: '/products/books', icon: <MessageSquare className="mr-2 h-4 w-4" /> },
                        { label: 'Furniture', href: '/products/furniture', icon: <Mail className="mr-2 h-4 w-4" /> },
                    ]
                }
            ]
        },
        { label: 'About Us', href: '/about', icon: <User className="mr-2 h-4 w-4" /> },
        { label: 'Contact', href: '/contact', icon: <Mail className="mr-2 h-4 w-4" /> },
        {
            label: 'Settings',
            icon: <Settings className="mr-2 h-4 w-4" />,
            items: [
                { label: 'Profile', href: '/settings/profile', icon: <User className="mr-2 h-4 w-4" /> },
                {
                    label: 'Preferences',
                    icon: <UserPlus className="mr-2 h-4 w-4" />,
                    items: [
                        { label: 'Language', href: '/settings/preferences/language', icon: <Cloud className="mr-2 h-4 w-4" /> },
                        { label: 'Theme', href: '/settings/preferences/theme', icon: <LifeBuoy className="mr-2 h-4 w-4" /> },
                    ]
                }
            ]
        },
        {
            label: 'Actions',
            icon: <PlusCircle className="mr-2 h-4 w-4" />,
            items: [
                { label: 'Action 1', onClick: () => alert('Action 1'), icon: <Plus className="mr-2 h-4 w-4" /> },
                { label: 'Action 2', onClick: () => alert('Action 2'), icon: <Plus className="mr-2 h-4 w-4" /> },
            ]
        }
    ];
    return (
        <div className=" h-[calc(100vh-2rem)]   flex justify-center items-center">
            <ContextMenu items={items}>
                <div className="bg-black w-[300px] h-[300px]"></div>
            </ContextMenu>
        </div >
    )
}