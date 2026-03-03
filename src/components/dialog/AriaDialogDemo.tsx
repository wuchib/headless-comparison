import { DialogTrigger, ModalOverlay, Modal, Dialog, Heading, Button as RACButton } from 'react-aria-components';
import { Button } from '../shared/Button';
import { X } from 'lucide-react';
import { cn } from '../../utils/cn';

export function AriaDialogDemo() {
  return (
    <DialogTrigger>
      {/* Trigger must be a RAC component to hook up aria attributes automatically */}
      <RACButton className={cn(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-zinc-50",
        "border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 text-zinc-700 h-10 px-4 py-2 text-sm"
      )}>
        Edit Profile
      </RACButton>
      <ModalOverlay
        isDismissable
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[entering]:animate-overlay-show data-[exiting]:animate-overlay-hide"
      >
        <Modal
          className="fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] overflow-hidden rounded-xl bg-white p-6 border border-zinc-200 shadow-lg data-[entering]:animate-content-show data-[exiting]:animate-content-hide"
        >
          <Dialog className="outline-none">
            {({ close }) => (
              <>
                <div className="flex flex-col space-y-1.5 text-center sm:text-left">
                  <Heading slot="title" className="text-lg font-semibold leading-none tracking-tight text-zinc-900">
                    Edit profile
                  </Heading>
                  <p className="text-sm text-zinc-500">
                    Make changes to your profile here. Click save when you're done.
                  </p>
                </div>

                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="aria-name" className="text-right text-sm font-medium text-zinc-900">Name</label>
                    <input id="aria-name" defaultValue="Pedro Duarte" className="col-span-3 flex h-10 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50 text-zinc-900" />
                  </div>
                </div>

                <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 mt-2">
                  {/* Using our custom button for non-trigger usage */}
                  <Button type="button" variant="outline" onClick={close}>Cancel</Button>
                  <Button type="button" onClick={close}>Save changes</Button>
                </div>

                <button
                  onClick={close}
                  className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 hover:bg-zinc-100 p-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:pointer-events-none text-zinc-500"
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close</span>
                </button>
              </>
            )}
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  );
}
