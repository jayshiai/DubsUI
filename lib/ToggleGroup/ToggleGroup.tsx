"use client";
import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { toggleVariants } from "../Toggle";

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupRoot>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupRoot> &
    VariantProps<typeof toggleVariants>
>(({ children, ...props }, ref) => {
  // Ensure that children are of type ReactElement and have a value prop
  const toggleItems = React.Children.map(children, (child) => {
    if (typeof child === "string") {
      return <ToggleGroupItem value={child}>{child}</ToggleGroupItem>;
    } else if (React.isValidElement(child)) {
      const { "data-value": value, children: childChildren } = child.props;
      const innerText =
        typeof childChildren === "string"
          ? childChildren
          : childChildren?.toString() || "";
      return (
        <ToggleGroupItem value={value || innerText}>{child}</ToggleGroupItem>
      );
    }
    return null;
  });

  return (
    <ToggleGroupRoot ref={ref} {...props}>
      {toggleItems}
    </ToggleGroupRoot>
  );
});

const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants>
>({
  size: "default",
  variant: "default",
});

const ToggleGroupRoot = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn("flex items-center justify-center gap-1", className)}
    {...props}
  >
    <ToggleGroupContext.Provider value={{ variant, size }}>
      {children}
    </ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
));

ToggleGroupRoot.displayName = ToggleGroupPrimitive.Root.displayName;

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof toggleVariants>
>(({ className, children, variant, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext);

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        className
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
});

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupRoot, ToggleGroupItem };
