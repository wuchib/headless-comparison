import { Listbox } from '@headlessui/react';
import { Check, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../../utils/cn';

const items = ['Apple', 'Banana', 'Blueberry', 'Grapes', 'Pineapple'];

export function HeadlessSelectDemo() {
  const [selected, setSelected] = useState(items[0]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      {/* 
        In Headless UI we use wrapper components or render props. 
        It relies on custom wrapper logic rather than complex parts like Radix.
      */}
      <div className="relative w-full">
        <Listbox.Button
          className={cn(
            "flex h-10 w-full items-center justify-between rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-zinc-500 hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[open]:ring-2 data-[open]:ring-blue-500",
          )}
        >
          <span className="block truncate">{selected}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ChevronDown className="h-4 w-4 text-zinc-400" aria-hidden="true" />
          </span>
        </Listbox.Button>

        <Listbox.Options
          transition
          className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border border-zinc-200 bg-white p-1 text-base shadow-md ring-1 ring-black/5 focus:outline-none sm:text-sm data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in"
        >
          {items.map((item, itemIdx) => (
            <Listbox.Option
              key={itemIdx}
              className={({ active, selected }) =>
                `relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none ${active ? 'bg-blue-100 text-blue-900' : 'text-zinc-900'
                }`
              }
              value={item}
            >
              {({ selected, active }) => (
                <>
                  <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                    {item}
                  </span>
                  {selected ? (
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-blue-600">
                      <Check className="h-4 w-4" aria-hidden="true" />
                    </span>
                  ) : null}
                </>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
}
