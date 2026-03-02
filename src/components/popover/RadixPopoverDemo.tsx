import * as PopoverPrimitive from '@radix-ui/react-popover';
import { Settings2, X } from 'lucide-react';
import { Button } from '../shared/Button';

export function RadixPopoverDemo() {
  return (
    <PopoverPrimitive.Root>
      <PopoverPrimitive.Trigger asChild>
        <Button variant="outline" className="gap-2">
          <Settings2 className="w-4 h-4" />
          Settings
        </Button>
      </PopoverPrimitive.Trigger>
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          className="z-50 w-72 rounded-xl border border-zinc-200 bg-white p-4 shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
          sideOffset={5}
        >
          <div className="flex flex-col gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none text-zinc-900">Dimensions</h4>
              <p className="text-sm text-zinc-500">Set the dimensions for the layer.</p>
            </div>
            <div className="grid gap-2">
              <div className="grid grid-cols-3 items-center gap-4">
                <label htmlFor="radix-width" className="text-sm font-medium text-zinc-900">Width</label>
                <input id="radix-width" defaultValue="100%" className="col-span-2 flex h-8 w-full rounded-md border border-zinc-200 bg-white px-3 py-1 text-sm ring-offset-white placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 text-zinc-900" />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <label htmlFor="radix-height" className="text-sm font-medium text-zinc-900">Height</label>
                <input id="radix-height" defaultValue="25px" className="col-span-2 flex h-8 w-full rounded-md border border-zinc-200 bg-white px-3 py-1 text-sm ring-offset-white placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 text-zinc-900" />
              </div>
            </div>
          </div>
          <PopoverPrimitive.Close className="absolute right-3 top-3 rounded-md p-1 opacity-70 hover:bg-zinc-100 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500 text-zinc-500 transition-colors">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </PopoverPrimitive.Close>
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  );
}
