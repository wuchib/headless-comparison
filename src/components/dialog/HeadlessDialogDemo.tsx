import { Dialog, DialogPanel, DialogTitle, DialogBackdrop } from '@headlessui/react';
import { X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../shared/Button';

export function HeadlessDialogDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button variant="outline" onClick={() => setIsOpen(true)}>
        Edit Profile
      </Button>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/50 backdrop-blur-sm data-[closed]:opacity-0 transition-opacity duration-200 ease-out"
        />

        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-full max-w-lg transform overflow-hidden rounded-xl bg-white p-6 border border-zinc-200 shadow-lg transition-all duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
          >
            <div className="flex flex-col space-y-1.5 text-center sm:text-left">
              <DialogTitle className="text-lg font-semibold leading-none tracking-tight text-zinc-900">
                Edit profile
              </DialogTitle>
              <p className="text-sm text-zinc-500">
                Make changes to your profile here. Click save when you're done.
              </p>
            </div>

            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="headless-name" className="text-right text-sm font-medium text-zinc-900">Name</label>
                <input id="headless-name" defaultValue="Pedro Duarte" className="col-span-3 flex h-10 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50 text-zinc-900" />
              </div>
            </div>

            <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 mt-2">
              <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
              <Button type="button" onClick={() => setIsOpen(false)}>Save changes</Button>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 hover:bg-zinc-100 p-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:pointer-events-none text-zinc-500"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </button>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
