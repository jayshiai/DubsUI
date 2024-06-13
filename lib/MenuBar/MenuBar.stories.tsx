import {
    Menubar,
    MenubarItemType,
    MenubarTriggerProps,
    MenubarRoot,

    MenubarMenu,
    MenubarTrigger,
    MenubarContent,
    MenubarItem,
    MenubarSeparator,
    // MenubarLabel,
    MenubarCheckboxItem,
    MenubarRadioGroup,
    MenubarRadioItem,
    // MenubarPortal,
    MenubarSubContent,
    MenubarSubTrigger,
    // MenubarGroup,
    MenubarSub,
    MenubarShortcut,
} from "./MenuBar"
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
export default { title: 'DubsUI/MenuBar' };


export const Primary = () => {
    return (
        <MenubarRoot>
            <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>New Window</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Share</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Print</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </MenubarRoot>

    )
}

export const Fancy = () => {
    return (
        <MenubarRoot>
            <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                        New Window <MenubarShortcut>⌘N</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem disabled>New Incognito Window</MenubarItem>
                    <MenubarSeparator />
                    <MenubarSub>
                        <MenubarSubTrigger>Share</MenubarSubTrigger>
                        <MenubarSubContent>
                            <MenubarItem>Email link</MenubarItem>
                            <MenubarItem>Messages</MenubarItem>
                            <MenubarItem>Notes</MenubarItem>
                        </MenubarSubContent>
                    </MenubarSub>
                    <MenubarSeparator />
                    <MenubarItem>
                        Print... <MenubarShortcut>⌘P</MenubarShortcut>
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>Edit</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                        Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                        Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarSub>
                        <MenubarSubTrigger>Find</MenubarSubTrigger>
                        <MenubarSubContent>
                            <MenubarItem>Search the web</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>Find...</MenubarItem>
                            <MenubarItem>Find Next</MenubarItem>
                            <MenubarItem>Find Previous</MenubarItem>
                        </MenubarSubContent>
                    </MenubarSub>
                    <MenubarSeparator />
                    <MenubarItem>Cut</MenubarItem>
                    <MenubarItem>Copy</MenubarItem>
                    <MenubarItem>Paste</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>View</MenubarTrigger>
                <MenubarContent>
                    <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
                    <MenubarCheckboxItem checked>
                        Always Show Full URLs
                    </MenubarCheckboxItem>
                    <MenubarSeparator />
                    <MenubarItem inset>
                        Reload <MenubarShortcut>⌘R</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem disabled inset>
                        Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem inset>Toggle Fullscreen</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem inset>Hide Sidebar</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>Profiles</MenubarTrigger>
                <MenubarContent>
                    <MenubarRadioGroup value="benoit">
                        <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                        <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
                        <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
                    </MenubarRadioGroup>
                    <MenubarSeparator />
                    <MenubarItem inset>Edit...</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem inset>Add Profile...</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </MenubarRoot>
    )
}


export const Abstract = () => {
    const items1: MenubarItemType[] = [
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

    const items2: MenubarItemType[] = [
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

    const triggers = [
        {
            trigger: "File",
            items: items1
        },
        {
            trigger: "Edit",
            items: items2
        }
    ]
    return (
        <Menubar triggers={triggers} />
    )
}