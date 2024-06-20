import {
  Select,
  SelectRoot,
  // SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  // SelectLabel,
  SelectItem,
  SelectSeparator,
  // SelectScrollUpButton,
  // SelectScrollDownButton,
} from "./Select";

export default { title: "DubsUI/Select" };

export const Primary = () => {
  return (
    <SelectRoot>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Light</SelectItem>
        <SelectSeparator />

        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </SelectRoot>
  );
};

export const Secondary = () => {
  const items = [
    {
      label: "Fruits",
      items: [
        { value: "apple", label: "Apple" },
        { value: "banana", label: "Banana" },
        { value: "blueberry", label: "Blueberry" },
        { value: "grapes", label: "Grapes" },
        { value: "pineapple", label: "Pineapple" },
      ],
    },
    {
      label: "Vegetables",
      items: [
        { value: "aubergine", label: "Aubergine" },
        { value: "broccoli", label: "Broccoli" },
        { value: "carrot", label: "Carrot", disabled: true },
        { value: "courgette", label: "Courgette" },
        { value: "leek", label: "Leek" },
      ],
    },
    {
      label: "Meat",
      items: [
        { value: "beef", label: "Beef" },
        { value: "chicken", label: "Chicken" },
        { value: "lamb", label: "Lamb" },
        { value: "pork", label: "Pork" },
      ],
    },
  ];

  return (
    <div className="w-[180px]">
      <Select items={items} placeholder="Theme" />
    </div>
  );
};
