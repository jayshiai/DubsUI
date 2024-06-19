"use client";
import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
interface AccordionItemProps {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  className?: string;
  items: AccordionItemProps[];
}

const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  AccordionProps
>(({ className, items, ...props }, ref) => {
  return (
    <AccordionRoot
      ref={ref}
      className={cn("w-full dark:text-white", className)}
      {...props}
      type="single"
      collapsible
    >
      {items.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger>
            {item.title}
            <ChevronDownIcon className="h-4 w-4 shrink-0 transition-transform duration-200" />
          </AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </AccordionRoot>
  );
});

Accordion.displayName = "Accordion";

const AccordionRoot = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export {
  Accordion,
  AccordionRoot,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
};
