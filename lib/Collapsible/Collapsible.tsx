"use client";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import React from "react";
import { ChevronsUpDown } from "lucide-react";
import { Button } from "../Button/Button";

interface CollapsibleProps {
  children: React.ReactNode;
  title: React.ReactNode;
  show?: number;
}
const Collapsible = ({ children, title, show }: CollapsibleProps) => {
  const childrenArray = React.Children.toArray(children);
  const visibleChildren = show ? childrenArray.slice(0, show) : [];
  const hiddenChildren = show ? childrenArray.slice(show) : childrenArray;

  return (
    <CollapsibleRoot className="w-[350px] space-y-2 dark:text-white">
      <div className="flex items-center justify-between space-x-4">
        {title}
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 h-9 p-0">
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      {visibleChildren}
      <CollapsibleContent className="space-y-2">
        {hiddenChildren}
      </CollapsibleContent>
    </CollapsibleRoot>
  );
};
const CollapsibleRoot = CollapsiblePrimitive.Root;

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;

export { Collapsible, CollapsibleRoot, CollapsibleTrigger, CollapsibleContent };
