
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { ChevronRightIcon, ChevronDownIcon, DotsHorizontalIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils"
import { DropdownMenu } from "../DropDownMenu/DropDownMenu";
interface BreadcrumbItem {
    label: string;
    href?: string;
    items?: BreadcrumbItem[];
}

interface BreadcrumbProps {
    className?: string;
    items: BreadcrumbItem[];
    linkComponent?: React.ElementType;
    separator?: React.ReactNode;
}

interface DropdownMenuItem {
    label: string;
    href?: string;
    onClick?: () => void;
    items?: DropdownMenuItem[];
    checked?: boolean;
    icon?: React.ReactNode;
}

const Breadcrumb = React.forwardRef<
    React.ElementRef<typeof BreadcrumbRoot>,
    BreadcrumbProps
>(
    ({ className, items, linkComponent: LinkComponent, separator, ...props }, ref) => {
        const renderBreadcrumbItems = (items: BreadcrumbItem[], isParent = false) => {
            return items.map((item, index) => {
                const isCurrent = index === items.length - 1;
                const hasChildren = item.items && item.items.length > 0;

                return (
                    <React.Fragment key={index}>
                        <BreadcrumbItem className="cursor-pointer">
                            {hasChildren ? (
                                <DropdownMenu items={item.items!.map(mapBreadcrumbToDropdownItem)} trigger={<div className="flex items-center gap-1">{item.label}<ChevronDownIcon className="h-4 w-4" /></div>} />
                            ) : (
                                isCurrent ? (
                                    <BreadcrumbPage>{item.label}</BreadcrumbPage>
                                ) : (
                                    LinkComponent ? (
                                        <BreadcrumbLink asChild>
                                            <LinkComponent href={item.href}>
                                                {item.label}
                                            </LinkComponent>
                                        </BreadcrumbLink>
                                    ) : (
                                        <BreadcrumbLink href={item.href}>
                                            {item.label}
                                        </BreadcrumbLink>
                                    )
                                )
                            )}
                        </BreadcrumbItem>
                        {!isCurrent && (
                            separator ? (
                                <BreadcrumbSeparator>
                                    {separator}
                                </BreadcrumbSeparator>
                            ) : (
                                <BreadcrumbSeparator />
                            )
                        )}
                    </React.Fragment>
                );
            });
        };
        const mapBreadcrumbToDropdownItem = (item: BreadcrumbItem): DropdownMenuItem => ({
            label: item.label,
            href: item.href,
            items: item.items ? item.items.map(mapBreadcrumbToDropdownItem) : undefined
        });

        return (
            <BreadcrumbRoot ref={ref} {...props}>
                <BreadcrumbList className={cn("", className)}>
                    {renderBreadcrumbItems(items)}
                </BreadcrumbList>
            </BreadcrumbRoot>
        );
    }
);

const BreadcrumbRoot = React.forwardRef<
    HTMLElement,
    React.ComponentPropsWithoutRef<"nav"> & {
        separator?: React.ReactNode
    }
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />)
BreadcrumbRoot.displayName = "Breadcrumb"

const BreadcrumbList = React.forwardRef<
    HTMLOListElement,
    React.ComponentPropsWithoutRef<"ol">
>(({ className, ...props }, ref) => (
    <ol
        ref={ref}
        className={cn(
            "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
            className
        )}
        {...props}
    />
))
BreadcrumbList.displayName = "BreadcrumbList"

const BreadcrumbItem = React.forwardRef<
    HTMLLIElement,
    React.ComponentPropsWithoutRef<"li">
>(({ className, ...props }, ref) => (
    <li
        ref={ref}
        className={cn("inline-flex items-center gap-1.5", className)}
        {...props}
    />
))
BreadcrumbItem.displayName = "BreadcrumbItem"

const BreadcrumbLink = React.forwardRef<
    HTMLAnchorElement,
    React.ComponentPropsWithoutRef<"a"> & {
        asChild?: boolean
    }
>(({ asChild, className, ...props }, ref) => {
    const Comp = asChild ? Slot : "a"

    return (
        <Comp
            ref={ref}
            className={cn("transition-colors hover:text-foreground cursor-pointer", className)}
            {...props}
        />
    )
})
BreadcrumbLink.displayName = "BreadcrumbLink"

const BreadcrumbPage = React.forwardRef<
    HTMLSpanElement,
    React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => (
    <span
        ref={ref}
        role="link"
        aria-disabled="true"
        aria-current="page"
        className={cn("font-normal text-foreground", className)}
        {...props}
    />
))
BreadcrumbPage.displayName = "BreadcrumbPage"

const BreadcrumbSeparator = ({
    children,
    className,
    ...props
}: React.ComponentProps<"li">) => (
    <li
        role="presentation"
        aria-hidden="true"
        className={cn("[&>svg]:size-3.5", className)}
        {...props}
    >
        {children ?? <ChevronRightIcon />}
    </li>
)
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"

const BreadcrumbEllipsis = ({
    className,
    ...props
}: React.ComponentProps<"span">) => (
    <span
        role="presentation"
        aria-hidden="true"
        className={cn("flex h-9 w-9 items-center justify-center", className)}
        {...props}
    >
        <DotsHorizontalIcon className="h-4 w-4" />
        <span className="sr-only">More</span>
    </span>
)
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis"

export {
    Breadcrumb,
    BreadcrumbRoot,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator,
    BreadcrumbEllipsis,
}