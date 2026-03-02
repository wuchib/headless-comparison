import { DialogTrigger, Button as RACButton, Popover, Dialog } from 'react-aria-components';
import { Settings2, X } from 'lucide-react';
import { cn } from '../../utils/cn';

export function AriaPopoverDemo() {
  return (
    <DialogTrigger>
      <RACButton className={cn(
        "inline-flex gap-2 items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-zinc-50 border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 text-zinc-700 h-10 px-4 py-2 text-sm",
        "data-[pressed]:bg-zinc-100"
      )}>
        <Settings2 className="w-4 h-4" />
        Settings
      </RACButton>
      <Popover
        className="z-50 w-72 rounded-xl border border-zinc-200 bg-white p-4 shadow-md outline-none data-[entering]:animate-in data-[exiting]:animate-out data-[exiting]:fade-out-0 data-[entering]:fade-in-0 data-[exiting]:zoom-out-95 data-[entering]:zoom-in-95 data-[placement=bottom]:slide-in-from-top-2 data-[placement=top]:slide-in-from-bottom-2"
        offset={5}
      >
        <Dialog className="outline-none">
          {({ close }) => (
            <>
              <div className="flex flex-col gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none text-zinc-900">Dimensions</h4>
                  <p className="text-sm text-zinc-500">Set the dimensions for the layer.</p>
                </div>
                <div className="grid gap-2">
                  <div className="grid grid-cols-3 items-center gap-4">
                    <label htmlFor="aria-width" className="text-sm font-medium text-zinc-900">Width</label>
                    <input id="aria-width" defaultValue="100%" className="col-span-2 flex h-8 w-full rounded-md border border-zinc-200 bg-white px-3 py-1 text-sm ring-offset-white placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 text-zinc-900" />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <label htmlFor="aria-height" className="text-sm font-medium text-zinc-900">Height</label>
                    <input id="aria-height" defaultValue="25px" className="col-span-2 flex h-8 w-full rounded-md border border-zinc-200 bg-white px-3 py-1 text-sm ring-offset-white placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 text-zinc-900" />
                  </div>
                </div>
              </div>
              <button
                onClick={close}
                className="absolute right-3 top-3 rounded-md p-1 opacity-70 hover:bg-zinc-100 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500 text-zinc-500 transition-colors"
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </button>
            </>
          )}
        </Dialog>
      </Popover>
    </DialogTrigger>
  );
}
