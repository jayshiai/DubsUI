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
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuItemType,
  DropdownMenuRoot,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "./DropDownMenu";

import { Button } from "../Button";

export default {
  title: "DubsUI/DropDownMenu",
};

export const Fancy = () => {
  return (
    <div className="dark bg-black h-[calc(100vh-2rem)]   flex justify-center items-center">
      <DropdownMenuRoot>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Open</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Keyboard className="mr-2 h-4 w-4" />
              <span>Keyboard shortcuts</span>
              <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Users className="mr-2 h-4 w-4" />
              <span>Team</span>
            </DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <UserPlus className="mr-2 h-4 w-4" />
                <span>Invite users</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>
                    <Mail className="mr-2 h-4 w-4" />
                    <span>Email</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <MessageSquare className="mr-2 h-4 w-4" />
                    <span>Message</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    <span>More...</span>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuItem>
              <Plus className="mr-2 h-4 w-4" />
              <span>New Team</span>
              <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Github className="mr-2 h-4 w-4" />
            <span>GitHub</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LifeBuoy className="mr-2 h-4 w-4" />
            <span>Support</span>
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            <Cloud className="mr-2 h-4 w-4" />
            <span>API</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuRoot>
    </div>
  );
};

export const Simple = () => {
  return (
    <DropdownMenuRoot>
      <DropdownMenuTrigger className="">Open</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenuRoot>
  );
};

export const Abstract = () => {
  const items: DropdownMenuItemType[] = [
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
    <DropdownMenu
      className="min-w-[200px]"
      items={items}
      trigger={<Button variant={"default"}>Open</Button>}
    />
  );
};
