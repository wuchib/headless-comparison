import { useState } from 'react';
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useDismiss,
  useRole,
  useClick,
  useInteractions,
  FloatingPortal,
} from '@floating-ui/react';
import { Settings2, X } from 'lucide-react';
import { Button } from '../shared/Button';

export function FloatingPopoverDemo() {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [
      offset(5),
      flip({ fallbackAxisSideDirection: 'end' }),
      shift(),
    ],
    whileElementsMounted: autoUpdate,
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role,
  ]);

  return (
    <>
      <Button
        ref={refs.setReference}
        {...getReferenceProps()}
        variant="outline"
        className="gap-2"
        data-state={isOpen ? 'open' : 'closed'}
      >
        <Settings2 className="w-4 h-4" />
        Settings
      </Button>
      <FloatingPortal>
        {isOpen && (
          <div
            ref={refs.setFloating as any}
            style={floatingStyles}
            {...getFloatingProps()}
            className="z-50 w-72 rounded-xl border border-zinc-200 bg-white p-4 shadow-md outline-none animate-in fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2"
          >
            <div className="flex flex-col gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none text-zinc-900">Dimensions</h4>
                <p className="text-sm text-zinc-500">Set the dimensions for the layer.</p>
              </div>
              <div className="grid gap-2">
                <div className="grid grid-cols-3 items-center gap-4">
                  <label htmlFor="floating-width" className="text-sm font-medium text-zinc-900">Width</label>
                  <input id="floating-width" defaultValue="100%" className="col-span-2 flex h-8 w-full rounded-md border border-zinc-200 bg-white px-3 py-1 text-sm ring-offset-white placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 text-zinc-900" />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <label htmlFor="floating-height" className="text-sm font-medium text-zinc-900">Height</label>
                  <input id="floating-height" defaultValue="25px" className="col-span-2 flex h-8 w-full rounded-md border border-zinc-200 bg-white px-3 py-1 text-sm ring-offset-white placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 text-zinc-900" />
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-3 top-3 rounded-md p-1 opacity-70 hover:bg-zinc-100 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500 text-zinc-500 transition-colors"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </button>
          </div>
        )}
      </FloatingPortal>
    </>
  );
}
