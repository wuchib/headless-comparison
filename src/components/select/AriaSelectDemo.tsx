import { Select, Button, SelectValue, Popover, ListBox, ListBoxItem } from 'react-aria-components';
import { Check, ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';

const items = ['Apple', 'Banana', 'Blueberry', 'Grapes', 'Pineapple'];

export function AriaSelectDemo() {
  return (
    <Select className="flex flex-col gap-1 w-full relative group">
      <Button className={cn(
        "flex h-10 w-full items-center justify-between rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-zinc-500 hover:bg-zinc-50 focus:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-blue-500 data-[focus-visible]:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[open]:ring-2 data-[open]:ring-blue-500"
      )}>
        <SelectValue className="truncate">
          {({ defaultChildren, isPlaceholder }) =>
            isPlaceholder ? <span>Select a fruit</span> : defaultChildren
          }
        </SelectValue>
        <span aria-hidden="true">
          <ChevronDown className="h-4 w-4 text-zinc-400 group-data-[open]:rotate-180 transition-transform duration-200" />
        </span>
      </Button>
      <Popover
        className="z-50 w-[var(--trigger-width)] overflow-hidden rounded-md border border-zinc-200 bg-white text-zinc-950 shadow-md data-[entering]:animate-in data-[exiting]:animate-out data-[exiting]:fade-out-0 data-[entering]:fade-in-0 data-[exiting]:zoom-out-95 data-[entering]:zoom-in-95 data-[placement=bottom]:slide-in-from-top-2 data-[placement=top]:slide-in-from-bottom-2"
        offset={4}
      >
        <ListBox className="p-1 outline-none">
          {items.map((item) => (
            <ListBoxItem
              key={item}
              id={item}
              className={({ isFocused, isSelected }) => cn(
                "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none",
                isFocused ? 'bg-blue-100 text-blue-900' : 'text-zinc-900',
                isSelected ? 'font-medium' : ''
              )}
            >
              {({ isSelected }) => (
                <>
                  <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                    {isSelected && <Check className="h-4 w-4 text-blue-600" />}
                  </span>
                  {item}
                </>
              )}
            </ListBoxItem>
          ))}
        </ListBox>
      </Popover>
    </Select>
  );
}
