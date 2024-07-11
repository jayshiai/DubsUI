import {
  ContextMenu,
  ContextMenuRoot,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuItemType,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  //   ContextMenuGroup,
  //   ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
} from "./ContextMenu";

import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
} from "lucide-react";

export default { title: "DubsUI/ContextMenu" };

export const Primary = () => {
  return (
    <div className=" h-[calc(100vh-2rem)]   flex justify-center items-center">
      <ContextMenuRoot>
        <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
          Right click here
        </ContextMenuTrigger>
        <ContextMenuContent className="w-64">
          <ContextMenuItem inset>
            Reload
            <ContextMenuShortcut>Ctrl + R</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem inset disabled>
            Forward
            <ContextMenuShortcut>Ctrl + ]</ContextMenuShortcut>
          </ContextMenuItem>

          <ContextMenuItem inset>
            Back
            <ContextMenuShortcut>B</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-48">
              <ContextMenuItem>
                Save Page As...
                <ContextMenuShortcut>Shift + C</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>Create Shortcut...</ContextMenuItem>
              <ContextMenuItem>Name Window...</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem>Developer Tools</ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuCheckboxItem checked>
            Show Bookmarks Bar
            <ContextMenuShortcut>Shift + S</ContextMenuShortcut>
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
          <ContextMenuSeparator />
          <ContextMenuRadioGroup value="3dubs">
            <ContextMenuLabel inset>DubsUI Falvours</ContextMenuLabel>
            <ContextMenuSeparator />
            <ContextMenuRadioItem value="@jayshiai">
              @jayshiai/dubsui
            </ContextMenuRadioItem>
            <ContextMenuRadioItem value="3dubs">
              3dubs/dubsui
            </ContextMenuRadioItem>
            <ContextMenuRadioItem value="devstomorrow">
              devstomorrow/dubsui
            </ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuContent>
      </ContextMenuRoot>
    </div>
  );
};

export const Abstract = () => {
  const items: ContextMenuItemType[] = [
    { label: "Home", href: "/", icon: <Cloud className="mr-2 h-4 w-4" /> },
    {
      label: "Products",
      icon: <CreditCard className="mr-2 h-4 w-4" />,
      items: [
        {
          label: "Electronics",
          href: "/products/electronics",
          icon: <Github className="mr-2 h-4 w-4" />,
        },
        {
          label: "Clothing",
          href: "/products/clothing",
          icon: <Keyboard className="mr-2 h-4 w-4" />,
        },
        {
          label: "More Categories",
          icon: <LifeBuoy className="mr-2 h-4 w-4" />,
          items: [
            {
              label: "Books",
              href: "/products/books",
              icon: <MessageSquare className="mr-2 h-4 w-4" />,
            },
            {
              label: "Furniture",
              href: "/products/furniture",
              icon: <Mail className="mr-2 h-4 w-4" />,
            },
          ],
        },
      ],
    },
    {
      label: "About Us",
      href: "/about",
      icon: <User className="mr-2 h-4 w-4" />,
    },
    {
      label: "Contact",
      href: "/contact",
      icon: <Mail className="mr-2 h-4 w-4" />,
    },
    {
      label: "Settings",
      icon: <Settings className="mr-2 h-4 w-4" />,
      items: [
        {
          label: "Profile",
          href: "/settings/profile",
          icon: <User className="mr-2 h-4 w-4" />,
        },
        {
          label: "Preferences",
          icon: <UserPlus className="mr-2 h-4 w-4" />,
          items: [
            {
              label: "Language",
              href: "/settings/preferences/language",
              icon: <Cloud className="mr-2 h-4 w-4" />,
            },
            {
              label: "Theme",
              href: "/settings/preferences/theme",
              icon: <LifeBuoy className="mr-2 h-4 w-4" />,
            },
          ],
        },
      ],
    },
    {
      label: "Actions",
      icon: <PlusCircle className="mr-2 h-4 w-4" />,
      items: [
        {
          label: "Action 1",
          onClick: () => alert("Action 1"),
          icon: <Plus className="mr-2 h-4 w-4" />,
        },
        {
          label: "Action 2",
          onClick: () => alert("Action 2"),
          icon: <Plus className="mr-2 h-4 w-4" />,
        },
      ],
    },
  ];
  return (
    <div className=" h-[calc(100vh-2rem)]   flex justify-center items-center">
      <ContextMenu items={items}>
        <div className=" w-[300px] h-[150px] flex justify-center items-center border  border-dashed">
          Right Click
        </div>
      </ContextMenu>
    </div>
  );
};
